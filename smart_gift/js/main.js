//intialization plugins
$(document).ready(function () {
    //animation icon toggler of navbar
    $(`.navbar-toggler`).click(function() {
        $(`.navbar-toggler`).toggleClass(`active`);
    });
    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //fav
    $(`.fav_butn`).click(function() {
        $(this).toggleClass(`active`);
    });
    //fancybox
    $("[data-fancybox]").fancybox({
        selector: '[data-fancybox="images"]',
        loop: true
    });
    //tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    /*Loading page */
    $(window).on("load", function(){
        $(".loading-page")
        .fadeOut(2000 , function(){
            $("body").css("overflow" , "auto");
            $("this").fadeOut(1500 , function(){
                $(this).remove();
            });
        });
    });  

    // ------------ increase products -----------
    $(".qt-plus").click(function() {
        $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
    });

    $(".qt-minus").click(function() {

        child = $(this).parent().children(".qt");

        if (parseInt(child.html()) > 1) {
            child.html(parseInt(child.html()) - 1);
        }

        $(this).parent().children(".full-price").addClass("minused");
    });
});
var swiper = new Swiper('.prods-swiper', {
    loop: true,
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 15,
    // autoplay: {
    //     delay: 2500,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

var swiper = new Swiper('.order-imgs-swiper', {
    loop: true,
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 15,
    // autoplay: {
    //     delay: 2500,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

// ------------ SHOW HED PASS ----------
$(document).ready(function() {
    $(".show_hide_password .show_pass").on('click', function(event) {
        event.preventDefault();
        if($(this).siblings("input").attr("type") == "text"){
            $(this).siblings("input").attr('type', 'password');
            $(this).addClass( "fa-eye-slash" );
            $(this).removeClass( "fa-eye" );
        }else if($(this).siblings("input").attr("type") == "password"){
            $(this).siblings("input").attr('type', 'text');
            $(this).removeClass( "fa-eye-slash" );
            $(this).addClass( "fa-eye" );
        }
    });
}); 

//Swiper 
// var swiper = new Swiper(' .swiper-container', {
//     loop: true,
//     speed: 900,
//     slidesPerView: 1,
//     spaceBetween: 15,
//     // autoplay: {
//     //     delay: 2500,
//     // },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         1024: {
//             slidesPerView: 5,
//             spaceBetween: 20,
//         },
//     }
// });

