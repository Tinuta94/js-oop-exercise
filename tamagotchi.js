console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name = 'Tamagotchi', creatureType = 'cry') {
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
        // this.hungerTimer = 6000;
        // this.yawnTimer = 10000;
        // this.sickTimer = 20000
        console.log(`constructor: name: ${this.name}, creatureType: ${this.creatureType}`)

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

    startHungerTimer() {
        this.hungerTimer = window.setInterval(function(){ 
            console.log("bob")
            this.cry();
        }, 6000)
        clearInterval(this.hungerTimer)
        console.log("bob")
    }
   

    startYawnTimer() {
        this.yawnTimer = window.setInterval(function () {
            this.yawn();
        }, 10000)
        console.log("joe")
    }

    startSickTimer() {
        this.sickTimer = window.setInterval(function() {
        this.puke();
    }, 20000)
    console.log("charlie")
}   
}

//     clearInterval(this.hungerTimer)
//     console.log("stop");
// }


//         clearInterval(this.hungerTimer)
//     }

// }
//create new Tamagotchis
let constructedObject1 = new Tamagotchi('bob', 'cry')
let constructedObject2 = new Tamagotchi('joe', 'play');
let constructedObject3 = new Tamagotchi('charlie', 'eat')


//console log the new Objects to check them out
console.log(constructedObject1);
console.log(constructedObject2);
console.log(constructedObject3);

//Invoke methods on the constructed objects:
constructedObject1.cry();
constructedObject3.puke();
constructedObject2.yawn()






