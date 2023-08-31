//DOM Manipulation

//GetElementbyId()

const title = document.getElementById('main-heading');

console.log(title);

//getElementByClassName()

const listItem = document.getElementsByClassName('list-items');
console.log(listItem);

//getElementByTagNAme()

const taglistItem = document.getElementsByTagName('li');
console.log(taglistItem);

//querySelector()

const container = document.querySelector('div');
console.log(container);

//querySelectorAll()
//querySelector will only choose first div if there are multiple divs , in that case we use this 

const container_all = document.querySelectorAll('div');
console.log(container_all);
