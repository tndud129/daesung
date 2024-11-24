$(function(){
    $(".sub_inner ul li a").click(function(){
        $(".sub_inner ul li a").css({"border-bottom" : "none"});
        $(this).css({"border-bottom" : "1px solid #d12a25"});
    });
})