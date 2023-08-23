//Array 
const names = ["David","Sharvari","Cassa","Kim","Katie"];

//for-loop
for(let i =0; i<names.length;i++){
    console.log(`Name: ${names[i]}`);
}
// using a for.. of loop
for(let name of names){
    console.log(name);
}

//array of complex Objects

import employees from './data.json' assert{type : 'json'}
const employee = employees[0];
for(let property in employee){
    console.log(`${property} : ${employee[property]}`);
}


console.log(`
------------------
`);

// Bringing both approaches
for(let emp of employees){
    for(let property in emp){
        console.log(`${property}:  ${emp[property]}`);
    }
    console.log('--');
}


