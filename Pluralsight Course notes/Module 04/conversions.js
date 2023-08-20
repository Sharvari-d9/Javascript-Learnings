/**
 * 
 */

//Joining a non-string value wiht  string

let age = 41;;
let firstName = "David";

let description = `${firstName} is ${age} years old`;
console.log(description);

//Converting a string into number 

let ageString = "41";
let ageNum = Number(ageString);

console.log(typeof(ageString));
console.log(typeof(ageNum));

let ageNewNum = new Number(ageString);
console.log(typeof(ageNewNum));

//NaN

let ageString2 = "forty-one";
let ageNum2 = Number(ageString2);

console.log(ageNum2);

let isInvalid = isNaN(ageNum2);
console.log(`Is Invalid: ${isInvalid}`); // true

//converting a value to a boolean

let num1 = 1;
let num2 = 0;

let bool1 = Boolean(num1);
let bool2 = Boolean(num2);

console.log(`Num1 : ${bool1}`); //true

console.log(`Num2 : ${bool2}`);  // false

let str1 = "Hello";
let bool3 = Boolean(str1);
let val1;
let bool4 =  Boolean(val1);

console.log(bool3); // true
console.log(bool4); // false


let bool5 = true;
console.log(`Bool 5 is ${bool5}`);



