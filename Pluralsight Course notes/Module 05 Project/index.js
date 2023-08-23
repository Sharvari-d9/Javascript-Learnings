import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let employee ={};
let firstName = prompt("First NAme: ");

if(!firstName){
    console.error(`Invalid first name`);
    process.exit(1);
}

employee.firstName = firstName;

let lastName = prompt("Last Name: ");

if(!lastName){
    console.error(`Invalid Last name`);
    process.exit(1);
}

employee.lastName = lastName;

let startDateYEar = prompt("Employee start year (1990-2023): ");
startDateYEar = Number(startDateYEar);

if(!Number.isInteger(startDateYEar)){
    console.error(`Enter a valid start date year'`);
    process.exit(1);
}
 
if(startDateYEar<1990 || startDateYEar >2023){
console.error(`Enter a start date year within the correct range`);
process.exit(1);
}

let startDateMonth = prompt("Employee start date monyh (1-12): ");
startDateMonth= Number(startDateMonth);

if(!Number.isInteger(startDateMonth)){
    console.error(`Enter a valid start dtae month`);
    process.exit(1);
}

if(startDateMonth<1 || startDateMonth >12){
    console.error(`Enter a start dtae within the range (1-12)`);
    process.exit(1);
}
    employee.startDate = new Date(startDateYEar,startDateMonth,9);
    let isActive = prompt(`Is employee active (yes or No): `);
 
employee.isActive = (isActive === "yes");

const json = JSON.stringify(employee,null,2);
console.log(`Employee ; ${json}`);