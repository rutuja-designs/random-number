let Number = document.getElementById('num');
const Button = document.getElementById('btn');


Button.addEventListener('click',() => {
   let randomNumber = Math.floor(Math.random() * 100) +1;
   num.innerText = randomNumber;

});



