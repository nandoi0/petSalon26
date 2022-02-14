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
    pets:[]
}

function displayPetNames(){
    alert(`You have ${salon.pets.length} pets.`);
    for(let i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i]);
    }
}
//create a constructor
function Pet(name,age, gender, breed, service) {
    this.name=name;
    this.age= age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}


//get these inputs from the HTML
let petName = document.getElementById("txtName");
let petAge= document.getElementById("txtAge");
let petGender= document.getElementById("txtGender");
let petBreed= document.getElementById("txtBreed");
let petService= document.getElementById("selService");

function register(){
    console.log("Register");
    //create an object
    let thePet = new Pet(petName.value, petAge.value, petGender.value, petBreed.value, petService.value);
    console.log(thePet);
    //push into the array
    salon.pets.push(thePet);
    //display the array
    console.log(salon.pets);
    //alert
    showPetsCards();
    alert("You have register a new pet!");
}

function showPetsCards(){
    document.getElementById('btnClear').hidden = true;
    document.getElementById('headerList').innerHTML="";
    //clear the field
    document.getElementById("petList").innerHTML="";
    //travel the array
for(let i=0; i<salon.pets.length; i++){
    document.getElementById("petList").innerHTML += createCard(salon.pets[i], i);
   }
}


function removePet(index){
    if (index < salon.pets.length)
    {
        salon.pets.splice(index, 1);
        alert(`Pet ${index} Removed!`)
     
    }
    else
    {
        alert("Pet does not exist")
    }
    showPetsCards();

}

function searchPet(){
    document.getElementById("btnClear").hidden = false;
    let name = document.getElementById(`txtSearch`).value;
    document.getElementById("headerList").innerHTML = "Search Results";

    //clear the field
    document.getElementById("petList").innerHTML="";
    //travel the array
    for(let i=0; i<salon.pets.length; i++){
        //create the card and append the tmp into HTML
        if(name.toLowerCase() == salon.pets[i].name.toLowerCase())
        {

        document.getElementById("petList").innerHTML+=createCard(salon.pets[i], i);
        }
    }
    
}

function createCard(pet, index){
    return `
    
    <div class="pet-card">
        <h3>${pet.name}</h3>
        <p>Age:${pet.age}</p>
        <p>Gender: ${pet.gender}</p>
        <p>Service: ${pet.service}</p>
        <button onclick="removePet(${index});">Remove</button>

    </div>
    `;

}

function init(){
    //create three pets using constructor
let Oliver = new Pet("Oliver", 1, "Male");
//push elements into the array

let Laya = new Pet("Laya", 4, "Female");


let Harley = new Pet("Harley", 3, "Female");

salon.pets.push(Oliver, Laya, Harley);
showPetsCards();
}
window.onload=init;