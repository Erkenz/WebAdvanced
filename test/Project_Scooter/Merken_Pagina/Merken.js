/*======NAVIGATION======*/

const navLink = document.querySelectorAll('.menu-item');
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

// loading van webpagina WIP
let loader = document.getElementById("preLoader");

window.addEventListener("load", function () {
    loader.style.display = "none";
})


//openen en sluiten van de mobile navigation nadat er op de hamburger icon geklikt wordt
hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
    hamburger.classList.toggle("change");

})

//navbar style veranderen na het openklikken van de dropdown menu

let navBar = document.querySelector(".navbar")
let clicked = false;

function toggleStyleNav() {
    if (clicked) {
        clicked = false
        navBar.style.borderRadius = "15px";
    } else {
        navBar.style.borderRadius = "15px 15px 0 0";

        clicked = true;
    }
}


//Sluiten van de mobile navigation nadat er op een link geklikt wordt
function linkAction() {
    menu.classList.remove('active');
    document.getElementsByClassName("navbar")[0].style.borderRadius = "15px";
    clicked = false;
    hamburger.classList.toggle("change");


}

navLink.forEach(n => {
    n.addEventListener('click', linkAction);
});

//-------------TERUG NAAR BOVEN KNOP------------------------------
button = document.getElementById("naarBoven");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block"
    } else {
        button.style.display = "none"
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*======MAIN ======*/
let hovereffect = document.getElementsByClassName("hover1");
console.log(hovereffect.length);
let hv = document.getElementsByClassName("hover2")

for (let i = 0; i < hovereffect.length; i++) {
    hovereffect[i].addEventListener("mouseover", function () {

        hv[i].style.backgroundColor = "#0082e6";
    })
    hovereffect[i].addEventListener("mouseleave", function () {
        hv[i].style.backgroundColor = "dimgray";
    })
}







