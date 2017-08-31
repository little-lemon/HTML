/**
 * 生成分页插件
 */
define(['../common','exports','jquery'],function (common,exports,$) {
	/**
	 * @description 生成下方的分页
	 * @param {Object} oPageinfo 分页相关信息	传入一个对象
	 * 
	 */		
	var page = function(){
		this.pageOpts ={
			currpage:1,         //当前页数
			pagerow:[8,10,15],  //每页显示条数
			pageCount:1,        //总页数
			total:1,            //总数
			limit:8,            //当前选则的每页显示条数
			//url:'../data/terminallog.json',              //获取数据的地址
			el:'.pagecontent'  //分页数据插入位置
		}
	}
	
	
	page.prototype.init = function(url,pageOpts,gridOpts){
		this.url = url;
		this.pageOpts = $.extend(true,this.pageOpts,pageOpts);
		this.gridOpts = gridOpts;
		this.setData();
	}
	
	
	page.prototype.setData = function(){
		var that = this;
        $.ajax({
 			url: that.url,
 			success: function (d) {
 				that.pageOpts.total = d.data.total;
	            that.pageOpts.pageCount = Math.ceil(that.pageOpts.total/ that.pageOpts.limit);
	            var star = parseInt(that.pageOpts.currpage-1)*parseInt(that.pageOpts.limit);
	            var end =  star + parseInt(that.pageOpts.limit);
	            that.gridOpts.data = d.data.rows.slice(star,end);
	            that.createGrid();
 				that.createPage();
 			}
 		});
	}
	
	page.prototype.createGrid = function(){
		var gridData = this.gridOpts;
		var result = '<table class="table table-responsive">';
   		result += '<tr class="tabletitle"><th width="3%"></th>';
   		for(var i=0,len=gridData.colModel.length;i<len;i++){
   			result += '<th>'+ gridData.colModel[i].display +'</th>'
   		}
   		result += '<th width="3%"></th>';
   		for(var i=0,len=gridData.data.length;i<len;i++){
   			result += '<tr class="trhover"><td></td>';
   			for(var j in gridData.data[i]) {
		        result += '<td>'+gridData.data[i][j]+'</td>';
		    }    
   			result += '<td></td></tr>';
   		}
   		result += '</table>';
   		
   		$(gridData.el).html(result)
	}
	
	page.prototype.createPage = function(){
		pageInfo = this;
		//	左侧分页内容
		var lpageCont = '';
		lpageCont += '<div class="text-left"> 每页显示 ';		
		lpageCont += '<span id="crow">'+pageInfo.pageOpts.limit+'</span>';
		lpageCont += '<a><img src="images/pagedown.png" class="pagedown pd1"/></a>';
		lpageCont += '<ul class="pagedownlist" id="colcount" style="margin-top:'+ -(pageInfo.pageOpts.pagerow.length*18 +12 + 16) +'px;">';		
		var rowlist = '';		
		for(var i=0,len=pageInfo.pageOpts.pagerow.length;i<len;i++){
			rowlist += '<li>'+pageInfo.pageOpts.pagerow[i]+'</li>';
		}
		rowlist += '</ul> 条 | 共 ';
		lpageCont += rowlist;		
		lpageCont += '<span>'+pageInfo.pageOpts.total+'</span> 条 </div>';
		
		//	右侧分页内容
		var rpageCont = '';
		rpageCont += '<div class="text-right"> 第 ';
		rpageCont += '<span id="cpage">'+pageInfo.pageOpts.currpage+'</span> ';
		rpageCont += '<a><img src="images/pagedown.png" class="pagedown pd2"/></a> '		
		rpageCont += '<ul class="pagedownlist" id="pagecount" style="margin-top:'+ -(pageInfo.pageOpts.pageCount*18 +12 +16) +'px;">';		
		var pageList = '';
		for(var i = 1,len=pageInfo.pageOpts.pageCount; i <= len; i++){
			pageList += '<li>'+i+'</li>';
		}
		pageList += '</ul>页 | 共 ';
		rpageCont += pageList;
		rpageCont += '<span id="sumpage">'+pageInfo.pageOpts.pageCount+'</span> 页 ';
		rpageCont += '<a class="prepage">上一页</a><a class="nextpage">下一页</a></div>';
		
		$(pageInfo.pageOpts.el).html(lpageCont + rpageCont);
		pageInfo.pageLeftEventInit('.pd1');
		pageInfo.pageRightEventInit('.pd2');
		return this;
	}
	
	page.prototype.pageLeftEventInit = function(el,options){
		this.pagedownSwitch(el,options);
		return this;
	}
	
	page.prototype.pageRightEventInit = function(el,options){
		var that = this;
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
			that.pageOpts.currpage = cpage;
			that.setData();
			
		});
		//	下页点击
		btnnext.click(function(){				
			cpage = cpage + 1;
			cpage = cpage >= sumpage ? sumpage : cpage;
			$('#cpage').html(cpage);
			that.pageOpts.currpage = cpage;
			that.setData();
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
		$(el).parent().next().children().on('click',function(){
			$(this).parent().slideUp(opts.speed);
			//	根据ID改变当前显示的分页
			if( $(this).parent()[0].id == 'colcount' ){
				$('#crow').html($(this).text());
				var limit = parseInt(that.pageOpts.limit);
				var currpage = parseInt($('#cpage').text());
				//that.currpage = Math.ceil( (limit*currpage)/$(this).text() );
				var tmp = $(that.gridOpts.el).find('tr');
				//var tmp = tableEment.(tr);
				console.log(tmp);
				that.pageOpts.currpage = Math.ceil( (limit*currpage)/$(this).text() );
				console.log(that.pageOpts.currpage);
				that.pageOpts.limit = $(this).text();
				that.setData();
			}else{
				$('#cpage').html($(this).text());
				cpage = parseInt($('#cpage').text());
				that.pageOpts.currpage = cpage;
				that.setData();
			}
		});
		
		return this;
	}
	
	//new page().init();
	
	exports.page = new page();

});






	
