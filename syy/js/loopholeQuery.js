//选项卡切换事件
var tabinfo = $('#tabinfo'),
	infocont = $('.infocontent'),
	tabport = $('#tabport'),
	portcont = $('.portcontent');
tabinfo.css('background-color','#181c28');	//	默认漏洞信息选中
tabinfo.click(function(){
	tabinfo.css('background-color','#181c28');
	tabport.css('background-color','#252834');
	infocont.css('display','block');
	portcont.css('display','none');
});
tabport.click(function(){
	tabinfo.css('background-color','#252834');
	tabport.css('background-color','#181c28');
	infocont.css('display','none');
	portcont.css('display','block');
});




//点击伸缩表格,漏洞信息详情
var leftcon = $('.leftcont'),	//左边内容
	rgtcon = $('.rgtcont'),		//右边内容
	btnex = $('#expand');		//扩展按钮	
var detailbtn = $('.detail');	//表格内详细按钮
//查看详情
detailbtn.click(function(){	
	btnex.css('display','block');
	leftcon.animate({'width':'78%'},200);
//	leftcon.css('width','78%');
	rgtcon.css('display','inline-block'); // 右侧出现
	$('#expand > img').attr('src','images/turn-right.png');
	btnex.removeClass('current');
	
	
	/* 假数据变化 */
	//威胁等级的取值变化
	var highvalue = $('#highvalue'),
		middlevalue = $('#middlevalue'),
		lowvalue = $('#lowvalue');
	var highval = Math.floor(Math.random()*100),
		middval = Math.floor(Math.random()*100) ,
		lowval = Math.floor(Math.random()*100) ;
	
	//	改变柱状图
	highvalue.animate({'width':highval + '%'},500);
	middlevalue.animate({'width':middval + '%'},500);
	lowvalue.animate({'width':lowval + '%'},500);
	$('.dangervalue').eq(0).text(highval);
	$('.dangervalue').eq(1).text(middval);
	$('.dangervalue').eq(2).text(lowval);
	

	
});
//伸缩按钮
btnex.click(function(){
	if($(this).hasClass('current')){		
		leftcon.animate({'width':'78%'},200);
		rgtcon.css('display','inline-block');
		$('#expand > img').attr('src','images/turn-right.png');
		$(this).removeClass('current');
	}else{
		leftcon.animate({'width':'99%'},200);
		rgtcon.css('display','none');
		$('#expand > img').attr('src','images/turn-left.png');
		$(this).addClass('current');
	}	
});


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
