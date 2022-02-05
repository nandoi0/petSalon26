//object literal
let lion = {
    name:"Simba",
    kingOfJungle:true,
    food:"Carnivore"
}
let lion2 = {
    name:"Nala",
    kingOfJungle:false,
    food:"Carnivore"
}

//object constructor
function Animal(name,kingOfJungle,food){
    this.name=name;
    this.kingOfJungle=kingOfJungle;
    this.food=food;
    this.hunger=10;
    this.feed=function(){
        console.log("feeding");
        this.hunger=this.hunger-2;
    }
}

//create objects

let lionC = new Animal("Simba", true, "Carnivore");
console.log(lionC);

let lionD = new Animal("Nala", false, "Carnivore");
console.log(lionD);

//

let school = {
    name:"Global Knowledge",
    online:true,
    location: "San Diego"

    function University(name,online,location){
        this.name=name;
        this.online=online;
        this.location=location;

        let classa = new School("Global Knowledge", true, "San Diego");
        console.log(classa);
    }
}