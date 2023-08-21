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

switch(employee.department){
    case 'Engineering' :
        console.log('Meet in Building 1');
        break;
    
    case 'Marketing' :
        console.log('Meet in Building 2');
        break;
            
    case 'HR' :
        console.log('Meet in Building 1');
        break;
    default :
    console.log('Meet in Building 3');
    break;
}


