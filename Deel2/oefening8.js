let getal1 = prompt('Geef het eerste random gehele getal');
let getal2 = prompt('Geef het tweede random gehele getal');

let optellen = parseInt(getal1) + parseInt(getal2);

document.getElementById('vermenigvuldiging').innerText = 'Vermenigvuldigen: ' + getal1*getal2 ;
document.getElementById('optellen').innerText = 'Optellen: ' + optellen ;
document.getElementById('aftrekken').innerText = 'Aftrekken: ' + (getal1-getal2) ;
document.getElementById('delen').innerText = 'Delen: ' + getal1/getal2 ;