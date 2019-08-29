console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor() {
        this.foodInTummy = 10;
         this.restedness = 10; 
         this.health = 10
         
}

cry(){
this.foodInTummy--;
console.log('new food in tummy:' + this.foodInTummy);
console.log("WAHH!!!")

}
}

//create new Tamagotchis
var constructedObject1 = new Tamagotchi()
var constructedObject2 = new Tamagotchi();

//console log the new Objects to check them out
console.log(constructedObject1);
console.log(constructedObject2);

//Invoke methods on the constructed objects:
constructedObject1.cry();
constructedObject2.cry();

// console.log(`constructor: name: ${this.name}, creatureType: ${this.creatureType}`)


