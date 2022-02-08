let names = ["Victoria", "Mark", "Mike", "Phil"];
console.log(names);

//let mixed = [99, "Derek", true, null, 45, "Hello"];
//console.table(mixed);

//function displayNames(){
  //  for(let i=0; i<ages.length;i++){
   //     console.log(names[i]);
 //   }
//}

//displayNames()

//let ages =[25, 30, 8, 5, 3];
//console.log(ages);

//function displayAges(){
  //  for(let i=0; i<ages.length;i++){
   //     console.log(ages[i]);
 //   }
//}

//displayAges()

//object literal

let student={
    name:"Joey",
    age:80,
    student:true,
    grade:"A-",
    music:["your mom"],
    address:{
        city:"San Diego",
        country:"USA"
    }
}

console.log(student.address.country);
console.log(student.music[0]);
console.log(student["music"][0]);

let students=[
    {
        name:"Fernando",
        age:24, 
        activeStudent:true
    },
    {
        name:"Mark",
        age:24, 
        activeStudent:true
    },
    {
        name:"Fernando",
        age:24, 
        activeStudent:false
    }
]

console.log(students);