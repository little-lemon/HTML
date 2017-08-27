$(function(){
	 /* $("input").hover(
	  function () {
		$(this).addClass("input-border");
	  },
	  function () {
		$(this).removeClass("input-border");
	  }
	);
	
	$("input").mousedown(function(){
		$(this).addClass("input-border");
	});
	
	$("input").mousedown(function(){
		$(this).addClass("input-border");
	}); */
	
	
	$("input").mouseleave(function(){
		$(this).removeClass("input-border");
	});

	$('.up > label').click(function(){
		$('.up-down').slideToggle();
	});
	
	$('#search_query').click(function(){
		$(this).css({background: "#178ecb" });
	})
	
	$('.dropdown').click(
		function(){
			$('.dropdown-content').css({display: "block"});
		}
	);
	
	$('.dropdown-content li').click(function(){
		$(this).parent().css({display: "none"});
        var page = $(this).text();
		$('.page').html(page);

    });
	
//点击显示开始时间的input框（YYYY年MM月DD日 hh:mm）格式
$.jeDate("#search_fromtime",{	
	 isinitVal:true,
    //festival:true,
    ishmsVal:false,
    maxDate: $.nowDate({DD:0}),
    format:"YYYY-MM-DD hh:mm:ss",
    zIndex:3000,
})
	
	
})