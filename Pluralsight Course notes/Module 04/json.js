/**
 * JSON is just a string
 * 
 *Looks similar to javascript object but few difference in syntax and some limitations
 */

let employee = {
    firsstName : "David",
    lastName : "Tucker",
    birthdate: new Date("January 1, 2023"),
    numYearsEmployment : 7,
    department : "Engineering",
    title:"CTO",
    isActive: true,
    salary : 10000,
};
// convert JSON to String
let jsonValue =  JSON.stringify(employee);
console.log(jsonValue);
jsonValue = JSON.stringify(employee,null,2);
console.log((jsonValue));

//convert value back to object

let newEmp = JSON.parse(jsonValue);
console.log(newEmp);
console.log(typeof(newEmp));

//writing JSOn Directly
let jsonString = `{
    "firstName" : "Sharvari",
    "lastName" :  "Dongre"
}`

console.log(jsonString);
console.log(typeof(jsonString));

let obj = JSON.parse(jsonString);
console.log(obj);