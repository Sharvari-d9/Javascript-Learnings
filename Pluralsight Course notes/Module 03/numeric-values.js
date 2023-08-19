/**
 * Javascript properties
 * - Dynamic typing - variables are not directly associated with any particular type
 *
 */

/**
 * Storing numeric values
 */

let num1 = 6;
let num2 = -19000000000000796856500;

console.log(num1);
console.log(num2); //-1.9000000000000795e+22

let num3 = 1.2e+10;
console.log(num3); //12000000000

console.log(`Minimum Value : ${Number.MIN_VALUE}`);
console.log(`Minimum Safe Integer : ${Number.MIN_SAFE_INTEGER}`);
console.log(`Maximum Value : ${Number.MAX_VALUE}`);
console.log(`Maximum Safe Integer : ${Number.MAX_SAFE_INTEGER}`);

// Minimum Value : 5e-324
// Minimum Safe Integer : -9007199254740991
// Maximum Value : 1.7976931348623157e+308
// Maximum Safe Integer : 9007199254740991

//BigInt is a new addition
let bigInt1 = 1n;
let bigInt2 = 1_560_000_000_000_000_000_000n;
console.log(bigInt1);
console.log(bigInt2);