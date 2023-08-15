/**
 * setTimeout
 * 
 * it will keep the callback function with timout timer value somwhere and after timeout happens it will bring that function to execution.
 * Javascript doesnt wait instead moves to next line after call back is stored.
 */

function x(){
    // var i =1;
    for(let i =1;i<=5;i++)
    {
        
        function close(i){
            setTimeout(function (){
                console.log(i);
            },i*3000);
        }
        close(i);
    }
     // here the expectation is that 1 will printed and after 3 sec Namaste Javascript will be printed
            //but that doesnt happen.
    console.log("Namaste Javascript");
}
x();