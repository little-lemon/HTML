/**
 * 生成日历插件
 */
define(['../common','exports','jquery','jedate'],function (common,exports,$,jedate) {
	
	/**
	 * @description 生成时间插件
	 * @param {element} ele 要生成的元素
	 * @param {object} timeinfo	时间相关信息
	 */
	exports.createTime = function(ele,timeinfo){
		
		 $(ele).jeDate({
			isinitVal:timeinfo.isinitVal,
			//festival:true,
			ishmsVal:timeinfo.ishmsVal,
			minDate: timeinfo.minDate,
			maxDate: $.nowDate({DD:0}),
			format:timeinfo.format,
			zIndex:3000,
		});
	}
	
});