//Supported features for class
/**
 * classses are built on prototypes
 * Constructors
 * Static initialization blocks
 * public methods and fields
 * statc methods and fields
 * private methods and fields Inheritances
 * 
 */

class CalendarDay{

    //private fields
    #month;
    #day;
    #year;
    //constructor
    constructor (year,month,day){
        this.month = month;
        this.day = day;
        this.year = year
    }
    //Public method(

    toString()
    {
        return `${this.year}-${this.month+1}-${this.day}`;
    }
}

let day1 =new CalendarDay(2023,0,1);
console.log(day1.toString());