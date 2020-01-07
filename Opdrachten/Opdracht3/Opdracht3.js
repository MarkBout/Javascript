//afbeeldingen in array zetten
var plaatjes = document.getElementsByTagName("img");
var random = 0;

//genereerd een willekurig nummer tussen de 1 en de 9 om plaatjes te pakken
var noduplicates = [];
while (noduplicates.length < 9){
    random = (Math.floor(Math.random() * 9) + 1);
    if (noduplicates.lastIndexOf(random) == -1){
        noduplicates.push(random);
    }
}

//plaatjes op de pagina zetten
random = 0;
for (var plaatje in plaatjes){
    plaatjes[plaatje].src = "img/" + noduplicates[random] + ".jpg";
    random++;
}