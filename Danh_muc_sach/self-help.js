/*SLICK SACH*/
$(document).ready(()=>{
  $('.slick-sach').slick({
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