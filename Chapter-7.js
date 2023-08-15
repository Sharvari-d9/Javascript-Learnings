/**
 * Lexical environment
 * 
 * Scope is in order within functions
 * 
 * The whole process of finding the variable through the receursive chain is called as scope chain
 * local->local->....->global->null
 */

function a(){ //inside lexical environment of its parent i.e. GEC and has reference to it
    var x = 10;
    b();
    function b () // inside lexical environment of function and has reference to its parent function in its memory
    {
        // var x = 20;
        console.log(x); // first b() looks for x value in its own local memory. when not available goes to reference to parent function
    }    
}   // b() inside a() = closure b() has access to local and lexical environment of a()
a();

// Global execution context as well has reference to parent but it would null because there is no parent for it.