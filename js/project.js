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
    }
});