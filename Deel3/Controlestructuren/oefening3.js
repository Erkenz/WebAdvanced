let tijd = new Date();
let uur = tijd.getHours();
let minuten = tijd.getMinutes();


if(uur <= 12){
    window.alert(uur+':'+minuten+" het is voormiddag");
}
else{
    window.alert(uur+':'+minuten+" het is namiddag");
}
