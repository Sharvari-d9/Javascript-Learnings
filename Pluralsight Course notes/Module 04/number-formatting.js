/**
 * locale - parameters that define users language, region and any special variant
 * ex language code, contry region code
 * 
 * ex : en-US
 * hi-IN 
 */

//Rounding number to an integer

let num1 = 5.618345;
console.log(typeof(num1));
console.log(`Round: ${Math.round(num1)}`);
console.log(`Ceiling: ${Math.ceil(num1)}`);
console.log(`Floor: ${Math.floor(num1)}`);

//fixed

let fixed = num1.toFixed(3);
console.log(`Fixed Type: ${typeof(fixed)} Fixed Value: ${fixed}`);

//display locale specific format
let num2 = 1_000_000;
console.log(`USA: ${num2.toLocaleString('en-US')}`); // USA: 1,000,000
console.log(`India : ${num2.toLocaleString('hi-IN')}`); //India : 10,00,000

// currency format

let salary = 100000;
let monthlySalary = salary / 12;
console.log(`Monthly Salary: ${monthlySalary.toFixed(2)}`);

let formatter1 = new Intl.NumberFormat('en-US',{style : 'currency', currency : 'USD'});
console.log(`US Dollars: ${formatter1.format(monthlySalary)}`);

let formatter2 = new Intl.NumberFormat('de-DE',{style : 'currency', currency : 'EUR'});
console.log(`Euros : ${formatter1.format(monthlySalary)}`);

let formatter3 = new Intl.NumberFormat('ja-JA',{style : 'currency', currency : 'JPY'});
console.log(`Yen: ${formatter1.format(monthlySalary)}`);

let formatter4 = new Intl.NumberFormat('zh-HK',{style : 'currency', currency : 'HKD'});
console.log(`Hong Kong Dollars: ${formatter1.format(monthlySalary)}`);