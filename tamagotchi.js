console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name = 'Tamagotchi', creatureType = 'cry') {
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10
        console.log(`constructor: name: ${this.name}, creatureTupe: ${this.creatureType}`)

    }
    cry() {
        this.foodInTummy--;
        console.log('new food in tummy: ' + this.foodInTummy);
        console.log("WAHH!!!")
    }


    puke() {
        this.foodInTummy--;
        console.log('new food in tummy: ' + this.foodInTummy + ' neh')
    }

    yawn() {
        this.restedness--;
        console.log("bob has current restedness of: sleep")
    }

}


//create new Tamagotchis
let constructedObject1 = new Tamagotchi('bob', 'cry')
let constructedObject2 = new Tamagotchi('joe', 'play');


//console log the new Objects to check them out
console.log(constructedObject1);
console.log(constructedObject2);

//Invoke methods on the constructed objects:
constructedObject1.cry();
constructedObject2.cry();
constructedObject1.puke()
constructedObject2.yawn()




