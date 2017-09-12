$(function(){


	/**
	 *	1-2-1表格数据居中
	 */
	var _setItemsHeight = function(){
		var reportFour = $('.report_table .report_four'),ulHeight = 0;

		reportFour.each(function(index, el) {
			var items = $(el).find(' .report_items');
			var itemsHeight = 0;
			items.each(function(index, el) {
				if ($(el).outerHeight() > itemsHeight) {
					itemsHeight = $(el).outerHeight();
				}
				if (index +1 == items.length) {
					items.css('height', itemsHeight);
				}
			});	
			items.each(function(index, el) {
				ulHeight = $(el).children('ul').outerHeight();
				if (itemsHeight - ulHeight > 40 ) {
					$(el).children('ul').css('top',(itemsHeight-ulHeight-40)/2)
				}
			});
		});

	}
	_setItemsHeight();


	/**
	 * 1-2-1表格数据居中及高度设置
	 */
	var _setReportHeight = function(){
		//得到表格的父元素
		var report = $('.report_table'),
			height = 0,ulHeight =0,graphicHeight =0;

		report.each(function(index, el) {
			height = $(el).outerHeight();
			ulHeight = $(el).find('.report_three ul').outerHeight();
			graphicHeight = $(el).find('.report_graphic').outerHeight();
			$(el).find('.report_four,.report_two,.report_three').css('height',height);
			if (height - ulHeight > 40 ) {
				$(el).find('.report_three ul').css('top',(height-ulHeight-40)/2);
			}
			$(el).find('.report_graphic').css('top', (height-graphicHeight)/2);
		});

		
	}
	_setReportHeight();


	/**
	 * 攻击事件，攻击举证
	 * @return {[type]} [description]
	 */
	var _attackProof = function(){
		var dls = $('.proof .transitions'),
			sequenceColor = ['#6CB5B5','#FFD800','#E14949'];

		dls.each(function(index, el) {
			var dl = $(el).children('dl');
			var clolrBars = $(el).find('.colorBar');
			dl.css('width',100/(dl.length)+'%');

			$(el).find('.sequence').each(function(index, el) {
				if (dl.length % 2 != 0) {
					$(el).css('background',sequenceColor[index]);
					$(el).parents('.transitions').find('.pic').css('width', '17%');
				}else{
					$(el).css('background',sequenceColor[index*2]);
				}
			});

			clolrBars.each(function(index, el) {
				if (dl.length % 2 != 0) {
					$(el).addClass('three_'+index);
				}else{
					$(el).addClass('two');
				}
				if (index == clolrBars.length -1 ) {
					clolrBars.eq(index).css('width',0);
				}
			});
		});
		
	}
	_attackProof();


})