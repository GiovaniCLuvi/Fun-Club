let count2 = 1;
document.getElementById("cadio1").checked = true;

setInterval( function(){
    nextImage()
}, 3000)


function nextImage(){
    count2++;
    if(count2>4){
        count2=1;
    }
    document.getElementById("cadio"+count2).checked = true;
}