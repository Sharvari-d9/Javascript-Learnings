var a;
console.log(a);

/**
 * OUTPUT:
 * undefined because when var a was created some memory was allocated to it, 
 * even though there is no value assigned to yet
 */

a = 100;
console.log(a);
a = 'This is string';
console.log(a);

/**
 * Loosely-typed language as same a variable can hold an integer and then a string too.
 * Flexible 
 */

var b = undefined // Syntactically correct but not a good practice, hence never to do this to avoid any confusions
