$('.testimonials-slider').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav:true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: false
        }
    }
})
$('.services-slider').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav:true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
            loop: true
        }
    }
})