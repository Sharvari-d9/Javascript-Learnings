const users = [
    {firstName:"Sharvari", lastName :"Dongre", age: 26},
    {firstName:"Cassablonka", lastName :"Pimpalapure", age: 27},
    {firstName:"Akshay", lastName :"Saini", age: 28},
    {firstName:"Don", lastName :"Lin", age: 26},
    {firstName:"Marry", lastName :"Nicholas", age: 28},
    {firstName:"Fizah", lastName :"K", age: 30}
]

//list of full names
// ["Sharvari Dongre","Cassablonka Pimpalapure","Akshay Saini"]

const output = users.map(x => x.firstName +" "+x.lastName);
console.log(output);

//age and number of people with that age
//reduce
//{26:2, 27:1, 28:2, 30:1}

const output2 = users.reduce(function(acc,curr){
if(acc[curr.age]){
acc[curr.age] = acc[curr.age] + 1;
}
else{
    acc[curr.age] = 1;
}
return acc;
},{});

console.log(output2);

//Filter firstname of all the people whose age is less than 28

const output3 = users.filter(x => x.age<28).map(x=>x.firstName);
console.log(output3);

const output4 = users.reduce(function(acc,curr){
    if(curr.age<28)
    acc.push(curr.firstName);
return acc;
},[]);
console.log(output4);