/**
 * Callback functions & Event listener
 * Javascript has a main thread and single stack
 * 
 * one should never block the main thread. JS is a synchronus running application.
 * hence for any function that is going to take too much time should be added as callback for example setimout so that main thread doesnot get blocked.
 */
setTimeout(function(){ //callback is used here to give the asynchronous behaviour, where the function will be executed after 5000 ms.
console.log("Timer");
},5000)

function x(y){
console.log("x");
y();
}

x(function y(){
    console.log("y");
}) // here y is the callback function. now the responsibility of running the function y is given x. it can be caled later anywhere in the code


//Event listener
function attachEventLister(){
    let count = 0;
    document.getElementById("clickMe")
.addEventListener("click",function xyz(){
    console.log("Button CLicker", ++count);
})
}

attachEventLister()