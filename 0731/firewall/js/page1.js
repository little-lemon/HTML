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
        right: '4%',
        bottom: '3%',
        containLabel: true,
        show:true,          
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            name:'时间',
            nameTextStyle:{
        		color:'white',
        	},
        	axisLabel:{
        		textStyle:{
        			color:'#ffffff'
        		}
        	},
        	axisLine:{
        		lineStyle:{
        			color:'#135873'
        		}
        	},
            data : ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00']
        }
    ],
    yAxis : [
        {
            type : 'category',
            name : '流量',            
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
        		}
        	},
        	data : ['0M','500M','1000M','2000M','3000M','4000M','5000M','6000M','7000M',]
        }
    ],
    color:['#0e7292'],
    series : [      
        
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            smooth: true,
            data:[1000, 2000, 1200, 2200, 3300, 5000, 2500, 6100, 4400, 3000, 3200, 5000]
        },
               
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