$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    })

    // slide up script
        $('.scroll-up-btn').click(function () {
            $('html').animate({ scrollTop: 0 });
        });
        // tggle menu script


    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    })

    // typing animatin script
    var typed = new Typed(".typing",{
        strings: ["Full Stack Developer", "freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
    })
    var typed = new Typed(".typing-2",{
        strings: ["Full Stack Developer", "freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
    })
    // owl carousel script
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    })
});
