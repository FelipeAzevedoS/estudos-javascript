const number = document.querySelector('#number');
const result = document.querySelector('#result');
const attemptNumber = document.querySelector('#attemptNumber');
const attempt = document.querySelector('#attempt');
const guess = document.querySelector('#guess');
const playAgain = document.querySelector('#playAgain');

let randomNum = Math.floor(Math.random() * 100) + 1;
number.innerText = randomNum;
console.log(randomNum);

function guessNumber () {
   if (attempt.value > randomNum) {
    result.innerText = 'Too high';
   } else if (attempt.value < randomNum) {
    result.innerText = 'Too low';
   } else {
    result.innerText = 'Correct!';
    result.classList.add('win');
   }
};

guess.addEventListener('click', function() {
    guessNumber();
});