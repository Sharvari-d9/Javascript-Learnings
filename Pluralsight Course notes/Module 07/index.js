import employess from'./data.json' assert{type: 'json'}
import createPrompt from 'prompt-sync'
let prompt = createPrompt();

function getInput(promptText,validator, transformer){
    let value = prompt(promptText);
    if(validator && !validator(value)){
        console.error(`--Inalid input`);
        process.exit(1);
    }
    return value;
}

//Validator functions
const isStringInputValid = function(input){
    return(input)? true: false;
}

const isBooleanInputValid = function(input){
    return (input === "yes" || input === "no");
}

const isStartYearValid = function (input){
    let numValue = Number(input);
    if(!Number.isInteger(numValue)|| numValue < 1990 || numValue > 2023){
        return false;
    }
    return true;
}

const isStartMonthValid = function(input){
    let numValue = Number(input);
    if(!Number.isInteger(numValue) || numValue < 1 || numValue >12){
        return false;
    }
    return true;
}

const isStartDayValid = function(input){
    let numValue = Number(input);
    if(!Number.isInteger(numValue)|| numValue <1 || numValue > 31){
        return false;
    }
    return true;
}

function addEmployees(){
    let employee = {};

   console.log(`Add Employee ------------------`);
   console.log('');
   
   employee.firstName = getInput("First Name: ", isStringInputValid);
   employee.lastName  = getInput("Last Name: ", isStringInputValid);
   let startDateYear = getInput("Emplpoyee Start Year(1990-2023: ",isStartYearValid);
   let startDateMonth = getInput("Employee sart month Year: ",isStartMonthValid);
   let startDateDay = getInput("Enployee start Date Day(1-31",isStartDayValid);
   employee.startDate = new Date(startDateYear,startDateMonth,startDateDay);
   employee.isActive = getInput("Is employee active (yes or no): ",isBooleanInputValid); 
    // Output Employee JSON
    const json = JSON.stringify(employee, null, 2);
    console.log(`Employee: ${json}`);
}

// Applicatin execution 

const command = process.argv[2].toLowerCase();
switch(command){
    case 'list' :
        listEmployees();
        break;

    case 'add':
        addEmployees();
        break;
        
    default:
        console.log(`Unsupprted command. Exitig....`);
        process.exit(1);    
}