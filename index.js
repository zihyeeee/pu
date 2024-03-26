
$(function(){
    $('.deth1').mouseover(function(){
        $('.deth1').children().removeClass('on');
        $('.deth1').children().css('color','#d9d9d9');
        $(this).children().addClass('on');
        $(this).children().css('color','#222');
    });
    $('.deth1').mouseleave(function(){
        $(this).children().removeClass('on');
        $('.deth1').children().css('color','#222');
    });

    // bx
    $('.bxslider').bxSlider({
        auto: true,
        pause: 3000,
        autoHover: true,
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 500,
        slideMargin: 4,
    });

    // swiper
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 방향
        slidesPerView: 6, // 슬라이드를 한번에 3개를 보여준다
        slidesPerGroup : 1, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
        spaceBetween: 60, // 슬라이드간 padding 값 30px 씩 떨어뜨려줌
        
        // 그룹수가 맞지 않을 경우 빈칸으로 메우기
        // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
        loopFillGroupWithBlank : false,

        loop: true,
        loopAdditionalSlides: 1,
         // loop 를 true 로 할경우 무한반복 슬라이드, false 로 할경우 슬라이드의 끝에서 더보여지지 않음
        autoplay:{delay: 4000},

        // If we need pagination 
        pagination: {
            el: '.swiper-pagination',
            clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
            type: 'progressbar', // And if we need scrollbar 진행바
        },
        
        // Navigation arrows 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
        
        })

        // header
        let winTop = $(window).scrollTop(),
            headerTop = $('#header').offset().top;
        
        $(window).scroll(function(){
            if(winTop > headerTop) {
                $('#header').css('position','fixed');
                $('#header').css('top','0');
            } else {
                $('#header').css('position','relative');
            }
        })

});

