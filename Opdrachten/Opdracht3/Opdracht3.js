var afbeeldingen = document.getElementsByTagName("img");
var random = 0;
var  nummers =[];

while(nummers.length < 9)
{
    random = Math.floor(Math.random()*9) +1;
    if (nummers.lastIndexOf(random) == -1) {
        nummers.push(random);
    }
}

random = 0;
for (var plaatje in afbeeldingen){
    afbeeldingen[plaatje].src = "img/" + nummers[random] + ".jpg";
    random++;
}

