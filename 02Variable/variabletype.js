 // Local Variable.
 function abc(){
    let x= 10; //local variable
    console.log(x);
    ;
   }
   
   if(10 < 13){
    var y = 20;//local variable
    console.log(y);
    }

    //Global Variable
    var data = 200;
    function a(){
        console.log(data);
    }
    function b(){
        console.log(data);
        
    }
    var value = 100;
    var price = "get out my page:"
    function ac(){
        alert(value);
    }
    function bc(){
        alert(price);
    }
   
 abc();
    a();//calling a JavaScript function
    b();
    ac();
    bc();

    function m (){
        window.value = 100;

    }
    function n(){
        alert(window.value);
    }
    m();
    n();
    