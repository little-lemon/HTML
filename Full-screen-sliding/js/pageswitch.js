(function($){
    "use strict";
    var _prefix = (function(temp){
        var aPrefix = ["webkit","Moz","o","ms"],
            props = "";
        for(var i in aPrefix){
            props = aPrefix[i]+"Transition";
            if(temp.style[props] !== undefined){
                return "-"+aPrefix[i].toLowerCase()+"-";
            }
        }
        return false;
    })(document.createElement(PageSwitch));
    var PageSwitch = (function(){
        function PageSwitch(element,options){
            this.settings = $.extend(true,$.fn.PageSwitch.defaults,options || {});
            this.element = element;
            this.init();
        }
        PageSwitch.prototype = {
                /*说明：初始化插件*/
                /*实现：初始化dom结构，布局，分页及绑定事件*/
                init:function(){
                    var me = this;
                    me.selectors = me.settings.selectors;
                    me.sections = me.element.find(me.selectors.sections);
                    me.section = me.sections.find(me.selectors.section);

                    me.direction = me.settings.direction == "vertical" ? true : false;
                    me.pagesCount = me.pagesCount();
                    me.index = (me.settings.index >=0 && me.settings.index < me.pagesCount)? me.settings.index : 0;

                    me.canScroll = true;

                    if(!me.direction || me.index){
                        me._initLayout();
                    }
                    if(me.settings.pagination){
                        me._initPaging();
                    }
                    me._initEvent();
                },
                /*说明：获取滑动页面数量*/
                pagesCount:function(){
                    //return this.section.length;
                },
                /*说明：获取滑动的宽度（横屏滑动）或高度（竖直滑动）*/
                switchLength:function(){
                    return this.direction == 1 ? this.element.height():this.element.width();
                },
                /*说明：向前滑动既上一页*/
                prev:function(){
                    var me = this;
                    if(me.index > 0){
                        me.index--;
                    }else if(me.settings.loop){
                        me.index = me.pagesCount - 1;
                    }
                    me._scrollPage();
                },
                /*说明：向前滑动既下一页*/
                next:function(){
                    var me = this;
                    if(me.index < me.pagesCount){
                        me.index++;
                    }else if(me.settings.loop){
                        me.index = 0;
                    }
                    me._scrollPage();
                },
                /*说明：主要针对横屏情况进行页面布局*/
                _initLayout:function(){
                    var me = this;
                    if(!me.direction){
                        var width = (me.pagesCount * 100) + "%",
                            cellwidth = (100/me.pagesCount).toFixed(2) + "%";
                        me.sections.width(width);
                        me.section.width(cellwidth).css("float","left");
                    }
                    if(me.index){
                        me._scrollPage(true);
                    }
                },
                /*说明：实现分页dom结构及css样式*/
                _initPaging:function(){
                    var me = this,
                        pagesClass = me.selectors.page.substring(1);
                        me.activeClass = me.selectors.active.substring(1);
                    var pageHtml = "<ul class="+pagesClass+">";
                    for(var i=0;i<me.pagesCount;i++){
                        pageHtml += "<li></li>";
                    }
                    pageHtml+="</ul>";
                    me.element.append(pageHtml);
                    var pages = me.element.find(me.selectors.page);
                    me.pageItem = pages.find("li");
                    me.pageItem.eq(me.index).addClass(me.activeClass);
                    if(me.direction){
                        pages.addClass("vertical");
                    }else{
                        pages.addClass("herizontal");
                    }
                },
                /*说明：初始化插件事件*/
                _initEvent:function(){
                    var me = this;
                    me.element.on("click",me.selectors.pages + " li",function(){
                        me.index = $(this).index();
                        me_scrollPage();
                    });
                    me.element.on("mousewheel DOMMouseScroll",function(e){
                        if(me.canScroll){
                            e.preventDefault();
                            var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                            if(delta > 0  && (me.index && !me.settings.loop || me.settings.loop)){
                                me.prev();
                            }else if(delta < 0 && (me.index < (me.pagesCount - 1) && !me.settings.loop || me.settings.loop)){
                                me.next();
                            }
                        }
                    });
                    if(me.settings.keyboard){
                        $(window).on("keydown",function(e){
                            var keyCode = e.keyCode;
                            if(keyCode == 37 || keyCode == 38){
                                me.prev();
                            }else if(keyCode == 39 || keyCode == 40){
                                me.next();
                            }
                        });
                    }
                    var resizeId;
                    $(window).resize(function(){
                        clearTimeout(resizeId);
                        resizeId = setTimeout(function(){
                            var currentLength = me.switchLength();
                            var offset = me.settings.direction ? me.section.eq(me.index).offset().top : me.section.eq(me.index).offset().left;
                            if(Math.abs(offset) > currentLength/2 && me.index < (me.pagesCount - 1)){
                                me.index++;
                            }
                            if(me.index){
                                me._scrollPage();
                            }
                        },500);

                        /*支持CSS3动画的浏览器，绑定transitionend事件(即在动画结束后调用起回调函数)*/
                        if(_prefix){
                            me.sections.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend", function(){
                                me.canscroll = true;
                                if(me.settings.callback && $.type(me.settings.callback) === "function"){
                                    me.settings.callback();
                                }
                            })
                        }
                    });
                    me.sections.on("transitioned webkitTransitionEnd oTransitionEnd otransitioned",function(){
                        me.canScroll = true;
                        if(me.settings.callback && $.type(me.settings.callback) == "function"){
                            me.settings.callback();
                        }
                    });
                },
                /*说明：滑动动画*/
                _scrollPage:function(){
                    var me = this,
                        dest = me.section.eq(me.index).position();
                    if(!dest) return;
                    me.canScroll = false;
                    if(_prefix){
                        me.sections.css(_prefix+"transition","all "+me.settings.duration+"ms "+me.sections.easing);
                        var translate = me.direction ? "translateY(-"+dest.top+"px)" : "translateX(-"+dest.left+"px)";
                        me.sections.css(_prefix+"transform",translate);
                    }else{
                        var animateCss = me.direction ? {top:-dest.top}:{left:-dest.left};
                        me.sections.animate(animateCss,me.sections.duration,function(){
                            me.canScroll = true;
                            if(me.settings.callback && me.type(me.settings.callback) == "function"){
                                me.settings.callback();
                            }
                        });
                    }
                    if(me.settings.pagination){
                        me.pageItem.eq(me.index).addClass(me.activeClass).siblings("li").removeClass(me.activeClass);
                    }
                }
        }
        return PageSwitch;
    })();
    $.fn.PageSwitch = function(options){
        return this.each(function(){
            var me = $(this),
                instance = me.data("PageSwitch");
            if(!instance){
                instance = new PageSwitch(me,options);
                me.data("PageSwitch",instance);
            }
            if($.type(options) === 'string')  return instance[options]();
            $("div").PageSwitch("init");
        });
    }
    $.fn.PageSwitch.defaults = {
        selectors:{
            sections:".sections",
            section:".section",
            page:".pages",
            active:".active",
        },
        index : 0,
        easing : "ease",
        duration:500,
        loop:false,
        pagination:true,
        keyboard:true,
        direction:"vertical",  //herizontal
        callback:""
    }
    $(function(){
        $('[data-PageSwitch]').PageSwitch();
    });
})(jQuery);
