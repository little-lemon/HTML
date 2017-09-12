// 事件分布柱状图：
var _eventDistribution = function(){
	var eventdistribution = echarts.init(document.getElementById('eventDistribution'));
	var option = {
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	    	show:false,
	        type: 'value',
	        boundaryGap: [0, 0.01]
	    },
	    yAxis: {
	        type: 'category',
	        axisTick:{
	            show:false
	        },
	        data: ['异常登录','webshell后门木马','SQL注入','TELNET服务器的暴力破解','FTP服务器的暴力破解','数据库的暴力破解']
	    },
	    series: [
	        {
	            name: '2017年',
	            type: 'bar',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight',
	                }
	            },
	            itemStyle:{
	            	normal:{color:'#ff4444'}
	            },
	            barWidth:15,
	            data: [82, 126, 353, 762, 1000, 1736]
	        }
	    ]
	};
	eventdistribution.setOption(option);
}
_eventDistribution();