const myNum=[1,2,3,4,5,6,7,8,9,10];

// Using Filter Methods
// const newNum = myNum.filter((num)=>num > 4);
// console.log(newNum);

// Another Way using filter
// const newNum = myNum.filter((num)=>{
//     return num>4
// });
// console.log(newNum);


// Using ForEach
// const newNums=[]
// myNum.forEach((num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

// ADD 1 each element
// myNum.filter((num)=>{
//     console.log(num+1);
    
// });

const books=[
    {title:'Book one', genre:'fiction',publish:'1981',edition:2005},
    {title:'Book two', genre:'Non-Fiction',publish:'1982',edition:2004},
    {title:'Book three', genre:'History',publish:'1984',edition:2009},
    {title:'Book four', genre:'Non-Fiction',publish:'1981',edition:2004},
    {title:'Book five', genre:'History',publish:'1984',edition:2009},
];

const userbooks=books.filter((bk)=>bk.genre=='History')
console.log(userbooks);


