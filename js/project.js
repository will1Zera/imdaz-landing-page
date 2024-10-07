let swiper2 = new Swiper(".project-slider__swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true },
    keyboard: {
        enabled: true 
    },
    mousewheel: {
        thresholdDelta: 70 
    },
    pagination: {
        el: ".project-slider__pagination",
        clickable: true 
    },
    breakpoints: {
        640: {
            slidesPerView: 2 
        },
        768: {
            slidesPerView: 1 
        },
        1024: {
            slidesPerView: 2 
        },
        1560: {
            slidesPerView: 3 
        } 
    }
});