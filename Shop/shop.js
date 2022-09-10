/* SEARCH*/
const nameBook = document.querySelectorAll(".grid-items div h4");
const inputSearch = document.querySelector(".form input");
let contentSearch = "";
inputSearch.addEventListener("change",()=>{
    contentSearch = inputSearch.value.toLocaleUpperCase();
    nameBook.forEach(e => {
    let parentNameBook = e.parentElement;
    if(!e.textContent.toLocaleUpperCase().includes(contentSearch)){
        parentNameBook.classList.add("none-display");
    }
    else{
        parentNameBook.classList.remove("none-display");
    }
    });
   
});

