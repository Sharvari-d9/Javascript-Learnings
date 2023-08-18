/**
 * Higher Order Functions 
 * functional programming
 *  
 * function that calls a function or pass a function as an argument is called as higher order function
 * 
 */

// function x(){
//     console.log("Namaste");
// }

// function y(x){
//     x();
// }
// y(x);

const radius = [3,1,2,4];

const area = function(radius){
    return Math.PI*radius*radius;
}

const circumference = function(radius){
    return Math.PI*radius*2;
}

const diameter = function(radius){
    return 2 * radius;
}

Array.prototype.calculate = function (logic){ //generic function which can take any logic and input and provide output
const output = [];                         //no need to write similar code repeatedly , try to make it modular and reusable
for(let i =0;i<this.length;i++)
    {
        output.push(logic(this[i]));
    }
    return output;
};  //calculate function is higher order function here , area or diameter are callback function

console.log(radius.map(area));

// console.log(calculate(radius,area));

console.log(radius.calculate(area));


// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));