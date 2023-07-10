$(document).ready(function () {


    //Sidebar
    let sidebar = document.querySelector(".sidebar");
    let closeButton = document.querySelector(".sidebar .close-part .close");
    let openButton = document.querySelector("#nav-phone .container .logo i")

    openButton.addEventListener("click", function () {
        sidebar.classList.add("active-bar");
        sidebar.classList.remove("hide");
    })

    closeButton.addEventListener("click", function () {
        sidebar.classList.add("hide");
        sidebar.classList.remove("active-bar");
    })


    //Carousel
    $('.slides').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
           

        }
    })

    let owlNav = document.querySelector(".owl-nav");
    owlNav.classList.remove("disabled");


     //Sticky navbar
     window.onscroll = function () { myFunction() };
     var navbar = document.getElementById("nav");
     var sticky = navbar.offsetTop;
     function myFunction() {
         if (window.pageYOffset >= sticky) {
             navbar.classList.add("sticky")
         } else {
             navbar.classList.remove("sticky");
         }
     }
 
     AOS.init();
     AOS.init("fade-up");

});