/**
 * 
 */

let date1 = new Date("2023-02-23T14:23:02-05:00");
console.log(`Date 1 : ${date1}`); 

//Dispaly just the calendar date
console.log(`Calendar Date : ${date1.toDateString()}`);

// display locale-specific date string
console.log(`Locale en-US: ${date1.toLocaleDateString('en-US')}`);

console.log(`Locale hi-IN: ${date1.toLocaleDateString('hi-IN')}`);

//dispay just the time
console.log(`Date Time: ${date1.toTimeString()}`);

//Display a locale-specific time string
console.log(`Locale en-US: ${date1.toLocaleTimeString('en-US')}`);

console.log(`Locale hi-IN: ${date1.toLocaleTimeString('hi-IN')}`);

//Custom date string
let options = {
    dateStyle : "short",
    timeStyle : "short"
};
console.log(`Custom Date : ${date1.toLocaleString('en-US',options)}`);
console.log(`Custom Date : ${date1.toLocaleString('ar-KW',options)}`);

