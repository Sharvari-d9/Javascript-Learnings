/** Loop control with break and continue */


import employees from './data.json' assert{type : 'json'}

for(let i = 0 ; i <employees.length; i++){
    if(i===5){
        break;
    }
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
}

console.log('------');

//Searching only for the first names start with 'B'
for (let emp of employees){
    if(!emp.firstName.startsWith('B')){
        continue;
    }
    console.log(`Name: ${emp.firstName} ${emp.lastName}`);
}

//Nested loop control flow
employee: for(let emp of employees){ //adding label
    for(let property in emp){
        if(property === "dateBirth"){
            continue employee; // this way utilising label we can control the flow to a particular line
        }
        console.log(`${property}:  ${emp[property]}`);
    }
    console.log('--');
} 


