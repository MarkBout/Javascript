pics = document.getElementById("holder");
makepicholders();

function makepicholders() {
    for (var i = 0; i < 9; i++) {
        sesPicture = document.createElement("div");
        sesPicture.className = "picholder";
        sesPicture.id = "picture-holder-" + i;
        pics.appendChild(sesPicture);
    }
}
//picholders maken
//pic heeft 1 plaatje en favoriet knop

//fotos aam holders
//favorietknop otevoegen