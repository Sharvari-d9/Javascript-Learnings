/**
 * Things created when a javascript program runs
 * Global execution context
 * windows variable - global object
 * this variable
 * 
 * 
 */

var x =10;
function b(){
    var y =  50;
    console.log(y);
    console.log(window.y);
}

console.log(window.x)
b();
// console.log(b);

/*
OUTPUT:
10 
50
undefined //Didn't understand how this is coming undefined
*/