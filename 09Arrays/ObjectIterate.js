const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",

}

for (const key in myObject) {
   console.log(myObject[key]) // only value printed
}

const programming =["js","rb","py","java","cpp"];
for(const key in programming){
    console.log(key)// only key printed
}