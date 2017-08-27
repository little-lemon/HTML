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