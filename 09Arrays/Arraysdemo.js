
// let cars=["saab","volvo","BMW"];
let cars= new  Array("saab","volvo","BMW")

// console.log(cars); [ 'saab', 'volvo', 'BMW' ]
// console.log(cars[2]) BMW

// Set another value at 0 positiion
cars[0]="Creata";
console.log(cars[0]); //Creata
console.log(cars); // [ 'Creata', 'volvo', 'BMW' ]

// Differant values in arrays
let myArray=[100,"welcome",10.50,true];
console.log(myArray);


// we can have abjects in arrays
let person1={
    name:"john",
    age:30
};

let person2={
    name:"vinay",
    age:70
};
let myArray1=[person1,person2];
console.log(myArray1) // [ { name: 'john', age: 30 }, { name: 'vinay', age: 70 } ]
console.log(myArray1[0]) // { name: 'john', age: 30 }


// length of an array
console.log(myArray.length)


