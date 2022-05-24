let checkboxes = document.querySelectorAll('[type="checkbox"]');

let fnDisplayDivs = () => {
    Array.from(checkboxes).forEach(function(checkBox) {
        let div = document.querySelector("." + checkBox.getAttribute("rel"));
        if (checkBox.checked) {
            div.style.display = "none";
        } else {
            div.style.display = "block";
        }
    })
};

Array.from(checkboxes).forEach(function(checkBox) {
    checkBox.addEventListener( "change", function(){
        fnDisplayDivs();
    })
});
fnDisplayDivs();