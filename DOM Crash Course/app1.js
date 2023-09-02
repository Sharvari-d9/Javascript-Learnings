//DOM Manipulation

//styling elements

const title =document.querySelector('#main-heading');
// title.style.color = "red";
console.log(title);

// const listITems = document.querySelectorAll('.list-items');
// // listITems.style.fontSize = '2rem'; // this wont work

// for(i=0;i<listITems.length;i++)
// {
//     listITems[i].style.fontSize = "5rem"; 
//     listITems[i].style.color = "white";
// }
// console.log(listITems);


//Creating elements

const ul = document.querySelector('ul');

const li = document.createElement('li');

//Adding elements and modifying the text

ul.append(li);
li.innerText = 'x-men';
//modifying attributes and classes

// li.setAttribute('id','main-heading');
// li.removeAttribute('id');

console.log(title.getAttribute('id'));

const firstList =  document.querySelector('.list-items');


console.log(firstList.innerText);
console.log(firstList.textContent);
console.log(firstList.innerHTML); // has security issue , not recommended to use as tags are visible


// using classes

li.classList.add('list-items');
// li.classList.remove('list-items');

console.log(li.classList.contains('list-items'));

li.remove();