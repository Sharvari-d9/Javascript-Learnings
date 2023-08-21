
const isTruthy = (name,exp) => {
    console.log(`${name} : ${Boolean(exp)}`);
}

isTruthy("val1", 0);
isTruthy("val2", 1);
isTruthy("val3", -1);
isTruthy("val4", NaN);
isTruthy("val5", 0n);
isTruthy("val6",undefined);
isTruthy("val7",null);
isTruthy("val8",false);

isTruthy("val9","");
isTruthy("val10","Hi");
isTruthy("val11","false");

isTruthy("val12", {});

let var1;
isTruthy("var1",var1);

/**
 * OUTPUT
 * val1 : false
falsy.js:3
val2 : true
falsy.js:3
val3 : true
falsy.js:3
val4 : false
falsy.js:3
val5 : false
falsy.js:3
val6 : false
falsy.js:3
val7 : false
falsy.js:3
val8 : false
falsy.js:3
val9 : false
falsy.js:3
val10 : true
falsy.js:3
val11 : true
falsy.js:3
val12 : true
falsy.js:3
var1 : false
 */