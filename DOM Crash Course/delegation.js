//Event Delegation

// document.querySelector('#football').addEventListener('click',function(e){
//     console.log('football is clicked');
//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey';
//     }
// });

//delegating to the parent

document.querySelector('#sports').addEventListener('click',function(e){
console.log(e.target.getAttribute('id') + ' Clicked!');
const target = e.target;
if(target.matches('li')){
    target.style.backgroundColor = 'lightgrey';
}
});

const sports = document.querySelector('#sports');

const newSport = document.createElement('li');

newSport.innerText = 'Volleyball';
newSport.setAttribute('id','volleyball');
sports.appendChild(newSport);