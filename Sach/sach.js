/*SLICK */
$('.image-items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      draggable:false,
      prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
      nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
      dots: true,
    });

/* BUTTON San Pham*/

const addButton = document.getElementById("addButton"); 
const subButton = document.getElementById("subButton");
let valueButton = document.querySelector(".addAndRemove input").value;

subButton.addEventListener("click", subfunction);
addButton.addEventListener("click", addfunction);

function addfunction() {
  document.querySelector(".addAndRemove input").value = ++valueButton;
}
function subfunction() {
  if(valueButton > 1){
    document.querySelector(".addAndRemove input").value = --valueButton;
  }
}
