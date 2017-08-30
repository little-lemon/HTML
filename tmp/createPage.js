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
		this.currpage = 1;         //当前页数
		this.pagerow = [8,10,15];  //每页显示条数
		this.pageCount = 1;        //总页数
		this.total = 1;            //总数
		this.limit = 8;            //当前选则的每页显示条数
		this.url = '../data/terminallog.json',              //获取数据的地址
		this.el = '.pagecontent'               //分页数据插入位置
	}
	
	page.prototype.init = function(){
		this.setData();
	}
	
	page.prototype.setData = function(){
		this.getGridData(this.currpage,this.limit);
		this.getPageData(this.url,this.createPage,this);
	}
	
	page.prototype.getGridData = function(){
		
	}
	
	//u获取数据的地址
	page.prototype.getPageData = function(u,createPage,that){
        $.ajax({
 			url: u,
 			success: function (d) {
 				that.total = d.data.page[0].total;
	            that.currpage = d.data.page[0].page;
	            that.pageCount = Math.ceil(d.data.page[0].total / that.limit);
 				createPage(that);
 			}
 		});
	}
	
	
	page.prototype.createPage = function(pageInfo){
		//	左侧分页内容
		var lpageCont = '';
		lpageCont += '<div class="text-left"> 每页显示 ';		
		lpageCont += '<span id="crow">'+pageInfo.limit+'</span>';
		lpageCont += '<a><img src="images/pagedown.png" class="pagedown pd1"/></a>';
		lpageCont += '<ul class="pagedownlist" id="colcount" style="margin-top:'+ -(pageInfo.pagerow.length*18 +12 + 16) +'px;">';		
		var rowlist = '';		
		for(var i=0;i<pageInfo.pagerow.length;i++){
			rowlist += '<li>'+pageInfo.pagerow[i]+'</li>';
		}
		rowlist += '</ul> 条 | 共 ';
		lpageCont += rowlist;		
		lpageCont += '<span>'+pageInfo.total+'</span> 条 </div>';
		
		//	右侧分页内容
		var rpageCont = '';
		rpageCont += '<div class="text-right"> 第 ';
		rpageCont += '<span id="cpage">'+pageInfo.currpage+'</span> ';
		rpageCont += '<a><img src="images/pagedown.png" class="pagedown pd2"/></a> '		
		rpageCont += '<ul class="pagedownlist" id="pagecount" style="margin-top:'+ -(pageInfo.pagecount*18 +12 +16) +'px;">';		
		var pageList = '';
		for(var i = 1; i <= pageInfo.pagecount; i++){
			pageList += '<li>'+i+'</li>';
		}
		pageList += '</ul>页 | 共 ';
		rpageCont += pageList;
		rpageCont += '<span id="sumpage">'+pageInfo.pageCount+'</span> 页 ';
		rpageCont += '<a class="prepage">上一页</a><a class="nextpage">下一页</a></div>';
		
		$(pageInfo.el).html(lpageCont + rpageCont);
		pageInfo.pageEventInit();
	}
	
	page.prototype.pageEventInit = function(){
		console.log(this);
	}
	
	new page().init(); 

});



	
