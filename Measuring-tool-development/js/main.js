/**
 * Created by Administrator on 2017/9/12.
 */
requirejs.config({
    paths:{
        jquery:'jquery-2.1.4.min'
    }
});

requirejs(['jquery','backtop'],function($,backtop){
    $('#backTop').backtop({
        mode:'move',
        pos:0
    })
    /*new backtop.BackTop($('#backTop'),{
        mode:'move',
        pos:0,
        speed:200
    })*/
    /*var scroll = new scrollto.ScrollTo({
        dest:500,
        speed:2000
    });
    $('#backTop').on('click',$.proxy(scroll.move,scroll));*/
   /* $(window).on('scroll',function () {
        checkPosition($(window).height());
    });

    function move(){
        $('html,body').animate({
            scrollTop:0
        },800);
    }

    function go(){
        $('html,body').scrollTop(0);
    }
    checkPosition($(window).height());

    function checkPosition(pos){
        if($(window).scrollTop() > pos){
            $('#backTop').fadeIn();
        }else{
            $('#backTop').fadeOut();
        }
    }*/
})