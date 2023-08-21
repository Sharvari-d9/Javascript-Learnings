/**
 * 
 */

let employee = {
    firsstName : "David",
    lastName : "Tucker",
    startDate: new Date(2016, 1, 3),
    numYearsService : 7,
    department : "Engineering",
    title:"VP Engineering",
    isActive: true,
};

let badgeColor;
if (employee.numYearsService < 5){
    employee.badgeColor = "blue";
}
else if(employee.numYearsService < 10){
    employee.badgeColor = "yellow";
}
else if(employee.numYearsService <15){
    employee.badgeColor = "red";
}
else if(employee.badgeColor < 20){
    employee.badgeColor = "purple";
}
else{
    employee.badgeColor = "silver";
}

console.log(`years: ${employee.numYearsService} Bage Color : ${employee.badgeColor}`);