const coding =["js","rb","py","java","cpp"];

// Using Callback function
// coding.forEach( function (item) {
//     console.log(item);
// } )

// Using Arrow Function
// coding.forEach((val)=>{
//     console.log(val);
// })

// // Using Function
// function printMe(item){
//     console.log(item);
// }
//  coding.forEach(printMe);

// Using  
coding.forEach( function (item,index) {
    console.log(item,index);
} )