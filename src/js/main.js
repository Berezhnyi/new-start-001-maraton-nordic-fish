$(function () {


    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
        vertical: true,
        responsive: [
            {
                breakpoint: 371,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }

        ]
    });
    // $('.product__content').slick({
    //     dots: true,
    //     vertical: true,
    // })
    $('.product__name').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        // centerMode: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 891,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    // centerMode: false
                }
            }
        ]
    });

    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.product__name',
        prevArrow: false,
        nextArrow: false,
    });
    $('.menu__btn').on('click', function () {
        $('.menu_list').toggleClass('menu_list--active');
    });

});