//Map - used to store key value pair, and remembers the oder of insertion

const obj1 = {
    firstName : "Sharvari",
    lastName : "Dongre"
};
console.log(obj1);

// creating a AMp
const map1 = new Map();
map1.set("firstName", "Sharvari");
map1.set("lastName", "Dongre");

console.log(map1);

//Using Non-string keys
map1.set(new Date().getTime(),"Number key");
console.log(map1);

map1.set([],"array key");
map1.set(()=> "Hi", "function key");
console.log(map1); //Map(5) {size: 5, firstName => Sharvari, lastName => Dongre, 1692785155060 => Number key, (0) [] => array key, ()=> "Hi" => function key}

//Checking the size 
console.log(map1.size);

//accessing values
console.log(map1.get("lastName"));
console.log(map1.get([]));

//deleting values
map1.delete("firstName");
console.log(map1.size); //4 

// creating set

const set1 = new Set();

set1.add("Sharvari");
console.log(set1.size);

set1.add("Sharvari");
console.log(set1);

const team1 = new Set();
const emp1 = {
    firstName : "Sharvari",
    lastName : "Dongre"
};

set1.add(emp1);
console.log(set1);

console.log( set1.has(emp1));
set1.delete(emp1);
console.log(set1);

set1.clear();
console.log(set1);