$(function(){
	
	var  fnCharts = function(){
		this.background = 'rgba(255,255,255,0)';
	}
	
	fnCharts.prototype._init = function(){
		this._mapSituationWorld();
	}
	
	fnCharts.prototype._chartsDOM = function(id){
		return echarts.init(document.getElementById(id));
	}
	
	fnCharts.prototype._mapSituationWorld = function(){
		this._mapSituationWorld = this._chartsDOM("mapSituationWorld");
		function randomData() {
		    return Math.round(Math.random()*2000);
		}
		// 指定图表的配置项和数据
	    var option = {
			tooltip: {
			    trigger: 'item'
			},
			visualMap: {
			    min: 0,
			    max: 2500,
			    left: 'left',
			    top: 'bottom',
			    text: ['高','低'],           // 文本，默认为数值文本
			    color:['#E00003','#00549D','#00BAE0'],
			    calculable: true
			},
			toolbox: {
			    show: true,
			    orient: 'vertical',
			    left: 'right',
			    top: 'center',
			    feature: {
			        dataView: {readOnly: false},
			        restore: {},
			        saveAsImage: {}
			    }
			},
			series: [
		    {
		        name: '漏洞',
		        type: 'map',
		        mapType: 'china',
		        roam: false,
		        label: {
		            normal: {
		                show: false
		            },
		            emphasis: {
		            	textStyle:{
		            		color:'#fff'
		            	},
		                show: true
		            }
		        },
		        data:[
		        	{
		        		name:'南海诸岛',value:randomData(),
		        		itemStyle:{
		        			normal:{
		        				label:{show:false}
		        			}
		        		}
		        	},
		            {name: '北京',value: randomData() },
		            {name: '天津',value: randomData() },
		            {name: '上海',value: randomData() },
		            {name: '重庆',value: randomData() },
		            {name: '河北',value: randomData() },
		            {name: '河南',value: randomData() },
		            {name: '云南',value: randomData() },
		            {name: '辽宁',value: randomData() },
		            {name: '黑龙江',value: randomData() },
		            {name: '湖南',value: randomData() },
		            {name: '安徽',value: randomData() },
		            {name: '山东',value: randomData() },
		            {name: '新疆',value: randomData() },
		            {name: '江苏',value: randomData() },
		            {name: '浙江',value: randomData() },
		            {name: '江西',value: randomData() },
		            {name: '湖北',value: randomData() },
		            {name: '广西',value: randomData() },
		            {name: '甘肃',value: randomData() },
		            {name: '山西',value: randomData() },
		            {name: '内蒙古',value: randomData() },
		            {name: '陕西',value: randomData() },
		            {name: '吉林',value: randomData() },
		            {name: '福建',value: randomData() },
		            {name: '贵州',value: randomData() },
		            {name: '广东',value: randomData() },
		            {name: '青海',value: randomData() },
		            {name: '西藏',value: randomData() },
		            {name: '四川',value: randomData() },
		            {name: '宁夏',value: randomData() },
		            {name: '海南',value: randomData() },
		            {name: '台湾',value: randomData() },
		            {name: '香港',value: randomData() },
		            {name: '澳门',value: randomData() }
		        ]
		    }]
		};
	    
	    // 使用刚指定的配置项和数据显示图表。
	    this._mapSituationWorld.setOption(option);
	    
	};
	
	new fnCharts()._init();
});
