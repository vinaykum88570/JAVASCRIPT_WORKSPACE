function meet(name,callback){
    console.log("Hello"+" "+name)
    callback(); // This is callback methods
}

// callback Function
function callMe(){
    console.log("Im a callback Function")
}

meet("Vinay",callMe);