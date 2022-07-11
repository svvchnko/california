$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            

            1024:{
                items:4
            }
        }
    });
});

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}