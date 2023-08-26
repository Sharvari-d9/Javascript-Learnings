import employess from'./data.json' assert{type: 'json'}
import createPrompt from 'prompt-sync'
let prompt = createPrompt();

const logEmployee = (employee) => {
    Object.entries(employee).forEach(entry =>{
        console.log(`${entry[0]} : ${entry[1]}`)
    });
}

function getInput(promptText,validator, transformer){
    let value = prompt(promptText);
    console.log(validator);
    if(validator && ! validator(value)){
        console.error(`--Invalid input`);
        // process.exit(1);
        //using recursion to get input again and again till a valid input is entered
        return getInput(promptText,validator,transformer);
    }
    if(transformer){ // a complete arrow function is passed here and then we pass the value as parameter for i in the arrow function
        return transformer(value);
    }
    return value;
}

//transformer function
// const trasformBoolean = (input) =>{
//     return(input === "yes");
// }

//Validator functions
const isStringInputValid = function(input){
    return(input)? true: false;
}

const isBooleanInputValid = function(input){
    return (input === "yes" || input === "no");
}

// const isStartYearValid = function (input){
//     let numValue = Number(input);
//     if(!Number.isInteger(numValue)|| numValue < 1990 || numValue > 2023){
//         return false;
//     }
//     return true;
// }

// const isStartMonthValid = function(input){
//     let numValue = Number(input);
//     if(!Number.isInteger(numValue) || numValue < 1 || numValue >12){
//         return false;
//     }
//     return true;
// }

// const isStartDayValid = function(input){
//     let numValue = Number(input);
//     if(!Number.isInteger(numValue)|| numValue <1 || numValue > 31){
//         return false;
//     }
//     return true;
// }
/**
 * converting these above 3 similar validator function to one using higher order functions
 */
const isIntegerValid = (min,max) =>{
    return (input) => {
        let numValue = Number(input);
        if(!Number.isInteger(numValue)|| numValue <min || numValue > max){
            return false;
        }
        return true;
    }

}
// execution Functions
function searchByName(){
    const emp_name = getInput("Enter First name: ").toLowerCase();
    const lastNameSearch = getInput("Enter Last Name: ").toLowerCase();
    const result = employess.filter(e=> { //used to filter the array

        if(emp_name && !e.firstName.toLowerCase().includes(emp_name)){
            return false
        };
        if(lastNameSearch && !e.lastName.toLowerCase().includes(lastNameSearch)){
            return false;
        };
        return(true);
    });
        result.forEach((e,idx) => {
            console.log("");
            console.log(`Search Result ${idx +1} -------------------------`);
            logEmployee(e);
        });

  }

function searchById(){  
    const id = getInput("Employee Id: ", null, Number);
    const result = employess.find(e=> e.id ===id); //using find function for arrays
    if(result){
        console.log("");
        logEmployee(result);
    }else{
        console.log("No results...");
    }
}

function addEmployees(){
    let employee = {};

   console.log(`Add Employee ------------------`);
   console.log('');
   
   employee.firstName = getInput("First Name: ", isStringInputValid); //passing the prompt and whole function (not calling the function)
   employee.lastName  = getInput("Last Name: ", isStringInputValid);
   let startDateYear = getInput("Employee Start Year(1990-2023: ",isIntegerValid(1990,2023));
   let startDateMonth = getInput("Employee sart month Year: ",isIntegerValid(1,12));
   let startDateDay = getInput("Employee start Date Day(1-31): ",isIntegerValid(1,31));
   employee.startDate = new Date(startDateYear,startDateMonth,startDateDay);
   employee.isActive = getInput("Is employee active (yes or no): ",isBooleanInputValid,i => (i==="yes")); //inline arrow function (compact way to have function), we dont even need () function paranthesis if there is a single parameter
    // Output Employee JSON
    const json = JSON.stringify(employee, null, 2);
    console.log(`Employee: ${json}`);
}

function listEmployees(){
    console.log('Employee List ----------------------');
    console.log('');
    employess.forEach(e=>{
        logEmployee(e);
        prompt('Press enter to continue....');
    });
    console.log(`Employee list completed`);
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

    case 'search-by-id':
        searchById();
        break;
    
    case 'search-by-name':
        searchByName();
        break;
        
    default:
        console.log(`Unsupported command. Exiting....`);
        process.exit(1);    
}