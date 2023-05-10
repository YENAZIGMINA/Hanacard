//.event_box2 .eb_slider
$('.eb_slider_list').slick({
    arrows : false,
    dots : true,
    autoplay : true,
    pauseOnHover : false, 
    //pauseOnHover-> 마우스를 올렸을때 오토플레이 멈추는 기능 : 해제        
});

//재생,정지버튼
//먼저 조건걸고, 정지화면부터 
$('.page_act .btn_stop').click(function(event){
    event.preventDefault();
    if($('.event_box2 .page_act').hasClass("on")){
        $('.event_box2 .page_act').removeClass("on");
        $('.eb_slider_list').slick('slickPause');
        //.slick('')괄호안에 원하는 명령입력 (gitHUB 참고)
    }
})

$('.page_act .btn_play').click(function(event){
    event.preventDefault();
    $('.event_box2 .page_act').addClass("on");
    $('.eb_slider_list').slick('slickPlay');
})