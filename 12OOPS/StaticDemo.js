class Test{
Test(){

}

    static a=10; // static veriable
    b=20; // Non ststic variales

    static m1(){
        console.log("static methods")
    }

    m2(){
        console.log("non static mehods")
    }

    
}

// we can directlty static variables using class name
console.log(Test.a) // 10
console.log(Test.b)// Undefied

Test.m1()// static methods
// Test.m2()// error incorrect calling methods

// we can access non static vaiables/methods using objects
let t=new Test();
console.log(t.b)
t.m2();

