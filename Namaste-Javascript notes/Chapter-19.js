/**
 * map, filter & reduce
 */

const arr = [1,3,5,2,6];

// function binary(x)
// {
//     return x.toString(2);
// }

// const output = arr.map(function binary(x)
// {
//     return x.toString(2);
// }
// );

const output = arr.map((x)=> x.toString(2)); //arrow functionn
console.log(output);

/**
 * filter
 * used to filter out values in an array
 */

function isOdd(x){
    return x%2;
}
const output2= arr.filter(isOdd);

console.log(output2);

const output3= arr.filter(x=>x >4);
console.log(output3);

/**
 * Reduce
 * take elements of an array and find a single vaue for it
 */

function findSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum +arr[i];
    }
return sum;
}

console.log(`findsum ${findSum(arr)}`)
const output4 = arr.reduce(function(acc,curr){
acc = acc + curr;
return acc;
},0);
console.log(output4);

//Reduce Example - getmax from array
function findMax(arr){
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i])
        max = arr[i];
    }
return max;
}
console.log(findMax(arr));

const output5 = arr.reduce(function(max,curr){
    if(max<curr)
    max = curr;
   return max;
});

console.log(output5);