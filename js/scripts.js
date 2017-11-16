window.onload = (function () {

    $('.menu-toggle').on('click', function () {
            $('.menu').slideToggle(100, function () {
                if($('.menu').css('display') === 'none'){
                    $('.menu').removeAttr('style');
                }

            })
        }
    );

    $(function () {
        $('nav a').on('click', function (e) {
            e.preventDefault();
            $('nav a').removeClass('active').filter(this).addClass('active');
            if($('.menu-toggle').css('display') === 'block') {
                $('.menu').slideToggle(100, function () {
                    if($('.menu').css('display') === 'none'){
                        $('.menu').removeAttr('style');
                    }

                })

                }

            var selector = $(this).attr('href');
            var h = $(selector);

            $('html, body').animate({
                scrollTop: h.offset().top
            }, 700);

        });
        $('.up').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 700);
        });
        function upBtn() {
            var pageY = $(document).scrollTop();
            var innerHeight = $(window).height();
            var up = $('.up');
            if (pageY > innerHeight) {
                up.css('display', 'block')
            } else {
                up.css('display', 'none')
            }

        }

        upBtn();
        $(window).scroll(upBtn)


    });
    $(function () {
        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: true
        });
    });



    $(function() {

        $('.image-popup-no-margins').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300 // don't foget to change the duration also in CSS
            }
        });

    });
});