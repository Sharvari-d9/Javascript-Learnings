//creation

let arr1 = [];
console.log(typeof(arr1));
let arr2 = ["intem 1", "item 2"];
let arr3 = new Array();

let names = ["ert", "dce","dewe","r3d3d"];
console.log(names.length);

console.log(names[1]);

//Searching values
console.log(names.includes("ert")); // true
console.log(names.includes("Sharvari")); // false
console.log(names.indexOf("ert")); //0
console.log(names.indexOf("Sharvari"));// -1

//adding value at end
names.push("Dongre");
console.log(names); //['ert', 'dce', 'dewe', 'r3d3d', 'Dongre']

// adding value at the beginning
names.unshift("Sharvari");
console.log(names); // ['Sharvari', 'ert', 'dce', 'dewe', 'r3d3d', 'Dongre']

// adding to a specific index
names.splice(1,0, "Cassa");
console.log(names); // ['Sharvari', 'Cassa', 'ert', 'dce', 'dewe', 'r3d3d', 'Dongre']
names.splice(3,3,"new");
console.log(names); //['Sharvari', 'Cassa', 'ert', 'new', 'Dongre']

//removing at the beginning
names.shift(); 
console.log(names); //['Cassa', 'ert', 'new', 'Dongre']

//removing at specific index
names.splice(3,1);
console.log(names); //['Cassa', 'ert', 'new']

const obj1 = {
    firstName : "Sharvari",
    lastName : "Dongre"
}
const obj2 = {
    firstName : "Cassa",
    lastName : "P"
}
const obj3 = {
    firstName : "Sharvari",
    lastName : "Dongre"
}

const employees = [obj1, obj2];
console.log(employees.includes(obj3)); //false
console.log(employees.includes(obj1)); //true

