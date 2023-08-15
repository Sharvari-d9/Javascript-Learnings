/**
 * Llet and const hoisting is a bit different than var
 * 
 * variables declared using let and const keyword are stored in separate memory space.
 * they are not accesible in global scope
 */
// console.log(x);
/**  variable hoisted but not assisgned yet in a separate space. 
The time between this variable is hoisted and assigned value in next line is called as temporal dead zone.
when we are trying to access the assigned variable it throws reference error.
Variables in temporal dead zone cannot be assigned.
*/
console.log(a); // Reference Error as a cant be accessed before initializing
// Part 1
let a = 10; //appears in script and not in global variable scope 

var b = 100;

//Part 2
let x = 99; 
// let x = 80; //cannot redeclare but this is possible in var

//Part 3 
 var b = 300;
console.log(b); // var is a bit lienient but let is strict

//Part 4 
const c;
const e=578678;
let d;
c = 9878; //Syntax error: Missing initializer in const declaration, const being more strict than let will not allow it.
d=99; //will not throw error
e=1001; //TypeError: Cannot reassign to a const variable hence typeerror.

/**
 * Try to use const wherever possible.
 * if not const then use let.
 * 
 * var is not preferred.
 * 
 * to avoid the temporal dead zone with let always initialize the variables in the top.
 * so essentially we are decreasing the temporal dead zone to 0.
 */