/**
 * 
 */

// mathematical operators
let val2 = 2 + -1;
console.log(val2);

let val3 = 1 -  -1;
console.log(val3);

let val4 = 4/5;
console.log(val4);

//exponentiaton
let val5 = 3**2;
console.log(val5);
let val6= 2 ** -1;
console.log(val6);

//increment and decrement value

let val7 = 4;
val7++;
console.log(val7);

let val8 = 8;
val8+=10;
console.log(val8);


//assigment 
let val9 =8;
let val10 = val9++;
console.log(`${val9} ${val10}`); 

//comparison

let str1 = "Hello";
let str2 = "Hello";
console.log(str1 === str2); // true 

let obj1 = {};
let obj2 = {};
console.log(obj1 === obj2); // fallse because objects are passed as a reference and here both objects refer to different memory block

let obj3 = obj2;
console.log(obj3 === obj2);

// === checks both value and type
// == checks only value

console.log(42 == "42"); // true
console.log(42==="42"); // false

console.log(null == undefined); //true
console.log(null === undefined); //false
