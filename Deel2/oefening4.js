let zin = 'IK WIL EEN LASAGNE VAN PXL-CATERING';

document.getElementById('positie0').innerText = zin.substr(0,1);
document.getElementById('positie3').innerText = zin.substr(3,1);
document.getElementById('klaatste').innerText = zin.lastIndexOf("K".toUpperCase());
document.getElementById('elaatste').innerText = zin.lastIndexOf('e'.toUpperCase());
document.getElementById('hoeveel').innerText = zin.length;

console.log(zin.substr(0,1));
console.log(zin.substr(3,1));
console.log(zin.lastIndexOf("K".toUpperCase()));
console.log(zin.lastIndexOf('e'.toUpperCase()));
console.log( zin.length);