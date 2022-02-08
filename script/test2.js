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




//register js script

//create a constructor
function Pet(name, age, gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}
//create three pets using constructor
let Oliver = new Pet("Oliver", 1, "Male");
salon.pets.push(Oliver); //push elements into the array

let Laya = new Pet("Laya", 3, "Female");
salon.pets.push("laya");

let petName = document.getElementById("txtName");
let petAge= document.getElementById("txtAge");
let petGender= document.getElementById("txtGender");

function register(){
    console.log("Register");
    //create an object
    let thePet = new Pet(petName.value, petAge.value, petGender.value);
    console.log(thePet);
    //push into the array
    salon.pets.push(thePet);
    //display the array
    console.log(salon.pets);
}





let salon={
    name:"The Groomer",
    address:{
        street:"Av. University",
        ZIPcode:"92124",
        number:"262-K"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[
        {
            name:"Oliver",
            age:1,
            gender:"Male",
            breed:"Newfoundland",
            owner:"Fernando",
            phone:"555-222.3456"
        },
        {

            name:"Leah",
            age:3,
            gender:"Female",
            breed:"Dobermnan",
            owner:"Israel",
            phone:"555-222.2556"
        },
        {

        name:"Harley",
        age:4,
        gender:"Female",
        breed:"Pug",
        owner:"Christy",
        phone:"555-222.3456"
    }
    ]
}

console.log(salon.pets);