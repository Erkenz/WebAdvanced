let geboortejaar = prompt('Geef je geboortejaar in:');
let tekst = document.getElementById('leeftijd');
let dt = new Date().getFullYear();
let leeftijd = dt-geboortejaar;
if (leeftijd >= 20){
    window.alert("Je bent oud genoeg om op deze pagina te kijken.");
}
tekst.innerText = leeftijd;
