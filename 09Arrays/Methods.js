// toStrings() & Join()
let fruits=["Banana","Orange","Apple","Mango"];
console.log(fruits.toString()) // Banana,Orange,Apple,Mango
console.log(fruits.join("_")); // Banana_Orange_Apple_Mango

// Pop() - remove the last element
fruits=["Banana","Orange","Apple","Mango"];
console.log(fruits.pop()); // Mango
console.log(fruits); //[ 'Banana', 'Orange', 'Apple' ]

// Push() - add new element to the end
fruits=["Banana","Orange","Apple","Mango"];
console.log(fruits.push("kiwi")) // 5 return the length of an arrays

// shift() -to remove first element from array
fruits=["Banana","Orange","Apple","Mango"];
console.log(fruits.shift());//Banana
console.log(fruits);// [ 'Orange', 'Apple', 'Mango' ]

// Unshift() - add new element at the beginning
fruits=["Banana","Orange","Apple","Mango"];
console.log(fruits.unshift("Lemon")); // 5
console.log(fruits); // [ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]

// Deleting element from array
fruits=["Banana","Orange","Apple","Mango"];
delete fruits[1];
console.log(fruits);

// Concat() - joinning/ merging 2 or more arrays
let arr1=[10,20];
let arr2=["A","B"];
let arr3=["x","y","z"];
console.log(arr1.concat(arr2)); //[ 10, 20, 'A', 'B' ]
console.log(arr1.concat(arr2,arr3)) //[ 10, 20, 'A', 'B' ] 
// [
//   10,  20,  'A',
//   'B', 'x', 'y',
//   'z'
// ]

// Slice() - subset of array
fruits=["Banana","Orange","Apple","Mango","Lemon"];
console.log(fruits.slice(1)); // [ 'Orange', 'Apple', 'Mango', 'Lemon' ]
console.log(fruits.slice(2)); // [ 'Apple', 'Mango', 'Lemon' ]

// Sort()
fruits=["Banana","Orange","Apple","Mango","Lemon"];
console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Lemon', 'Mango', 'Orange' ]
let nums=[100,800,600,400,200];
console.log(nums.sort()); // [ 100, 200, 400, 600, 800 ]

// Reverse()
let num=[ 100, 200, 400, 600, 800 ];
console.log(num.reverse()); // [ 800, 600, 400, 200, 100 ]