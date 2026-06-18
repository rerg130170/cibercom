(($, AOS, Swiper) => {
    "use strict";

    $(document).ready(() => {

        // == AOS Init== //
        AOS.init({
            disable: 'mobile'
        });

        // == Search Bar== //
        const $searchIcon = $('.search-icon');
        const $searchForm = $('.search-form');
        if ($searchIcon.length) {
            $searchIcon.on('click', (e) => {
                e.preventDefault();
                $searchForm.toggleClass('show');
            });
        }

        // == Hero Slider (Transition each 2 seconds) == //
        const $heroSlider = $('.hero-slider');
        if ($heroSlider.length) {
            const heroSwiper = new Swiper('.hero-slider', {
                autoplay: {
                    delay: 2000, // 2000ms delay
                    disableOnInteraction: false,
                },
                speed: 900,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.arr-right',
                    prevEl: '.arr-left',
                },
                on: {
                    slideChangeTransitionStart: () => {
                        $('.slide-content h1, .slide-content p, .slide-content a')
                            .removeClass('aos-init')
                            .removeClass('aos-animate');
                    },
                    slideChangeTransitionEnd: () => {
                        AOS.init();
                    },
                },
            });

            $heroSlider.hover(
                () => heroSwiper.autoplay.stop(),
                () => heroSwiper.autoplay.start()
            );
        }

        // == Clients Slider== //
        const $clientsSlider = $('.clients-slider');
        if ($clientsSlider.length) {
            const clientsSwiper = new Swiper('.clients-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true,
                },
                speed: 900,
                loop: true,
                slidesPerView: 5,
                breakpoints: {
                    1200: { slidesPerView: 4 },
                    992: { slidesPerView: 3 },
                    576: { slidesPerView: 2 },
                    400: { slidesPerView: 1 }
                }
            });

            $clientsSlider.hover(
                () => clientsSwiper.autoplay.stop(),
                () => clientsSwiper.autoplay.start()
            );
        }

        // == Light Gallery (Adaptación para iniciar de manera independiente usando clase en vez de ID único) == //
        const $lightGallery = $('.lightgallery-init');
        if ($lightGallery.length) {
            $lightGallery.each(function() {
                $(this).lightGallery({
                    selector: '.gallery-item, .gal-img'
                });
            });
        }
    });

    $(window).on('load', () => {
        // == Animate loader off screen == //
        $(".css-loader").fadeOut("slow");
        AOS.init({
            disable: 'mobile'
        });
    });
})(jQuery, AOS, Swiper);