$(function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById('piechart'));

    // 指定图表的配置项和数据
   	var option1 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
/* 	legend: {
 		orient:'vertical',
        x : 'left',
        data:['邮件','网页','即时通讯','股票','游戏','下载','多媒体','其他','视频']
    },*/
			    calculable : false,
    series : [{
	 	name:'应用类型流量占比',
        type:'pie',
        itemStyle : {
        	normal : {
    		 	color: function(params) {
                    // build a color map as your need.
                    var colorList = [
                       '#023524','#04583e','#098166','#0a846d','#138f77',
                       '#1673b0','#075ed1','#2f90d4','#5bccd4'
                    ];
                    return colorList[params.dataIndex]
               },
                label : {show : true,textStyle:{
                	color:'#ffffff'
                }},
                labelLine : {show : true, length:10,lineStyle:{
                	color:'#ffffff'
                }}
            }
    	},
       	roseType : 'radius',
        radius : [0,120],
        data:[
            {
            	value:150,
            	name:'邮件'
        	},
            {
            	value: 200,  
            	name:'网页'
        	},
            {
            	value: 250,  
            	name:'即时通讯'
        	 	
        	},
            {
            	value: 300,  
            	name:'股票'
        	},
            {
            	value: 350, 
            	name:'游戏'
        	},
            {
            	value: 400,  
            	name:'下载'
        	},
            {
            	value: 450,  
            	name:'多媒体'
        	},
            {
            	value: 500,  
            	name:'其他'
        	},
            {
            	value: 550, 
            	name:'视频'
        	}
    	],
    	/*markPoint:[
            symbol:'emptyCircle',
            symbolSize:series.radius,
            effect:{show:true,scaleSize:12,color:'rgba(250,225,50,0.8)',shadowBlur:10,period:30},
            data:[{x:'50%',y:'50%'}]
    	]*/
    }]
   
	};
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
    
    //应用类型流量占比折线图
    var myChart2 = echarts.init(document.getElementById('linechart'));
    //数据初始化
	var option2 = {
	    /*tooltip: {
	    	show:true,
	        trigger: 'axis'
	    },
	    legend: {
	        data:['发送','接收']
	    },*/
	    grid: {
	        left: '3%',
	        right: '10%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: true,
	        data: ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00'],
	        axisLabel : {
                margin:5,
                textStyle:{
                	color:'#ffffff'
                }
            },
	        axisLine:{
            	show:true,
            	lineStyle:{
	            	color:'#146f8a',
	            	type:'solid',
	            	width:1.5
	            },
           	},  
            axisTick:{
            	show:false,
            },
	        name:'时间',
	        nameTextStyle: {color:'#ffffff'}
	    },
	    yAxis: {
	        type: 'value',
	        boundaryGap: false,
	        min: 0,
			max: 7000,
			interval:1000,
            axisLabel : {
                formatter: '{value}M',
                margin:5,
                textStyle:{
                	color:'#ffffff'
                }
            },
            axisLine:{
            	show:true,
            	lineStyle:{
	            	color:'#146f8a',
	            	type:'solid',
	            	width:1.5
	            },
            },  
            splitLine:{
            	show:true,
            	lineStyle:{
            		color:'#13455c'
            	}
            },
            axisTick:{
            	show:false,
            },
//	        data: [1000,2000,3000,4000,5000,6000,7000],
	        name:'流量',
	        nameTextStyle: {color:'#ffffff'}
	    },
	    series: [
	        {
	            name:'发送',
	            type:'line',
	            lineStyle:{normal:{
	            	color:'#ee6109'
	            }},
	            itemStyle:{normal:{
	            	opacity: 0
	            }},
//	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:['300','1200','1800','2200','3500','1500','1600','1800','1200','1000','800']
	        },
	        {
	            name:'接收',
	            type:'line',
	            lineStyle:{normal:{
	            	color:'#13ccfa'
	            }},
	            itemStyle:{normal:{
	            	opacity: 0
	            }},
//	            stack: '总量',
	            areaStyle: {normal: {}},   
	            data:['200','1000','1500','2000','3000','2000','1800','1500','1000','900','500']
	        }
	    ]
	};
	
	// 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2);



});
