//creating dates

let date1 = new Date("2023-01-01");
console.log(date1); //Sun Jan 01 2023 05:30:00 GMT+0530 (India Standard Time)

let date2 = new Date("January 1, 2023");
console.log(date2); //Sun Jan 01 2023 00:00:00 GMT+0530 (India Standard Time)

let date3 = new Date();
console.log(date3); //Sun Aug 20 2023 03:13:33 GMT+0530 (India Standard Time)

let date4 = new Date("2023-01-01T02:30:04.312-05:00");
console.log(date4);

let date5 = new Date(2023, 0, 1, 2, 30, 4);
console.log(date5); 

//Accessing elements from date 

console.log(`Full Year: ${date5.getFullYear()}`);
console.log(`Month (zero-indexed) : ${date5.getMonth()}`);
console.log(`Day of month: ${date5.getDate()}`);
console.log(`Hours: ${date5.getHours()}`);

//Miliseconds from epoch

console.log(`Time: ${date5.getTime()}`);
let date6 = new Date(0);
console.log(date6.toUTCString());
