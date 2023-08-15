/**
 * Block Scope & Shadowing in JS
 * block - combining of multiple statements together
 * block scope - whatever variables we can access in this function
 * 
 */

//Part 1
var a =56;
{
    var a = 10; // Shawdos the variable in a in global level
    let b = 34;
    const c = 99;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a); // Prints 10 as 'a' was updated in the block and same memory will be referenced here for variable a.
// console.log(b); // will throw error as the variable is only available in block scope
// console.log(c);

//Part 2
let d = 70;
{
    let d = 20;
    console.log(d); //Prints 20 refers the block scope variable
}

console.log(d); //Prints 70 refers the script block variable

//Part 3
var e = 77;
{
    let e =34;
    console.log(e);
}

console.log(e);

//Part 4 
let f = 50;
function x() // var is functional scope so if we add var of same variable inside a function it wont throw error.
{
var f = 60; // Ilegal shadowing, cant use var in a block after let has already been used to declare the same variable
console.log(f);
}