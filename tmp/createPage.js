/**
 * 生成分页插件
 */
define(['../common','exports','jquery'],function (common,exports,$) {
	/**
	 * @description 生成下方的分页
	 * @param {Object} oPageinfo 分页相关信息	传入一个对象
	 * 
	 */		
	var page = function(options){
		this.defaults ={
			currpage:1,         //当前页数
			pagerow:[8,10,15],  //每页显示条数
			pageCount:1,        //总页数
			total:1,            //总数
			limit:8,            //当前选则的每页显示条数
			url:'../data/terminallog.json',              //获取数据的地址
			el:'.pagecontent'  //分页数据插入位置
		}
				
		this.parameter = $.extend(true,this.defaults,options);
		
		console.log(this.parameter);
	}
	
	
	page.prototype.init = function(){
		this.setData();
		return this;
	}
	
	page.prototype.setData = function(){
		this.getGridData(this.parameter.currpage,this.parameter.limit);
		this.getPageData(this.parameter.url,this.parameter.createPage);
		return this;
	}
	
	page.prototype.getGridData = function(){
		
	}
	
	//u获取数据的地址
	page.prototype.getPageData = function(u,createPage){
        var that = this;
        $.ajax({
 			url: u,
 			success: function (d) {
 				that.parameter.total = d.data.total;
	            that.parameter.pageCount = Math.ceil(that.parameter.total/ that.parameter.limit);
 				createPage(that);
 			}
 		});
 		return this;
	}
	
	
	page.prototype.createPage = function(pageInfo){
		//	左侧分页内容
		var lpageCont = '';
		lpageCont += '<div class="text-left"> 每页显示 ';		
		lpageCont += '<span id="crow">'+pageInfo.parameter.limit+'</span>';
		lpageCont += '<a><img src="images/pagedown.png" class="pagedown pd1"/></a>';
		lpageCont += '<ul class="pagedownlist" id="colcount" style="margin-top:'+ -(pageInfo.parameter.pagerow.length*18 +12 + 16) +'px;">';		
		var rowlist = '';		
		for(var i=0,len=pageInfo.parameter.pagerow.length;i<len;i++){
			rowlist += '<li>'+pageInfo.parameter.pagerow[i]+'</li>';
		}
		rowlist += '</ul> 条 | 共 ';
		lpageCont += rowlist;		
		lpageCont += '<span>'+pageInfo.parameter.total+'</span> 条 </div>';
		
		//	右侧分页内容
		var rpageCont = '';
		rpageCont += '<div class="text-right"> 第 ';
		rpageCont += '<span id="cpage">'+pageInfo.parameter.currpage+'</span> ';
		rpageCont += '<a><img src="images/pagedown.png" class="pagedown pd2"/></a> '		
		rpageCont += '<ul class="pagedownlist" id="pagecount" style="margin-top:'+ -(pageInfo.parameter.pageCount*18 +12 +16) +'px;">';		
		var pageList = '';
		for(var i = 1,len=pageInfo.parameter.pageCount; i <= len; i++){
			pageList += '<li>'+i+'</li>';
		}
		pageList += '</ul>页 | 共 ';
		rpageCont += pageList;
		rpageCont += '<span id="sumpage">'+pageInfo.parameter.pageCount+'</span> 页 ';
		rpageCont += '<a class="prepage">上一页</a><a class="nextpage">下一页</a></div>';
		
		$(pageInfo.parameter.el).html(lpageCont + rpageCont);
		pageInfo.parameter.pageLeftEventInit('.pd1');
		pageInfo.parameter.pageRightEventInit('.pd2');
		return this;
	}
	
	page.prototype.pageLeftEventInit = function(el,options){
		this.pagedownSwitch(el,options);
		return this;
	}
	
	page.prototype.pageRightEventInit = function(el,options){
		this.pagedownSwitch(el,options);
		//	上下页按钮点击事件相关变量
		var btnpre = $('.prepage'),
			btnnext = $('.nextpage'),
			cpage = parseInt($('#cpage').text()),
			sumpage = parseInt($('#sumpage').text());
		
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
		return this;
	}
	
	page.prototype.pagedownSwitch = function(el,options){
		var that = this;
		var defaults={
			height:32,
			speed:100
		}
		var opts = $.extend({},defaults,options);
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
				var limit = parseInt(that.limit);
				var currpage = parseInt($('#cpage').text());
				//that.currpage = Math.ceil( (limit*currpage)/$(this).text() );
				that.currpage = Math.ceil( (limit*currpage)/$(this).text() );
				console.log(that.currpage);
				that.limit = $(this).text();
				that.setData();
			}else{
				$('#cpage').html($(this).text());
				cpage = parseInt($('#cpage').text());
			}
		});
		
		return this;
	}
	
	 
	
	exports.page = new page();

});






	
