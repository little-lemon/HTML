define(['../common'], function(common) {
		
	require([
		'echarts',
		'jquery',
		'jsapp/createPage',
		'jsapp/menuSlide',
		'jsapp/createTime',
		'jsapp/grid'
	], function(echarts, $, oPage,oSlide,oCtime,oGrid){
		
		var options = {
			currpage:1,         //当前页数
			pagerow:[8,10,15],  //每页显示条数
			pageCount:1,        //总页数
			total:1,            //总数
			limit:8,            //当前选则的每页显示条数
			url:'../data/terminallog.json',              //获取数据的地址
			el:'.pagecontent'  //分页数据插入位置
		}
		
		oPage.page(options).init()
		//	查询区域伸缩
		oSlide.Slide('#showsearch','.hidecont');
		
		//	生成时间
		oCtime.createTime('#starttime',{
			isinitVal:true,
            //festival:true,
            ishmsVal:false,
            minDate: '2016-06-16 23:59:59',           
            format:"YYYY-MM-DD hh:mm:ss",
		});
		
		
		//表格数据
		var gridData = [     
	   		[1,'爱奇艺','2017-02-06 20:18:18' ,'linqs' ,'200.200.196.64' ,'200.200.196.64' ,'10.10.200.64' ,'3874.5M' ,'3874.5' ,'80' ,'80' ,'tcp' ,'http://echarts.baidu.com/demo.html'],  
	   		[2,'爱奇艺','2017-02-06 20:18:18' ,'linqs' ,'200.200.196.64' ,'200.200.196.64' ,'10.10.200.64' ,'3874.5M' ,'3874.5' ,'80' ,'80' ,'tcp' ,'http://echarts.baidu.com/demo.html'],    
	   		[3,'爱奇艺','2017-02-06 20:18:18' ,'linqs' ,'200.200.196.64' ,'200.200.196.64' ,'10.10.200.64' ,'3874.5M' ,'3874.5' ,'80' ,'80' ,'tcp' ,'http://echarts.baidu.com/demo.html'],    
	   		[4,'爱奇艺','2017-02-06 20:18:18' ,'linqs' ,'200.200.196.64' ,'200.200.196.64' ,'10.10.200.64' ,'3874.5M' ,'3874.5' ,'80' ,'80' ,'tcp' ,'http://echarts.baidu.com/demo.html'],    
	   		[5,'爱奇艺','2017-02-06 20:18:18' ,'linqs' ,'200.200.196.64' ,'200.200.196.64' ,'10.10.200.64' ,'3874.5M' ,'3874.5' ,'80' ,'80' ,'tcp' ,'http://echarts.baidu.com/demo.html'],    
	   		[6,'爱奇艺','2017-02-06 20:18:18' ,'linqs' ,'200.200.196.64' ,'200.200.196.64' ,'10.10.200.64' ,'3874.5M' ,'3874.5' ,'80' ,'80' ,'tcp' ,'http://echarts.baidu.com/demo.html'],    
	   		[7,'爱奇艺','2017-02-06 20:18:18' ,'linqs' ,'200.200.196.64' ,'200.200.196.64' ,'10.10.200.64' ,'3874.5M' ,'3874.5' ,'80' ,'80' ,'tcp' ,'http://echarts.baidu.com/demo.html'],    
	   		[8,'爱奇艺','2017-02-06 20:18:18' ,'linqs' ,'200.200.196.64' ,'200.200.196.64' ,'10.10.200.64' ,'3874.5M' ,'3874.5' ,'80' ,'80' ,'tcp' ,'http://echarts.baidu.com/demo.html']
        ];
	  
	    //表格相关信息
	    var OGridinfo = {
	   		data:gridData,
	   		colModel:[
	   			{display:"序号",name:'id'},
	   			{display:"应用名称",name:'name'},
	   			{display:"发生时间",name:'dt'},
	   			{display:"用户",name:'username'},
	   			{display:"用户IP",name:'userip'},
	   			{display:"源IP",name:'sip'},
	   			{display:"目标IP",name:'dip'},
	   			{display:"发送流量",name:'sflow'},
	   			{display:"接收流量",name:'rflow'},
	   			{display:"源端口",name:'sport'},
	   			{display:"目的端口",name:'dport'},
	   			{display:"协议",name:'protocol'},
	   			{display:"URL",name:'url'}
	   		]
	    }
		
		var grid = oGrid.createGrid(OGridinfo);
	    $('#table').html(grid);
		
		/*
		//	分页相关信息
		var oPageinfo = {	//	分页的信息
			rowcount :  20,	//	一共有的条数			
			pagerow : [8,10,20],	//	每页显示条数
			pagecount : 8,	//	总共有的页数
			currpage : 3	//	当前页数
		},
		
		pagelist = '';	//	分页代码
		pagelist = oPage.createPage(oPageinfo);	//创建分页
		$('.pagecontent').html(pagelist);	//	生成分页内容
		oPage.pageInit('.pd1');	//	初始化分页下拉菜单
		oPage.pageInit('.pd2');*/
		
		/*var oPageinfo = {	//	分页的信息
			rowcount :  20,	//	一共有的条数			
			pagerow : [8,10,20],	//	每页显示条数
			pagecount : 8,	//	总共有的页数
			currpage : 3	//	当前页数
		},
		
		pagelist = '';	//	分页代码
		pagelist = oPage.createPage(oPageinfo);	//创建分页
		$('.pagecontent').html(pagelist);	//	生成分页内容
		oPage.pageInit('.pd1');	//	初始化分页下拉菜单
		oPage.pageInit('.pd2');*/
		
		
		//new oPage().init(); 
		
		//new page().init(); 
		
		
		
	});

});