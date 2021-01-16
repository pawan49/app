$(document).ready(function() {
    $('#feature').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,

        responsive: {
            0: {
                stagePadding: 50,
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


    $('#screen').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,

        responsive: {
            0: {
                stagePadding: 50,
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })


    $('#client').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,

        responsive: {
            0: {
                stagePadding: 50,
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


    $('.navbar-nav').click(function(e) {

        $('.navbar-collapse').collapse('hide');
    });
});