define(['../common','module'], function(common,module) {
	require([
		'echarts',
		'jquery',		
		'jsapp/menuSlide',
		'jsapp/createTime',
		'jsapp/createPage'
	], function(echarts, $, oSlide, oCtime, oPage) {
						
		//左边图表
		var datachart = echarts.init(document.getElementById('datachart'));
		option = {
			title: {
				text: '单位时间折线图',
				x: 'center',
				textStyle: {
					color: '#ffffff',
					fontWeight: 'normal',
					fontSize: 15
				}
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985'
					}
				}
			},
			toolbox: {
				feature: {
					saveAsImage: {}
				}
			},
			grid: {
				left: '3%',
				right: '9%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				name: '时间',
				nameTextStyle: {
					color: 'white',
				},
				axisLabel: {
					textStyle: {
						color: '#ffffff',
					}
				},
				axisLine: {
					lineStyle: {
						color: '#135873'
					}
				},
				boundaryGap: false,
				data: []
			}],
			yAxis: [{
				type: 'value',
				name: '流量',
				max: 7000,
				nameTextStyle: {
					color: '#ffffff'
				},
				axisLine: {
					lineStyle: {
						color: '#135873'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#ffffff'
					},
					formatter: '{value} M'

				},
				splitLine: {
					lineStyle: {
						color: '#13445B'
					}
				},

			}],
			color: ['#0e7292'],
			series: [{
				name: '数据',
				type: 'line',
				stack: '总量',
				smooth: true,
				areaStyle: {
					normal: {}
				},
				symbolSize: 0,
				data: []
			}]
		};
		var resizechart; 
		var width = $('.chartarea').width();
		$("#datachart").css('width', width);

		//	设置图表数据（后期应通过ajax获取）
		option.xAxis[0].data = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
		option.series[0].data = [2510, 2700, 2500, 2600, 2650, 2200, 2100, 2500, 2400, 2300, 2350, 2450];

		datachart.setOption(option);
		datachart.resize();

		//	图表随窗口变换
		$(window).resize(function() {
			width = $('.chartarea').width();
			clearTimeout(resizechart);
			resizechart = setTimeout(function() {
				$("#datachart").css('width', width);
				datachart.resize();
			}, 50);
		});
	
		
		//	查询区域伸缩
		oSlide.Slide('#showsearch','.hidecont');
		
		
		//	生成表格数据
		var tableData = $('.tablearea > table'),
			strData = '';
		
		for(var i = 1; i <= 8; i++){
			strData += '<tr>';
			strData += '<td></td><td>'+i+'</td>';
			strData += '<td>爱奇艺</td><td>2017-02-06 20:18:18</td>';
			strData += '<td>linqs</td><td>200.200.176.64</td><td>200.200.176.64</td>';
			strData += '<td>10.10.200.64</td><td>3874.5M</td>';
			strData += '<td>3874.5M</td><td>80</td><td>80</td>'
			strData += '<td>TCP</td><td>http://echarts.baidu.com/demo.html</td><td></td>';			
			strData += '</tr>';
		}
		tableData.append(strData);
		
		
		
		
		
		//	生成时间
		oCtime.createTime('#starttime',{
			isinitVal:true,
            //festival:true,
            ishmsVal:false,
            minDate: '2016-06-16 23:59:59',           
            format:"YYYY-MM-DD hh:mm:ss",
		});
		
		//	创建分页
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