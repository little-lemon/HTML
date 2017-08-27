	
	var  _charts = function(){
		this.background = 'rgba(255,255,255,0)';
		this.applyChartPie;
		this.applyChartLine;
		this.chartRightBar;
	}
	_charts.prototype._init = function(){
		this._applyChartPie();
		this._applyChartLine();
		this._chartRightBar();
		this._reSize();
	}
	_charts.prototype._chartsDOM = function(id){
		return echarts.init(document.getElementById(id));
	}
	_charts.prototype._applyChartPie = function(){
		this.applyChartPie = this._chartsDOM("applyChartPie");
		option = {
		    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },

			    visualMap: {
			        show: false,
			        min: 80,
			        max: 600,
			        inRange: {
			            colorLightness: [0, 1]
			        }
			    },
			    series : [
			        {
			            name:'应用类型流量占比',
			            type:'pie',
			            radius : '85%',
			            center: ['50%', '50%'],
			            data:[
			                {value:190, name:'邮件'},
			                {value:110, name:'网页'},
			                {value:130, name:'即时通讯'},
			                {value:170, name:'股票'},
			                {value:210, name:'游戏'},
			                {value:274, name:'下载'},
			                {value:235, name:'自媒体'},
			                {value:300, name:'其他'},
			                {value:400, name:'视频'}
			            ].sort(function (a, b) { return a.value - b.value; }),
			            roseType: 'radius',
			            label: {
			                normal: {
			                    textStyle: {
			                        color: 'rgba(255, 255, 255, 0.9)'
			                    }
			                }
			            },
			            labelLine:{
			            	normal:{
			            		length:0.01,
			            		lineStyle:{
			            			color:'rgba(255,255,255,0.4)'
			            		}
			            	}
			            },
			            itemStyle: {
			                normal: {
			                    color: '#2F90D4'
			                }
			            },

			        }
			    ]
		};

		this.applyChartPie.setOption(option);

	}
	_charts.prototype._applyChartLine = function(){
		this.applyChartLine = this._chartsDOM("applyChartLine");
		option = {
		    grid: {
		    	top:'7%',
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    tooltip : {
			        trigger: 'axis'
			    },
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : false,
		            axisLine:{
		            	lineStyle:{
		            		color:'#116A88'
		            	}
		            },
		            axisLabel: {
                        textStyle: {
                            color: '#fff'
                        },
                    }, 
		            data : ['6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine:{
		            	lineStyle:{
		            		color:'#116A88'
		            	}
		            },
		            splitLine:{
                    	 lineStyle: {
						        color: '#13445B'
						    }
                    },
		            axisLabel: {
                        textStyle: {
                            color: '#fff'
                        },
                    }
		        }
		    ],
		    series : [
		        {
		            name:'发送',
		            type:'line',
		            stack: '应用类型流量占比',
		            lineStyle : {normal: {
		            	color:'#18C7F0'
		            }},
		            areaStyle: {normal: {
		            	color:'#1D758C'
		            }},
		           	symbolSize:0,
		            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name:'接收',
		            type:'line',
		            stack: '应用类型流量占比',
		            lineStyle : {normal: {
		            	color:'#C3550F'
		            }},
		            areaStyle: {normal: {
		            	color:'#633013'
		            }},
		            symbolSize:0,
		            data:[220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310]
		        }
		    ]
		};
		this.applyChartLine.setOption(option);
	}

	_charts.prototype._chartRightBar = function(){
		this.chartRightBar = this._chartsDOM("chartRightBar");
		var myData = ['爱奇艺','优酷视频','搜狐视频','QQ视频','迅雷影音','QQ影音','人人影视','人人美剧','bilibili','ACfun'];
		option = {
		    	backgroundColor:'rgba(0,0,0,0)',
		    	tooltip : {
			        trigger: 'item',
			        formatter: function(pram){
			        	return myData[pram.dataIndex]+"<br/>"+pram.seriesName+" : "+pram.value;
			        },
		            axisPointer: {
		                type: 'shadow',
		            }
			    },
		        grid: [{
		            show: false,
		            left: '7%',
		            top: 0,
		            bottom: 0,
		            containLabel: true,
		            width: '46%'
		        }, {
		            show: false,
		            left: '51.5%',
		            top: 20,
		            bottom: 0,
		            width: '0%'
		        }, {
		            show: false,
		            right: '7%',
		            top: 0,
		            bottom: 0,
		            containLabel: true,
		            width: '46%'
		        }, ],
		        xAxis: [{
		            splitNumber:2,
		            type: 'value',
		            inverse: true,
		            axisLine: {
		                show: false,
		            },
		            axisTick: {
		                show: false,
		            },
		            position: 'top',
		            axisLabel: {
		                show: false,
		            },
		            splitLine: {
		                show: false
		            }
		        }, {
		            gridIndex: 1,
		            show: false,
		        }, {
		            gridIndex: 2,
		            type: 'value',
		            axisLine: {
		                show: false,
		            },
		            axisTick: {
		                show: false,
		            },
		            position: 'top',
		            axisLabel: {
		                show: false,
		            },
		            splitLine: {
		                show: false
		            },
		        }, ],
		        yAxis: [{
		            type: 'category',
		            inverse: true,
		            position: 'right',
		            axisLine: {
		                show: true,
		                lineStyle:{
		                	color:{
		                		type: 'linear',
							    x: 0,
							    y: 0,
							    x2: 0,
							    y2: 1,
							    colorStops: [{
							        offset: 0, color: '#2E4564' // 0% 处的颜色
							    }, {
							        offset: 1, color: '#008FFB' // 100% 处的颜色
							    }],
							    globalCoord: false // 缺省为 false
		                	}
		                }
		            },
		            axisTick: {
		                show: false
		            },
		            axisLabel: {
		                show: false,
		            },
		            data: [],

		        }, {
		            gridIndex: 1,
		            type: 'category',
		            inverse: true,
		            position: 'left',
		            axisLine: {
		                show: false
		            },
		            axisTick: {
		                show: false
		            },
		            axisLabel: {
		                show: true,
		            },
		            data:myData.map(function(value) {
		                return {
		                    value: value,
		                    textStyle:{
		                        align: 'center',
		                        color:'#ffffff',
		                        fontSize: 12,

		                    }
		                }
		            }),
		        }, {
		            gridIndex: 2,
		            type: 'category',
		            inverse: true,
		            position: 'left',
		            axisLine: {
		                show: true,
		                lineStyle:{
		                	color:{
		                		type: 'linear',
							    x: 0,
							    y: 0,
							    x2: 0,
							    y2: 1,
							    colorStops: [{
							        offset: 0, color: '#2E4564' // 0% 处的颜色
							    }, {
							        offset: 1, color: '#008FFB' // 100% 处的颜色
							    }],
							    globalCoord: false // 缺省为 false
		                	}
		                }
		            },
		            axisTick: {
		                show: false
		            },
		            axisLabel: {
		                show: false,
		            },
		            data: [],
		        }, ],
		        series: [{
		            name: '发送流量',
		            type: 'bar',
		            barGap: 20,
		            barWidth: '80%',
		            label: {
		                normal: {
		                    show: false,
		                    color: 'red',
		                    position: 'insideLeft',
		                    textStyle: {
		                        color: '#ffffff',
		                    }

		                },
		                emphasis: {
		                    show: false,
		                },
		            },
		            barWidth:15,
		            itemStyle: {
		                normal: {
		                    color: {
		                		type: 'linear',
							    x: 0,
							    y: 0,
							    x2: 1,
							    y2: 0,
							    colorStops: [{
							        offset: 0, color: '#01CEFC' // 0% 处的颜色
							    }, {
							        offset: 1, color: '#397AD2' // 100% 处的颜色
							    }],
							    globalCoord: false // 缺省为 false
		                	},
		                    barBorderRadius: [2, 0, 0, 2],
		                },
		                emphasis: {
		                    show: false,
		                },
		            },
		            data: ['6666','5700','5600','4000','2500','2400','2100','1700','1500','1000']
		        }, {
		            name: '接收流量',
		            type: 'bar',
		            barGap: 20,
		            barWidth: '80%',
		            xAxisIndex: 2,
		            yAxisIndex: 2,
		            barWidth:15,
		            label: {
		                normal: {
		                    show: false,
		                    color: 'red',
		                    position: 'insideRight',
		                    textStyle: {
		                        color: '#ffffff',
		                    }

		                },
		            },
		            itemStyle: {
		                normal: {
		                    color: {
		                		type: 'linear',
							    x: 0,
							    y: 0,
							    x2: 1,
							    y2: 0,
							    colorStops: [{
							        offset: 0, color: '#02A6B0' // 0% 处的颜色
							    }, {
							        offset: 1, color: '#0F7E3E' // 100% 处的颜色
							    }],
							    globalCoord: false // 缺省为 false
		                	},
		                    barBorderRadius: [0, 2, 2, 0],

		                },
		                emphasis: {
		                    show: false,
		                },
		            },
		            data: ['6000','5700','5600','4000','2500','2400','2100','1700','1500','1000'],
		        }]
		    };

		this.chartRightBar.setOption(option);
	}
	_charts.prototype._reSize = function(){
		var that = this;
		$(window).resize(function(){
			that.applyChartPie.resize();
			that.applyChartLine.resize();
			that.chartRightBar.resize();
		})
	}


	new _charts()._init();

	

