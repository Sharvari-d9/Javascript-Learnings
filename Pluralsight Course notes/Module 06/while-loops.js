//Array of complex objects
import employees from './data.json' assert {type : 'json'}

//Basic while loop
let i = 0;
while(employees[i]){
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
    i++;
}

console.log('------');
i =0;
do {
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
    i++;
}while(employees[i]);

/**
 * ------
while-loops.js:11
Name: Lamb Mcclain
while-loops.js:14
Name: Bridges Deleon
while-loops.js:14
Name: Livingston Richardson
while-loops.js:14
Name: Boone Carney
while-loops.js:14
Name: Rosella Noel
while-loops.js:14
Name: Katie Woodward
while-loops.js:14
Name: Dionne Larsen
while-loops.js:14
Name: Santos Oneal
while-loops.js:14
Name: Corine House
 */