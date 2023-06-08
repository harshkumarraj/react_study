//NORMAL FUNCTION

function fun1(){

    console.log("Normal Function");
}
fun1();




//ANONYMOUS FUNCTION
var f1 = function (){
    console.log("Anonymous function");
}
f1();




//ARROW FUNCTION

const arrow = ()=>{
    console.log("Arrow Function");
}
arrow();




//CALLBACK FUNCTION

function add(a,b){      //add is here callback function

    console.log(a+b); 

}

function getSum(add){            //passing function as parrameter
    console.log("getSum callback....")
}
getSum(add(5,5));
