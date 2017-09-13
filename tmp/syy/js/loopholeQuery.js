define(['../common'], function(common) {

	require([
		'jquery',
		'jsapp/createPage'
	], function($,oPage) {

		//选项卡切换事件
		var tabinfo = $('#tabinfo'),
			infocont = $('.infocontent'),
			tabport = $('#tabport'),
			portcont = $('.portcontent');
		//	默认漏洞信息选中
		tabinfo.css('background-color', '#181c28'); 
		tabinfo.click(function() {
			tabinfo.css('background-color', '#181c28');
			tabport.css('background-color', '#252834');
			infocont.css('display', 'block');
			portcont.css('display', 'none');
		});
		tabport.click(function() {
			tabinfo.css('background-color', '#252834');
			tabport.css('background-color', '#181c28');
			infocont.css('display', 'none');
			portcont.css('display', 'block');
		});

		//点击伸缩表格,漏洞信息详情
		var leftcon = $('.leftcont'), 
			rgtcon = $('.rgtcont'),
			btnex = $('#expand');
		var detailbtn = $('.detail'); 
		//查看详情
		detailbtn.click(function() {
			btnex.css('display', 'block');
			leftcon.animate({
				'width': '77.5%'
			}, 200);
			// 右侧出现
			rgtcon.css('display', 'inline-block'); 		
			btnex.css({
				'background-position': 'top',
				'display': 'block'
			});
			btnex.removeClass('current');
			
			//	威胁等级的取值变化(暂时随机,后期应用 ajax 获取)
			var highvalue = $('#highvalue'),
				middlevalue = $('#middlevalue'),
				lowvalue = $('#lowvalue');
			var highval = Math.floor(Math.random() * 100),
				middval = Math.floor(Math.random() * 100),
				lowval = Math.floor(Math.random() * 100);

			//	改变柱状图
			highvalue.animate({
				'width': highval + '%'
			}, 500);
			middlevalue.animate({
				'width': middval + '%'
			}, 500);
			lowvalue.animate({
				'width': lowval + '%'
			}, 500);
			$('.dangervalue').eq(0).text(highval);
			$('.dangervalue').eq(1).text(middval);
			$('.dangervalue').eq(2).text(lowval);

		});
		//	伸缩按钮
		btnex.click(function() {
			if($(this).hasClass('current')) {
				leftcon.animate({
					'width': '78%'
				}, 200);
				rgtcon.css('display', 'inline-block');
				btnex.css('background-position', 'top');
				$(this).removeClass('current');
			} else {
				$('.container').css('padding-right', 0);
				leftcon.animate({
					'width': '97.5%'
				}, 200);
				rgtcon.css('display', 'none');
				btnex.css('background-position', 'bottom');
				$(this).addClass('current');
			}
		});
		
		//	分页相关信息
		var oPageinfo = {	//	分页的信息
			rowcount :  20,	//	一共有的条数			
			pagerow : [8,10,20],	//	每页显示条数
			pagecount : 8,	//	总共有的页数
			currpage : 3	//	当前页数
		},
		
		pagelist = '';	//	分页代码
		pagelist = oPage.createPage(oPageinfo);	//创建分页
		$('.pagecontent').html(pagelist);	//	生成分页内容
		oPage.pageInit('.pd1');	//	初始化分页下拉菜单
		oPage.pageInit('.pd2');

		
		
	});

});