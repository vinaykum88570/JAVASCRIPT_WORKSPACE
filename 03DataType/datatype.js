// 1: Number
// 2: String
// 3: Boolean
// 4: Undefined
// 5: Null
// 6: BigInt
// 7: Symbol



let price = 1.002;
console.log(price);// Number 

fullname = 'tony stark';
console.log(fullname);// String
 
isfallow = false;
console.log(isfallow); // Boolean


let age;
console.log(age);// Undefine

let x = null;
console.log(x);//NULL

let y= BigInt("123");
console.log(y);  //BigINt

let b = Symbol("Vinay");
console.log(b);// Symbol

const student = {// object
    height : 13,
    weight : 38,
    class : 12,

};
console.log(student["height"]);
student["class"]=44;
console.log(student["class"]);

