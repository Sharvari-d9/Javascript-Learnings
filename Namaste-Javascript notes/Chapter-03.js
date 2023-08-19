
// Hoisting - accessing the variables even before they were declared
/**
 * This happens due to the phase 1 of memory creation where undefined
 * is added as value for the variable and whole function is copied for the function variable
 * 
 */

console.log(x);
console.log(getname);


var x = 7;

function getname(){
    console.log("Hi There!")
}

