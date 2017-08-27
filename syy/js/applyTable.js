$('#showsearch').click(function(){
	$('.twoline').slideToggle(300);
	$('.threeline').slideToggle(300);
	if(!$(this).hasClass('current')){
		$('#showsearch > img').attr('src','images/expand-up.png');	
		$(this).addClass('current');
	}else{
		$('#showsearch > img').attr('src','images/expand.png');
		$(this).removeClass('current');
	}
});

// 分页下拉菜单位置变化

// 分页按钮下拉
$('.pd1').click(function(){
	var slength = -$('#colcount').height()-32;	
	$('#colcount').css('margin-top',slength);
	$('#colcount').slideToggle(100);
});
// 下拉按钮点击完
$('.pagedownlist > li').click(function(){
	$('#colcount').slideUp(100);
});
$('.pd2').click(function(){	
	var slength = -$('#pagecount').height()-32;	
	$('#pagecount').css('margin-top',slength);
	$('#pagecount').slideToggle(100);
});
// 下拉按钮点击完
$('.pagedownlist > li').click(function(){
	$('#pagecount').slideUp(100);
});



//左边图表
var datachart = echarts.init(document.getElementById('datachart'));
option = {
    title: {
        text: '单位时间折线图',
        x:'center',
        textStyle:{
        	color:'#ffffff',
        	fontWeight:'normal',
        	fontSize:15
        }
    },
    tooltip : {
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
    xAxis : [
        {
            type : 'category',
            name : '时间',
            nameTextStyle:{
        		color:'white',
        	},
        	axisLabel:{
        		textStyle:{
        			color:'#ffffff',        			
        		}
        	},
        	axisLine:{
        		lineStyle:{
        			color:'#135873'
        		}
        	},
            boundaryGap : false,
            data : ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00']
        }
    ],
    yAxis : [
        {
            type : 'value',
            name : '流量', 
            max : 7000,
            nameTextStyle:{
        		color:'#ffffff'
        	},
        	axisLine:{
        		lineStyle:{
        			color:'#135873'
        		}
        	},        
            axisLabel:{
        		textStyle:{
        			color:'#ffffff'
        		},        	
                formatter: '{value} M'
            
        	},
        	splitLine:{
            	 lineStyle: {
				        color: '#13445B'
				    }
            },

            
        }
    ],
    color : ['#0e7292'],
    series : [
        {
            name:'数据',
            type:'line',
            stack: '总量',            
            smooth: true,
            areaStyle: {normal: {}},
            symbolSize:0,
            data:[2510, 2700, 2500, 2600, 2650, 2200, 2100,2500, 2400, 2300, 2350, 2450]
        }
    ]
};
var resizechart;	// 图表变化
var width = $('.chartarea').width();
$("#datachart").css('width',width);
	
	
datachart.setOption(option);
datachart.resize();

$(window).resize(function(){	
	width = $('.chartarea').width();
	clearTimeout(resizechart);
	resizechart = setTimeout(function(){
		$("#datachart").css('width',width);
		datachart.resize();		
	},100);
	
});	