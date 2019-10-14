var auto = {
    merk: "Ford",
    type: "Mondeo",
    aantalWielen: 4,
    kleur: "blauw",
    snelheid: 0,
    
    gasgeven: function () {
        this.snelheid += 5;
        console.log(auto.snelheid)
    },
    
    toeteren: function () {
        if (auto.snelheid == 25)
        {
            console.log("Toet!")
        }
    }
};

for (let i = 0; i < 7; i++) {
    auto.gasgeven();
    auto.toeteren();
}