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
		
/* 		//	生成表格数据
		var tableData = $('.tablearea > table'),
			strData = '';
		
		for(var i = 1; i <= 12; i++){
			strData += '<tr class="trhover">';
			strData += '<td></td><td>'+i+'</td>';
			strData += '<td>爱奇艺</td><td>2017-02-06 20:18:18</td>';
			strData += '<td>linqs</td><td>200.200.176.64</td><td>200.200.176.64</td>';
			strData += '<td>10.10.200.64</td><td>3874.5M</td>';
			strData += '<td>3874.5M</td><td>80</td><td>80</td>'
			strData += '<td>TCP</td><td>http://echarts.baidu.com/demo.html</td><td></td>';			
			strData += '</tr>';
		}
		tableData.append(strData); */
		
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
	   			{display:"序号"},
	   			{display:"应用名称"},
	   			{display:"发生时间"},
	   			{display:"用户"},
	   			{display:"用户IP"},
	   			{display:"源IP"},
	   			{display:"目标IP"},
	   			{display:"发送流量"},
	   			{display:"接收流量"},
	   			{display:"源端口"},
	   			{display:"目的端口"},
	   			{display:"协议"},
	   			{display:"URL"}
	   		]
	    }
		
		var grid = oGrid.createGrid(OGridinfo);
	    $('#table').html(grid);
		
		
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
		oPage.pageInit('.pd2');
	});

});