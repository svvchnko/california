$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
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