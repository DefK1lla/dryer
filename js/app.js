let menuBtn = $('.header__menu-btn'),
    menu = $('.menu'),
    menuLine = $('.header__menu-line');

menuBtn.on('click', function () {
    menuLine.toggleClass('active');
    menu.toggleClass('active');
});



$('.intro__slider').slick({
    fade: true,
    responsive: [
        {
            breakpoint: 1700,
            settings: {
                arrows: false
            }
        }
    ],
    dots: true,
    autoplay: true,
    infinite: false
});

$('.products__slider-items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    variableWidth: true,
    dots: false,
    arrows: true,
});
