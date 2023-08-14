var x = 1; //scope in the global execution context
a();
b();

console.log(x);

function a(){
    //local scope of a function
    var x = 10;
    console.log(x);
}

function b(){
    //local scope of b function
    var x = 100;
    console.log(x);
}