$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.page_up').fadeIn();
        }else{
            $('.page_up').fadeOut();
        }
    });
    $('.page_up').click(function(){
        $('html, body').animate({
            scrollTop:0
        },400);
        return false;
    });


    // pc버전
    $("#head , .head_nav>li").mouseover(function(){
        $(".head_sub").stop().slideDown(100);
        $("#head").addClass("on");
    })//
    $("#head, .head_nav>li").mouseleave(function(){
        $(".head_sub").stop().slideUp(100);
        $("#head").removeClass("on");
    })//

    $(".head_nav>li").hover(function(){
        $(this).children("a").css("border-bottom", "1px solid #ff3636");
    }, function(){
        $(".head_nav>li>a").css("border-bottom", "none");
    });


    // 언어선택창
    $(".language>a").click(function(){
		$(".language .lang_box").slideToggle();
	});


    // 태블릿&모바일버전
    $(".t_category a , .m_category a").click(function(){
        $("html , body").css({"position":"fixed"})
        $(".all_menu").css({"right":"0"});
    })//
    $(".close").click(()=>{
        $(".all_menu").css({"right":"-100%"})
        $("html , body").css({"position":"static"})
    })//
    
    
    $(".t_nav>li").click(function(){
        if($(this).hasClass("on")){
            $(this).find(".t_nav_sub").stop().slideUp(300);
            $(".t_nav>li").removeClass("on");
        }else{
            $(this).find(".t_nav_sub").stop().slideDown(300).end().siblings().find(".t_nav_sub").slideUp();
            $(this).addClass("on")
        }
        // $(".t_nav>li>a").not(this).next().slideUp(300);
    })//
    // $(".t_nav>li>a").eq(0).trigger("click");
})//