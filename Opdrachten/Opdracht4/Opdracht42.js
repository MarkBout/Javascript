//array maken om aantal plaatjes bij te houden
var plaatjes = [1,2,3,4,5,6,7,8,9];
//teller
var counter = 1;
//Images uit HTML bestand halen
var slider = document.getElementById("slider");
slider.style.backgroundImage = "url('img/1.jpg')";
//afbeelding laten wisselen
slider.addEventListener("click", function () {
    slider.style.backgroundImage = "url('img/"+ getImg() +".jpg')";
});
//afbeelding pakken
function getImg() {
    if (counter >= plaatjes.length){
        counter = 1;
    }
    else {
        counter++;
    }
    console.log(counter);
    return counter;
}