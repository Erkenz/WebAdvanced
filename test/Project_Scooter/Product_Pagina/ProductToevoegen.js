let knoppen = document.querySelector(".knoppen");
let kaarten = document.querySelector(".product-kaarten");
let form = document.querySelector(".productForm");
function product(){
    knoppen.style.display = "none";
    kaarten.style.display = "none";
    form.style.display = "flex";
}
function annuleren(){
    knoppen.style.display = "block";
    kaarten.style.display = "block";
    form.style.display = "none";
}
let divContainer = document.querySelector('.productkaarten');
function AddNew() {
    const newDiv = document.createElement("div");
    newDiv.classList.add('.container');
    divContainer.id("")
    divContainer.appendChild(newDiv);



    knoppen.style.display = "block";
    kaarten.style.display = "block";
    form.style.display = "none";
}

