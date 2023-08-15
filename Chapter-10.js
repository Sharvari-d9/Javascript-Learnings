/**
 * Closures in JS
 * 
 * functions along with its lexical scope together is called as closures.
 */
function x(){
    var a = 9;
    function y()
    {
        console.log(a);
    }
    var a = 100; // because of this statement value of a would be displayed 100 for console.log because the reference to the variable is store and not the value.
    return y;
}

var z = x(); // when y is returned here not only does it return the whole fnction but also its closure
            // thats z will know where to refer even after x will be deleted from the stack.
console.log(z); 
z(); // though x lexical context is over still z() will know where to take value of variable

/**
 * Uses of closures
 *  - Modular design
 *  - itereater 
 *  - once function implementation etc.
 */