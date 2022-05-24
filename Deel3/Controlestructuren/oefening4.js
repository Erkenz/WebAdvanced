let tijd = new Date();
let uur = tijd.getHours();
let minuten = tijd.getMinutes();


if(uur <= 12){
    window.alert(uur+':'+minuten+" Goedemorgen!");
}
else if (uur < 18){
    window.alert(uur+':'+minuten+" Goede dag!");
}
else{
}
