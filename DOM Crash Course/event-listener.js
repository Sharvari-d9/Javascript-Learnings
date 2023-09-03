// //Event Listerners

// //element.addEventListener("click",function,Boolean);


// const buttonTwo = document.querySelector('.btn-2');

// function alertBtn(){
//     alert('I also love Javascript');
// };

// // buttonTwo.addEventListener("click",alertBtn);

// //Mouseover

// const newBgColor = document.querySelector('.box-3');

// function changeBgColor(){
//     newBgColor.style.backgroundColor = 'purple'; 
// }

// newBgColor.addEventListener("mouseover",changeBgColor);

//Reveal Event

const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent(){
    if(hiddenContent.classList.contains('reveal-btn'))
    {
        hiddenContent.classList.remove('reveal-btn');
    }
    else{
        hiddenContent.classList.add('reveal-btn');
    }
}

revealBtn.addEventListener('click',revealContent);