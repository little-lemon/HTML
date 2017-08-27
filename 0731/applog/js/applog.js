$(function(){
	// 路径配置
 	require.config({
        paths: {
            echarts: './js'
        }
    });
  	// 使用
    require(
        [
            'echarts',
            'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('main')); 
            var option = {
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
		     	legend: {
		     		orient:'vertical',
			        x : 'left',
			        data:['邮件','网页','即时通讯','股票','游戏','下载','多媒体','其他','视频']
			    },
						    calculable : false,
			    series : [
				    {
			    	 	name:'应用类型流量占比',
		                type:'pie',
		                itemStyle : {
		                	normal : {
			                    label : {show : true,textStyle:{
			                    	color:'#ffffff'
			                    }},
			                    labelLine : {show : true, length:20,lineStyle:{
			                    	color:'#ffffff'
			                    }}
			                }
			               /*emphasis : {
			                    label : {
			                        show : true
			                    },
			                    labelLine : {
			                        show : true
			                    }
			                }*/
	                	},
	                   	roseType : 'radius',
		                radius : [0,100],
		                data:[
		                    {
		                    	value:100,
		                    	name:'邮件',
	                    	 	itemStyle:{normal:{color:'#0a0b0f'}}
	                    	},
		                    {
		                    	value: 200,  
		                    	name:'网页',
	                    	 	itemStyle:{normal:{color:'blue'}}
	                    	},
		                    {
		                    	value: 300,  
		                    	name:'即时通讯',
	                    	 	itemStyle:{normal:{
		                    	 		color:'green',
		                    	 		shadowBlur:'90',
		                                shadowColor:'rgba(0,0,0,0.8)',
		                                shadowOffsetY:'30'
	                    	 		}}
	                    	 	
	                    	},
		                    {
		                    	value: 400,  
		                    	name:'股票',
	                    	 	itemStyle:{normal:{color:'blue'}}
	                    	},
		                    {
		                    	value: 500, 
		                    	name:'游戏',
	                    	 	itemStyle:{normal:{color:'blue'}}
	                    	},
		                    {
		                    	value: 600,  
		                    	name:'下载',
	                    	 	itemStyle:{normal:{color:'blue'}}
	                    	},
		                    {
		                    	value: 700,  
		                    	name:'多媒体',
	                    	 	itemStyle:{normal:{
		                    	 		color:'green',
		                    	 		shadowBlur:'90',
		                                shadowColor:'rgba(0,0,0,0.8)',
		                                shadowOffsetY:'30'
	                    	 		}}
	                    	},
		                    {
		                    	value: 800,  
		                    	name:'其他',
	                    	 	itemStyle:{normal:{color:'blue'}}
	                    	},
		                    {
		                    	value: 900, 
		                    	name:'视频',
	                    	 	itemStyle:{normal:{
		                    	 		color:{
		                    	 			/*type: 'linear',
										    x: 0,
										    y: 0,
										    x2: 0,
										    y2: 1,
										    colorStops: [{
										        offset: 0, color: 'red' // 0% 处的颜色
										    }, {
										        offset: 1, color: 'blue' // 100% 处的颜色
										    }],
										    globalCoord: false // 缺省为 false*/
										   	type: 'radial',
										    x: 0.5,
										    y: 0.5,
										    r: 100,
										    colorStops: [{
										        offset: 0, color: 'pink' // 0% 处的颜色
										    }, {
										        offset: 1, color: 'blue' // 100% 处的颜色
										    }],
										    globalCoord: false // 缺省为 false
		                    	 		},
		                    	 		/*borderColor:'black',
		                    	 		shadowBlur:'10',
		                                shadowColor:'red',
		                                shadowOffsetY:'20',
		                                shadowOffsetX:'20'*/
	                    	 		}}
	                    	}
	                	],
	                	/*markPoint:[
				            symbol:'emptyCircle',
				            symbolSize:series.radius,
				            effect:{show:true,scaleSize:12,color:'rgba(250,225,50,0.8)',shadowBlur:10,period:30},
				            data:[{x:'50%',y:'50%'}]
			        	]*/
				    }
			    ]
			   
			};
/*			setTimeout(function (){
			    var _ZR = myChart.getZrender();
			    var TextShape = require('zrender/shape/Text');
			    // 补充千层饼
			    _ZR.addShape(new TextShape({
			        style : {
			            x : _ZR.getWidth() / 2,
			            y : _ZR.getHeight() / 2,
			            color: '#666',
			            text : '恶梦的过去',
			            textAlign : 'center'
			        }
			    }));
			    _ZR.addShape(new TextShape({
			        style : {
			            x : _ZR.getWidth() / 2 + 200,
			            y : _ZR.getHeight() / 2,
			            brushType:'fill',
			            color: 'orange',
			            text : '美好的未来',
			            textAlign : 'left',
			            textFont:'normal 20px 微软雅黑'
			        }
			    }));
			    _ZR.refresh();
			}, 1000);*/
    
            // 为echarts对象加载数据 
            myChart.setOption(option); 
        }
    );
});
