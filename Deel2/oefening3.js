let zin = 'Ik wil een koekje';

document.getElementById('positie0').innerText = zin.substr(0,1);
document.getElementById('positie3').innerText = zin.substr(3,1);
document.getElementById('klaatste').innerText = zin.lastIndexOf('k');
document.getElementById('elaatste').innerText = zin.lastIndexOf('e');
document.getElementById('hoeveel').innerText = zin.length;