define(['../common'], function(common) {
		
	require([
		'echarts',
		'jquery',
		'jsapp/createPage',
		'jsapp/menuSlide',
		'jsapp/createTime',
		'jsapp/grid'
	], function(echarts, $, oPage,oSlide,oCtime,oGrid){
		
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
		
		//表格页面数据设置
		var url = '../data/terminallog.json';              //获取数据的地址
		/*分页的数据设置*/
		var pageOpts = {
			currpage:1,         //当前页数
			pagerow:[8,10,15],  //每页显示条数
			pageCount:1,        //总页数
			total:12,            //总数
			limit:8,            //当前选则的每页显示条数
			el:'.pagecontent'  //分页数据插入位置
		};
		/*表格数据设置*/
		var gridOpts = {
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
	   		],
	   		el:'#table'
		};
		
		oPage.page.init(url,pageOpts,gridOpts);
		
		
	});

});