/* CART */
const btn_cart = document.getElementsByClassName("cartButton");
const modal_cart = document.getElementsByClassName("modal-cart");
const modal_product = document.getElementsByClassName("modal-product");
const body = document.getElementsByTagName("body");

for(let i = 0; i< btn_cart.length; i++){
  btn_cart[i].addEventListener("click", ()=>{
    console.log("hai")
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

/*Lay gia tri */
  const imgSanPham = document.getElementById("imgSanPham").src;
  const altImgSanPham = document.getElementById("imgSanPham").alt;
  const tenSanPham = document.querySelector(".chitietsanpham h2").innerHTML;
  const giaSanPham = document.querySelector(".chitietsanpham p strong").innerHTML;
  let soSanPham = 1;
  let tamTinh = (parseFloat(giaSanPham.replace(/[,$]/g,"").trim()) * soSanPham);
  let tamTinhHienThi = tamTinh.toLocaleString().concat(".00")
  const themSanPham = document.getElementsByClassName("themvaogiohang");
  const tbody = document.querySelector(".cacsanpham table tbody");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td class="sanpham">
      <button type="button" class="removeButton" onclick="functionRemove()"><ion-icon name="close-circle-outline"></ion-icon></button>
      <img src="${imgSanPham}" alt="${altImgSanPham}">
      <p>${tenSanPham}</p> 
  </td>
  <td>
      <strong>${giaSanPham}</strong>
  </td>
  <td>
      <div class="btnsanpham">
          <div class="addAndRemoveCart">
              <button type="button" id="subButtonCart" onclick="subfunctioncart()"><ion-icon name="remove-outline"></ion-icon></button>
              <input type="number" class="quantity" value="${soSanPham}">
              <button type="button" id="addButtonCart" onclick="addfunctioncart()"><ion-icon name="add-outline"></ion-icon></button>
          </div>        
      </div>
  </td>
  <td id="tamTinh">
      <strong>$${tamTinhHienThi}</strong>
  </td>`;
  for(let i = 0; i < themSanPham.length; i++){
    themSanPham[i].addEventListener("click",()=>{
    tbody.appendChild(tr);
    document.querySelector(".addAndRemoveCart input").value = valueButton;
    document.getElementById("tienGioHang").innerHTML = "$"+(parseFloat(giaSanPham.replace(/[,$]/g,"").trim()) * valueButton).toLocaleString().concat(".00");
    document.getElementById("tienGioHang-mobile").innerHTML = "$"+(parseFloat(giaSanPham.replace(/[,$]/g,"").trim()) * valueButton).toLocaleString().concat(".00");
    document.getElementById("soLuongGioHang").innerHTML = valueButton;
    document.getElementById("soLuongGioHang-mobile").innerHTML = valueButton;
    document.querySelector("#tamTinh strong").innerHTML = "$"+(parseFloat(giaSanPham.replace(/[,$]/g,"").trim()) * valueButton).toLocaleString().concat(".00");
    document.querySelector("#tongTamTinh strong").innerHTML = document.querySelector("#tamTinh strong").innerHTML;
    document.querySelector("#tongTien strong").innerHTML = document.querySelector("#tongTamTinh strong").innerHTML;
    });
  }
  
  const removeSanPham = document.getElementsByClassName("removeButton");
  function functionRemove(){
    valueButton = 1;
    document.getElementById("tienGioHang").innerHTML ="$0.00";
    document.getElementById("soLuongGioHang").innerHTML = 0;
    document.getElementById("tienGioHang-mobile").innerHTML ="$0.00";
    document.getElementById("soLuongGioHang-mobile").innerHTML = 0;
    document.querySelector(".addAndRemove input").value = 1;
    tbody.removeChild(tr);
    document.querySelector("#tongTamTinh strong").innerHTML = "$0.00";
    document.querySelector("#tongTien strong").innerHTML = "$0.00";
  }
  
  /*Button so luong*/
  
  function addfunctioncart() {
    document.querySelector(".addAndRemoveCart input").value = ++valueButton;
    document.querySelector("#tamTinh strong").innerHTML = "$"+(parseFloat(giaSanPham.replace(/[,$]/g,"").trim()) * valueButton).toLocaleString().concat(".00");
    document.getElementById("tienGioHang").innerHTML = "$"+(parseFloat(giaSanPham.replace(/[,$]/g,"").trim()) * valueButton).toLocaleString().concat(".00");;
    document.getElementById("soLuongGioHang").innerHTML = valueButton;
    document.getElementById("tienGioHang-mobile").innerHTML = "$"+(parseFloat(giaSanPham.replace(/[,$]/g,"").trim()) * valueButton).toLocaleString().concat(".00");;
    document.getElementById("soLuongGioHang-mobile").innerHTML = valueButton;
    document.querySelector("#tongTamTinh strong").innerHTML = document.querySelector("#tamTinh strong").innerHTML;
    document.querySelector("#tongTien strong").innerHTML = document.querySelector("#tongTamTinh strong").innerHTML;
    document.querySelector(".addAndRemove input").value = document.querySelector(".addAndRemoveCart input").value;
  }
   function subfunctioncart() {
     if(valueButton > 1){
      document.querySelector(".addAndRemoveCart input").value = --valueButton;
      document.querySelector("#tamTinh strong").innerHTML = "$"+(parseFloat(giaSanPham.replace(/[,$]/g,"").trim()) * valueButton).toLocaleString().concat(".00");
      document.getElementById("tienGioHang").innerHTML = "$"+(parseFloat(giaSanPham.replace(/[,$]/g,"").trim()) * valueButton).toLocaleString().concat(".00");
      document.getElementById("soLuongGioHang").innerHTML = valueButton;
      document.getElementById("tienGioHang-mobile").innerHTML = "$"+(parseFloat(giaSanPham.replace(/[,$]/g,"").trim()) * valueButton).toLocaleString().concat(".00");
      document.getElementById("soLuongGioHang-mobile").innerHTML = valueButton;
      document.querySelector("#tongTamTinh strong").innerHTML = document.querySelector("#tamTinh strong").innerHTML;
      document.querySelector("#tongTien strong").innerHTML = document.querySelector("#tongTamTinh strong").innerHTML;
      document.querySelector(".addAndRemove input").value = document.querySelector(".addAndRemoveCart input").value;
    }
  }
  
  
