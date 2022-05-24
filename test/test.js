function toggle(matchingAttribute) {
    // optain all div elements in the page
    let divArray = document.getElementsByTagName("div");
    for(i=divArray.length-1; i>=0; i--) {  // for each div
        if(divArray[i].id.match("_"+matchingAttribute+"_")) {
            if(divArray[i].style.display != 'none') {
                divArray[i].style.display = 'none';
            }
            else {
                divArray[i].style.display = '';
            }
        }
    }
}