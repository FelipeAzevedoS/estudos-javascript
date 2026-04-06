const number = document.querySelector('#number');
const result = document.querySelector('#result');
const attemptNumber = document.querySelector('#attemptNumber');
const attempt = document.querySelector('#attempt');
const guess = document.querySelector('#guess');
const playAgain = document.querySelector('#playAgain');

let randomNum = Math.floor(Math.random() * 100) + 1;
number.innerText = randomNum;
let attemptCounter = 0;

function validateNumber () {
    if (attempt.value === '' || isNaN(Number(attempt.value))) {
        result.innerText = 'Insert a number';
        return false;
    }
    return true;
};

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

function disableElements () {
    if (Number(attempt.value) === randomNum) {
        attempt.disabled = true;
        guess.disabled = true;
    }
};

function play () {
    if(!validateNumber()) return;
    attemptCounter++;
    attemptNumber.innerText = attemptCounter;
    guessNumber();
    disableElements();
}

function resetGame () {
    randomNum = Math.floor(Math.random() * 100) + 1;
    attemptCounter = 0;
    attemptNumber.innerText = '';
    attempt.value = '';
    result.innerText = '';
    result.classList.remove('win');
    attempt.disabled = false;
    guess.disabled = false;
};

guess.addEventListener('click', play);

playAgain.addEventListener('click', resetGame);