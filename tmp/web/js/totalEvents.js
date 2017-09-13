// 事件分布柱状图：
var _totalEvents = function(){
	var totalevents = echarts.init(document.getElementById('totalEvents'));
	var option = {
	    color: ['#3398DB'],
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月','12月'],
	            axisTick: {
	                alignWithLabel: true
	            }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            name:'单位：万次', 
	            axisLine:{
		            lineStyle:{
		                color:'#695dbc',  //y轴颜色
		            }
		        },
	            axisLabel:{
	            	textStyle:{     //名称的样式
	                    color:'#5693f3',
	                    fontSize:'12px'
	                },
	            }
	        }
	    ],
	    series : [
	        {
	            name:'直接访问',
	            type:'bar',
	            barWidth: '60%',
	            itemStyle:{
	            	normal:{color:'#5693f3'}
	            },
	            data:[2, 4, 6, 10, 12, 30, 50,65,10,8,4,2]
	        },
	        {
	            name:'直接访问',
	            type:'line',
                lineStyle:{  //线条的样式
                    normal:{
                        color:'#695dbc',  //折线颜色
                    }
                },
	            data:[8, 10, 15, 18, 25, 40, 80,90,88,65,50,25]
	        }
	    ]
	};
	totalevents.setOption(option);
}
_totalEvents();