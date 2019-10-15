pics = document.getElementById("holder");
makepicholders();
plaatjes();

function makepicholders() {
    for (var i = 0; i < 9; i++) {
        sesPicture = document.createElement("div");
        sesPicture.className = "picholder";
        sesPicture.id = "picture-holder-" + i;
        pics.appendChild(sesPicture);
    }
}

function plaatjes() {
    pictureholders = document.getElementsByClassName("picholder");
    for (var i = 0; i < pictureholders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet " + (i+1);
        obamaPrism = document.createElement("img");
        obamaPrism.src = "img/" + (i+1) + ".png";
        obamaPrism.id = (i + 1);
        obamaPrism.addEventListener("click", function () {
            hartje(this.id);
        });
        pictureholders[i].appendChild(favoriet);
        pictureholders[i].appendChild(obamaPrism);
    }
}

function hartje(id) {
    console.log("Het id nummer is "+ id)
    notfav = document.getElementsByClassName("favoriet");
    for (var i = 0; i < notfav.length; i++) {
        notfav[i].style.backgroundImage = "none";
    }
    favoriet = document.getElementById("favoriet " + id);
    favoriet.style.backgroundImage = "url('img/heart.png')";

}