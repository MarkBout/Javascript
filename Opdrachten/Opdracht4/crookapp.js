//arrays
var Hoofd = [1,2,3];
var ogen = [1,2,3];
var mond = [1,2,3];
//tellers
headcounter = 0;
eyecounter = 0;
facecounter = 0;
//afbeeldingen uit HTML halen
var rij1 = document.getElementById("venster1");
var rij2 = document.getElementById("venster2");
var rij3 = document.getElementById("venster3");
document.body.style.backgroundColor = "pink";

    rij1.addEventListener("click", function () {
    rij1.style.backgroundImage = "url('crookImg/hoofd"+ getHead() +".png')";
});

rij2.addEventListener("click", function () {
    rij2.style.backgroundImage = "url('crookImg/face"+ getEyes() +".png')";
});

rij3.addEventListener("click", function () {
    rij3.style.backgroundImage = "url('crookImg/mond"+ getMond() +".png')";
});

//afbeeldingen pakken
function getHead() {
    if (headcounter >= Hoofd.length){
        headcounter = 1;
    }
    else {
        headcounter++;
    }
    console.log(headcounter);
    return headcounter;
}

function getEyes() {
    if (eyecounter >= ogen.length)
    {
        eyecounter = 1;
    }
    else {
        eyecounter++;
    }
    console.log(eyecounter);
    return eyecounter;
}

function getMond() {
    if (facecounter >= mond.length)
    {
     facecounter = 1;
    }
    else{
        facecounter++;
    }
    console.log(facecounter);
    return facecounter;
}