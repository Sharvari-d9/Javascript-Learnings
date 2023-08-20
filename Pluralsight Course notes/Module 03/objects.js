let obj1 = {};

let obj2 = new Object();

obj1.firstName = "Sharvari";
obj1.lastName = "Dongre";
obj1.isActive = true;
obj1.startDate = new Date("January 1, 2023");
obj1.vacationDays= 14;
console.log(obj1); 

let obj3 = {
    firsstName : "David",
    lastName : "Tucker",
    isActive: true,
    startDate: new Date("January 1, 2023"),
    vacationDays : 14
}
console.log(obj3);

//accesssing properties from an object
console.log(`First name ${obj3.firsstName}`);
console.log(`Last Name : ${obj3["lastName"]}`);

//deleting properties from an object
delete obj3.firsstName;
console.log(obj3);

//Accessing a property that doesnt exist
console.log(obj3.middleName);

//Objects passed by reference, not values
let obj4 = obj3;obj4.lastName = "Dongre Pimpalapure"
console.log(obj4);