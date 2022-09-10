/*NAVBAR ONLY MOBILE*/
const mobile_nav_button = document.querySelectorAll(".mobile-nav-button button");
const mobile_menu_nav = document.getElementsByClassName("mobile-menu");
const mobile_button_close = document.querySelectorAll(".mobile-button-close button");
//  const body = document.getElementsByTagName("body"); -- Đã được khai báo từ modalcart.js
const html = document.getElementsByTagName("html");

mobile_nav_button.forEach(e =>{
   e.addEventListener("click",()=>{
    mobile_menu_nav[0].style.display = "block"; 
    body[0].classList.add("hidden-scroll");
    html[0].classList.add("hidden-scroll");
   })
})

mobile_button_close.forEach(e =>{
    e.addEventListener("click",()=>{
    mobile_menu_nav[0].style.display = "none";
    body[0].classList.remove("hidden-scroll");
    html[0].classList.remove("hidden-scroll");
    })
})


/*DANH GIA KHACH HANG MOBILE -> DESKTOP*/
$(document).ready(()=>{
    $('.cacdanhgia').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: true,
        mobileFirst:true,
        responsive:[
            {
                breakpoint:900,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows:false,
                    draggable:false,
                    dots:false
                }
            }
        ]
    });
})
