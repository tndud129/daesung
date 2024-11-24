$(function(){   


    $(".swiper-wrapper").slick(function(){})



    // 태블릿&모바일버전
    $(".t_category a , .m_category a").click(function(){
        $(".all_menu").css({"right":"0"});
    })//
    $(".close").click(()=>{
        $(".all_menu").css({"right":"-100%"})
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