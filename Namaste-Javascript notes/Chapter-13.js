/**
 * First class functions
 * 
 */

console.log(c);
a(); // will execute
// b(); // will throw error because in the start of the execution its an undefined variable which we cant execution as a function yet.
//Function statement
function a() // just defining the function is function statement here //also called function declaration
{
    console.log("a called");
}

var c= 5;
//Function Expression
var b = function() // we can assign the complete function to a variable
{
    console.log("b called");
}

//Anonymous function
//anonymous functions are used when assigning a function to a variable but just in function statement it cant be without a functin name

/*function (){
}*/

//Named function expression

var nfe = function xyz(){
    console.log("xyz function");
}
nfe();
// xyz(); // this will throw error because xyz doesnt exist on its own.

//difference between parameters and arguments
function demo(param1){ //param1 and param2 are the parameters here. the labels which get their value from the arguments that will be passed in the function call
    console.log(`Param1 : ${param1}`);
    // console.log(`Param2 : ${param2}`);
}

demo(7); // Values passed here are arguments

//First Class Functions

function passedfunc()
{
 return function(){}
}

var getfunc = demo(passedfunc);
console.log(getfunc);
/**
 * also called as first class citizen
 * Here the ability to pass a function as an argument, have a function as a parameter or return a function as well is called as first class function
 */

//Arrow Functions
//will be covered separately