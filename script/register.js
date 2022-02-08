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
    },
    {
         name:"Gandalf",
         age:4,
         gender:"Male",
         breed:"Cat",
         owner:"Brian",
         phone:"555-222.3456"
    }
    ]
}

console.log(salon.pets);

function displayNames(){
    for(let i=0;i<4;i++){
        console.log(salon.pets[i].name);
    }
}

displayNames()
alert(salon.pets.length);