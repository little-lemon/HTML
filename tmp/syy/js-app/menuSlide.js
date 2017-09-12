/**
 * 查询区域下拉菜单
 */
define(['../common','exports','jquery'],function (common,exports,$) {
	
	/**
	 * @description 查询区域菜单下拉
	 * @param {element} elID 查询按钮的ID
	 * @param {element} elcontent	要伸缩的内容
	 */
	exports.Slide = function(elid,elcont){
		var btn_el = $(elid),
			con_el = $(elcont);
		//	按钮点击
		btn_el.click(function(){
			con_el.slideToggle(300);
			if(!btn_el.hasClass('current')){
				btn_el.css('background-position','0 -16px');
				btn_el.addClass('current');
			}else{
				btn_el.css('background-position','0 0');
			   btn_el.removeClass('current');
			}
		});
	}
	
});