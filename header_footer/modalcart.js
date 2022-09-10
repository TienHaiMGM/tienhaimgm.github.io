const btn_cart = document.getElementsByClassName("cartButton");
const modal_cart = document.getElementsByClassName("modal-cart");
const modal_product = document.getElementsByClassName("modal-product");
const body = document.getElementsByTagName("body");

for(let i = 0; i< btn_cart.length; i++){
  btn_cart[i].addEventListener("click", ()=>{
  modal_cart[0].classList.add("show-cart"); 
  body[0].classList.add("hidden-scroll");
  });
  modal_cart[0].addEventListener("click", (e)=>{
    if(!modal_product[0].contains(e.target)){
        modal_cart[0].classList.remove("show-cart");
        body[0].classList.remove("hidden-scroll");
      }
    });
}