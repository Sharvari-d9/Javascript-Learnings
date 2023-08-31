//DOM Manipulation

const title =document.querySelector('#main-heading');
title.style.color = "red";
console.log(title);

const listITems = document.querySelectorAll('.list-items');
// listITems.style.fontSize = '2rem'; // this wont work

for(i=0;i<listITems.length;i++)
{
    listITems[i].style.fontSize = "5rem"; 
    listITems[i].style.color = "white";
}
console.log(listITems);
