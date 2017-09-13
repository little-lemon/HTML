define(['../common'], function(common) {

	require([
		'echarts',
		'china',
		'jquery'
	],function(echarts, china, $){

		var _charts = function() {
			this.background = 'rgba(255,255,255,0)';
		}
		_charts.prototype._init = function() {
			this._mapSituationWorld();
			this._outbreak();
			this._reSize();
			this._showLine(0);
			this._clickProvinces();
			this._mapRightType();
			this._mapRightPie();
		}
		_charts.prototype._chartsDOM = function(id) {
			return echarts.init(document.getElementById(id));
		}
		_charts.prototype._mapSituationWorld = function() {
			this._mapSituationWorld = this._chartsDOM("mapSituationWorld");

			function randomData() {
				return Math.round(Math.random() * 2000);
			}
			option = {
				tooltip: {
					trigger: 'item'
				},
				visualMap: {
					min: 0,
					max: 2500,
					left: 'left',
					top: 'bottom',
					show: false,
					color: ['#E00003', '#00549D', '#00BAE0'],
					text: ['高', '低'],
					calculable: true
				},

				series: [{
					name: '漏洞',
					type: 'map',
					mapType: 'china',
					roam: false,
					label: {
						normal: {
							show: false
						},
						emphasis: {
							textStyle: {
								color: '#fff'
							},
							show: true
						}
					},
					data: [{
							name: "南海诸岛",
							value: randomData(),
							itemStyle: {
								normal: {
									label: {
										show: false
									}
								}
							}
						},
						{
							name: '北京',
							value: randomData()
						},
						{
							name: '天津',
							value: randomData()
						},
						{
							name: '上海',
							value: randomData()
						},
						{
							name: '重庆',
							value: randomData()
						},
						{
							name: '河北',
							value: randomData()
						},
						{
							name: '河南',
							value: randomData()
						},
						{
							name: '云南',
							value: randomData()
						},
						{
							name: '辽宁',
							value: randomData()
						},
						{
							name: '黑龙江',
							value: randomData()
						},
						{
							name: '湖南',
							value: randomData()
						},
						{
							name: '安徽',
							value: randomData()
						},
						{
							name: '山东',
							value: randomData()
						},
						{
							name: '新疆',
							value: randomData()
						},
						{
							name: '江苏',
							value: randomData()
						},
						{
							name: '浙江',
							value: randomData()
						},
						{
							name: '江西',
							value: randomData()
						},
						{
							name: '湖北',
							value: randomData()
						},
						{
							name: '广西',
							value: randomData()
						},
						{
							name: '甘肃',
							value: randomData()
						},
						{
							name: '山西',
							value: randomData()
						},
						{
							name: '内蒙古',
							value: randomData()
						},
						{
							name: '陕西',
							value: randomData()
						},
						{
							name: '吉林',
							value: randomData()
						},
						{
							name: '福建',
							value: randomData()
						},
						{
							name: '贵州',
							value: randomData()
						},
						{
							name: '广东',
							value: randomData()
						},
						{
							name: '青海',
							value: randomData()
						},
						{
							name: '西藏',
							value: randomData()
						},
						{
							name: '四川',
							value: randomData()
						},
						{
							name: '宁夏',
							value: randomData()
						},
						{
							name: '海南',
							value: randomData()
						},
						{
							name: '台湾',
							value: randomData()
						},
						{
							name: '香港',
							value: randomData()
						},
						{
							name: '澳门',
							value: randomData()
						}
					]
				}]
			};

			this._mapSituationWorld.setOption(option);
		}
		_charts.prototype._outbreak = function() {
			this._outbreak = this._chartsDOM("outbreak");
			option = {
				backgroundColor: {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0,
						color: '#171B27' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#0D0E22' // 100% 处的颜色
					}],
					globalCoord: false // 缺省为 false
				},
				tooltip: {
					// formatter: "{a}  : {c}%"
				},

				series: [{
					name: '漏洞疫情',
					type: 'gauge',
					radius: '90%',
					axisLine: { // 坐标轴线
						lineStyle: { // 属性lineStyle控制线条样式
							color: [
								[0.2, new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
									"offset": 0,
									"color": '#09AFA6'
								}, {
									"offset": 1,
									"color": '#31973F'
								}])],
								[0.5, new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
									"offset": 0,
									"color": '#839E97'
								}, {
									"offset": 1,
									"color": '#09AFA6'
								}])],
								[0.8, new echarts.graphic.LinearGradient(1, 0, 1, 1, [{
									"offset": 0,
									"color": '#839E97'
								}, {
									"offset": 1,
									"color": '#E55820'
								}])],
								[1, new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
									"offset": 0,
									"color": '#E55820'
								}, {
									"offset": 1,
									"color": '#881B18'
								}])]
							],
							width: 10
						}
					},
					axisLabel: { // 坐标轴小标记
						show: false
					},
					axisTick: { // 坐标轴小标记
						show: false
					},
					splitLine: { // 分隔线
						show: false
					},
					title: {
						show: false
					},
					detail: {
						textStyle: {
							color: 'rgba(255,255,255,0)'
						}
					},
					data: [{
						value: 65
					}]
				}]
			};
			this._outbreak.setOption(option);
		}
		_charts.prototype._loopholeMapLines = function(sf) {
			function randomData() {
				var dataArr = [];
				for(var i = 0; i < 11; i++) {
					dataArr.push(Math.round(Math.random() * 1000))
				}
				return dataArr
			}

			this._loopholeMapLine = this._chartsDOM("loopholeMapLine");
			option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				title: {
					text: '各地区漏洞统计',
					textStyle: {
						color: '#fff',
						fontSize: '13',
						fontWeight: 'normal'
					},
					left: '45%',
					top: '3%'
				},
				legend: {
					data: ['高威胁', '中威胁', '低威胁'],
					right: '10%',
					top: '5%',
					itemWidth: 15,
					textStyle: {
						color: '#fff'
					}
				},
				grid: {
					left: '3%',
					right: '6%',
					bottom: '3%',
					top: '23%',
					containLabel: true
				},
				xAxis: [{
					name: '城市',
					nameLocation: 'end',
					nameTextStyle: {
						color: '#fff'
					},
					type: 'category',
					axisLine: {
						lineStyle: {
							color: '#116A88'
						}
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						textStyle: {
							color: '#fff'
						},
					},
					data: sf
				}],
				yAxis: [{
					name: '数量',
					nameTextStyle: {
						color: '#fff'
					},
					type: 'value',
					axisLine: {
						lineStyle: {
							color: '#116A88'
						}
					},
					splitLine: {
						lineStyle: {
							color: '#13445B'
						}
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						textStyle: {
							color: '#fff'
						},
					}
				}],
				series: [{
						name: '高威胁',
						type: 'bar',
						barWidth: '15',
						itemStyle: {
							normal: {
								barBorderRadius: [2, 2, 0, 0],
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0,
										color: '#AF0E22' // 0% 处的颜色
									}, {
										offset: 1,
										color: '#520D20' // 100% 处的颜色
									}],
									globalCoord: false // 缺省为 false
								}
							}
						},
						barGap: 0,
						data: randomData()
					},
					{
						name: '中威胁',
						type: 'bar',
						barWidth: '15',
						itemStyle: {
							normal: {
								barBorderRadius: [2, 2, 0, 0],
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0,
										color: '#0E63BB' // 0% 处的颜色
									}, {
										offset: 1,
										color: '#0C0E3D' // 100% 处的颜色
									}],
									globalCoord: false // 缺省为 false
								}
							}
						},
						data: randomData()
					},
					{
						name: '低威胁',
						type: 'bar',
						barWidth: '15',
						itemStyle: {
							normal: {
								barBorderRadius: [2, 2, 0, 0],
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0,
										color: '#329B3B' // 0% 处的颜色
									}, {
										offset: 1,
										color: '#0D2921' // 100% 处的颜色
									}],
									globalCoord: false // 缺省为 false
								}
							}
						},
						data: randomData()
					}
				]
			};
			this._loopholeMapLine.setOption(option);
		}
		_charts.prototype._showLine = function(number) {
			var data = ['安徽', '北京', '重庆', '福建', '甘肃', '广东', '广西', '贵州', '海南', '河北', '黑龙江', '河南', '香港', '湖北', '湖南', '江苏', '江西', '吉林', '辽宁', '澳门', '内蒙古', '宁夏', '青海', '山东', '上海', '山西', '陕西', '四川', '台湾', '天津', '新疆', '西藏', '云南', '浙江'];
			var num = parseInt(number);
			var end = 11 * (num + 1) > data.length ? data.length : 11 * (num + 1);
			var sf = data.slice(11 * num, end);
			this._loopholeMapLines(sf);
		}
		_charts.prototype._clickProvinces = function() {
			var that = this,
				num = 0;
			$(".clileft,.cliright").click(function() {
				if($(this).hasClass('clileft')) {
					num = num - 1 < 0 ? 0 : num - 1;
				} else {
					num = num + 1 >= 3 ? 3 : num + 1;
				}
				that._showLine(num);
			})
		}

		_charts.prototype._mapRightType = function() {
			function randomData() {
				return Math.round(Math.random() * 4000);
			}
			this._mapRightType = this._chartsDOM("mapRightType");
			option = {
				title: {
					text: '高危漏洞主机数TOP10',
					textStyle: {
						color: '#fff',
						fontSize: '13',
						fontWeight: 'normal'
					},
					left: '35%',
					top: '3%'
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},

				grid: {
					left: '10%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'value',
					show: false
				},
				yAxis: {
					type: 'category',
					axisLine: {
						show: true,
						lineStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: '#2E4564' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#008FFB' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}
						}
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						textStyle: {
							color: '#fff',
							fontSize: 12,
							fontWeight: 'normal'
						},
					},
					data: ['安徽', '北京', '重庆', '福建', '甘肃', '广东', '广西', '贵州', '海南', '河北']
				},
				series: [{
					name: '高危漏洞主机数',
					type: 'bar',
					barWidth: '10',
					itemStyle: {
						normal: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#01CEFC' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#397AD2' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							},
							barBorderRadius: [0, 2, 2, 0],
						},
						emphasis: {
							show: false,
						},
					},
					data: [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()]
				}]
			};
			this._mapRightType.setOption(option);
		}
		_charts.prototype._mapRightPie = function() {
			var data = [{
					value: 335,
					name: 'pptp'
				},
				{
					value: 310,
					name: 'ftp'
				},
				{
					value: 234,
					name: 'pop3'
				},
				{
					value: 135,
					name: 'ssh'
				},
				{
					value: 1548,
					name: 'telnet'
				},
				{
					value: 1948,
					name: 'dns'
				},
				{
					value: 2148,
					name: 'dhcp'
				},
				{
					value: 2248,
					name: 'ntp'
				},
				{
					value: 2348,
					name: 'smtp'
				},
				{
					value: 2548,
					name: 'http'
				}
			];

			function randomData() {
				return Math.round(Math.random() * 4000);
			}
			this._mapRightPie = this._chartsDOM("mapRightPie");
			this._mapRightPie = this._chartsDOM("mapRightPie");
			this._mapRightPie = this._chartsDOM("mapRightPie");
			option = {
				title: {
					text: '服务类型TOP10',
					textStyle: {
						color: '#fff',
						fontSize: '13',
						fontWeight: 'normal'
					},
					left: '37%',
					top: '3%'
				},
				color: ['#0F0F4D', '#003466', '#0067AC', '#1258A3', '#075ED1', '#2191DD', '#55A1EF', '#2CA9E3', '#138F77', '#32CCFE'],
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},

				series: [{
					name: '服务类型',
					type: 'pie',
					center: ['50%', '55%'],
					radius: ['45%', '60%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							textStyle: {
								color: '#fff'
							}
						},
						emphasis: {

						}
					},
					labelLine: {
						normal: {
							show: false,
							length: 10
						}
					},
					data: data
				}]
			};

			this._mapRightPie.setOption(option);
		}

		_charts.prototype._reSize = function() {
			var that = this;
			$(window).resize(function() {
				that._mapSituationWorld.resize();
				that._outbreak.resize();
				that._loopholeMapLine.resize();
				that._mapRightType.resize();
				that._mapRightPie.resize();
			})
		}
		new _charts()._init();

		var tableSlide = function() {
			var tbody = $(".outbreakSituation li.nomargin table tbody"),
				trList = tbody.children('tr'),
				trHeight = trList.height();
			tbody.animate({
				'top': -trHeight
			}, 500, function() {
				tbody.append(trList.eq(0)).css('top', 0);
			});

		}
		tableSlide();
		setInterval(tableSlide, 2000);

	})

});