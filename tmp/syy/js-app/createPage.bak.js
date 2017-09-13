/**
 * 生成分页插件
 */
define(['../common','exports','jquery'],function (common,exports,$) {
      
	/**
	 * @description 生成下方的分页
	 * @param {Object} oPageinfo 分页相关信息	传入一个对象
	 * 
	 */		
	exports.createPage = function(oPageinfo){
		//	左侧分页内容
		var lpageCont = '';
		lpageCont += '<div class="text-left"> 每页显示 ';		
		lpageCont += '<span id="crow">'+oPageinfo.pagerow[0]+'</span>';
		lpageCont += '<a><img src="images/pagedown.png" class="pagedown pd1"/></a>';
		lpageCont += '<ul class="pagedownlist" id="colcount" style="margin-top:'+ -(oPageinfo.pagerow.length*18 +12 + 16) +'px;">';		
		var rowlist = '';		
		for(var i=0;i<oPageinfo.pagerow.length;i++){
			rowlist += '<li>'+oPageinfo.pagerow[i]+'</li>';
		}
		rowlist += '</ul> 条 | 共 ';
		lpageCont += rowlist;		
		lpageCont += '<span>'+oPageinfo.rowcount+'</span> 条 </div>';
		
		//	右侧分页内容
		var rpageCont = '';
		rpageCont += '<div class="text-right"> 第 ';
		rpageCont += '<span id="cpage">'+oPageinfo.currpage+'</span> ';
		rpageCont += '<a><img src="images/pagedown.png" class="pagedown pd2"/></a> '		
		rpageCont += '<ul class="pagedownlist" id="pagecount" style="margin-top:'+ -(oPageinfo.pagecount*18 +12 +16) +'px;">';		
		var pageList = '';
		for(var i = 1; i <= oPageinfo.pagecount; i++){
			pageList += '<li>'+i+'</li>';
		}
		pageList += '</ul>页 | 共 ';
		rpageCont += pageList;
		rpageCont += '<span id="sumpage">'+oPageinfo.pagecount+'</span> 页 ';
		rpageCont += '<a class="prepage">上一页</a><a class="nextpage">下一页</a></div>';
		
		return lpageCont + rpageCont;
	}
	
	/**
	 * @description 分页菜单初始化
	 * @param {element}	分页菜单的元素
	 * @param {object}	分页菜单的相关选项（指定高度和动画速度）
	 */
	exports.pageInit = function(el,options){
		//	上下页按钮点击事件相关变量
		var btnpre = $('.prepage'),
			btnnext = $('.nextpage'),
			cpage = parseInt($('#cpage').text()),
			sumpage = parseInt($('#sumpage').text());
			
		//	默认选项
		var defaults={
			height:32,
			speed:100
		}
		var opts = $.extend({},defaults,options);
		// 分页按钮下拉
		$(el).click(function(options){
			var colcount = $(this).parent().next();
			var slength = -colcount.height()-options.height;  
			colcount.css('margin-top',slength);
			colcount.slideToggle(options.speed);
		});
		// 下拉按钮点击完
		$(el).parent().next().children().click(function(){
			$(this).parent().slideUp(opts.speed);
			//	根据ID改变当前显示的分页
			if( $(this).parent()[0].id == 'colcount' ){
				$('#crow').html($(this).text());
			}else{
				$('#cpage').html($(this).text());
				cpage = parseInt($('#cpage').text());
			}
		});
		
		
		//	上页点击		
		btnpre.click(function(){
			cpage = cpage - 1;
			cpage = cpage <= 0 ? 1 : cpage;
			$('#cpage').html(cpage);
		});
		//	下页点击
		btnnext.click(function(){				
			cpage = cpage + 1;
			cpage = cpage >= sumpage ? sumpage : cpage;
			$('#cpage').html(cpage);
		});

	}

});



	
