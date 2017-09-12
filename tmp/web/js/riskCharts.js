// 风险分析仪表图
var _riskGuage = function(){
	var riskguage = echarts.init(document.getElementById('riskGuage'));
	var option = {
      	backgroundColor:'#fff',
	    tooltip: {
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    series: [{
            name: '速度',
            type: 'gauge',
            center: ['50%', '75%'],  
            z: 3,
            min: 0,
            max: 180,
            splitNumber:6,
            startAngle: 180,
	        endAngle: 0,
            radius: '100%',
            silent:true,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10,
                    color: [
	                    [0.33, '#3ACE5D'],
	                    [0.67, '#FEBD00'],
	                    [1, '#EB2E31']
	                ]
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 0,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
                
            },
            axisLabel: {
                padding: 13,
                fontSize:20,
                formatter:function(v){
                    switch (v + ''){
                        case '30': return '低';
                        case '90': return '中';
                        case '150': return '高';
                        default: return '';
                    }
                }
            },
            detail : {
            	show:false
            },
            data:[{value: 40}]
        }]
	};
	riskguage.setOption(option);
}
_riskGuage();