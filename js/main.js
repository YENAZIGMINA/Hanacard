//.event_box2 .eb_slider
$('.eb_slider_list').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    //pauseOnHover-> 마우스를 올렸을때 오토플레이 멈추는 기능 : 해제        
});

//재생,정지버튼
//먼저 조건걸고, 정지화면부터 
$('.event_box2 .page_act .btn_stop').click(function (event) {
    event.preventDefault();
    if ($('.event_box2 .page_act').hasClass("on")) {
        $('.event_box2 .page_act').removeClass("on");
        $('.eb_slider_list').slick('slickPause');
        //.slick('')괄호안에 원하는 명령입력 (gitHUB 참고)
    }
})

$('.event_box2 .page_act .btn_play').click(function (event) {
    event.preventDefault();
    $('.event_box2 .page_act').addClass("on");
    $('.eb_slider_list').slick('slickPlay');
})

//.card
$('.card').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
});

//.card 재생버튼
$('.event_box3 .pagn_act .btn_stop').click(function (e) {
    e.preventDefault();
    if ($('.event_box3 .pagn_act').hasClass("on")) {
        $('.event_box3 .pagn_act').removeClass("on");
        $('.card').slick('slickPause');
    }
})

$('.event_box3 .pagn_act .btn_play').click(function (e) {
    e.preventDefault();
    $('.event_box3 .pagn_act').addClass("on");
    $('.card').slick('slickPlay');
})


// life 버튼 (cont2)
let tab=$('.life_menu ul li')
let menu=$('.life_style li')

tab.mouseover(function(){
    //태생적으로 태어날 때 가지고 나온 번호를 추출 -> index()
    let target = $(this);
    let index = target.index(); // index는 ()번호를 붙임
    console.log(index)
    menu.css({opacity:0})
    menu.eq(index).css({opacity:1}) //eq는 동등한 의미
})


