//DOM Manipulation - Traverse the DOM

//Parent Node Traversal
let ul =  document.querySelector('ul');

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);


//Child Node Traversal

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement); // null because document node is not same as that of the element , hence mostly parentNode is preferred


//Child Node Traversal

console.log(ul.childNodes);
console.log(ul.childElementCount);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = 'purple';


console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

//sibling node traversal
const div = document
console.log(ul.nextSibling);
console.log(ul.previousSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
