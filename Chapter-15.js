/**
 * Asynchronous Javascript & Event Loop
 * 
 * Anything put inside a call stack will be executed in that instant. JS will wait for none.
 * 
 * Timers allow to execute some functions after sometime. which wont be possible by the call stack as it executes whatever is pushed to it.
 * 
 * Browser has JS engine inside it.
 * It then has call stack inside it. browser can have a local storage and a timer etc.
 * 
 * To communicate between all this we have web APIs.
 * 
 * Browser has all the superpowers.js engines gets access to all these super powers in the call stack by global variable window.
 * and the superpowers are available through APIs.
 * 
 */

//PART 1
console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
},5000);

console.log("End");

/**
 *  So when setTimeout sets the function cb() aside the work to bring it back
 * when the timer runs out is done by the callback queue. 
 * When the timer runs out the function is added in the callback queue and
 * event loop is run which is then responsible for taking this cb() func from the callback 
 * queue to call stack. from where it will then be executed.
 */

//PART 2

console.log("Start");
document.getElementById("btn").addEventListener("click",function cb(){
    console.log("Callabck");
});
console.log("End");

/**
 * document object model |DOM APIs
 * cb() method is registered as callback when addEventListener is encountered in the code and it is attached with the event detail
 * It is registered in the web API eßnvironment
 * so when the user clicks on the button the callback function is pushed to the
 * call back queue 
 */

/**
 * Event Loop - only job is to monitor the call stack ad callback queue
 * it schedules the jobs
 */

//PART 3
console.log("Start");

setTimeout(function cbT(){
    console.log("CB SetTimeout");
},5000);

fetch("https://api.netflix.com").then(function cbf(){
    console.log("CB Netflix");
});

console.log("End");

/**
 * Micro-task queue with higher priority
 * - cbf - will go to micro-task queue
 * so cbt moves to callback queue
 * and cbf moves to micro-task queue
 * 
 * in above cbf has higher priority. if both cbf() and cbt() are in their respective queses
 * cbf() will be picked up by event loop before than the cbt()
 * 
 * all tasks that go from fetch call goes to higher priority 
 * queue
 * 
 * mutation observer -? 
 * 
 * callback queue = task queue
 * 
 */