$(function(){
    $(".sub_inner ul li a").click(function(){
        $(".sub_inner ul li a").css({"border-bottom" : "none"});
        $(this).css({"border-bottom" : "1px solid #d12a25"});
    });

    // $(".data_list").click(function(){
    //     $(".list").stop().slideDown();
    // });
    // $(".list li").click(function(){
    //     $(".list").stop().slideUp();
    // });

    $(".data_list").on("click", function(){
        $(".list").slideToggle("fast");
    })

    $(".text_list").on("click", function(){
        $(".t_list").slideToggle("fast");
    })

    $("#myInput").focus(function(){
        $(this).data("placeholder",$(this).attr("placeholder")).attr("placeholder" , "");      
    }).blur(function(){
        $(this).attr("placeholder" , $(this).data("placeholder"));
    })
})