const youScore = document.querySelector('#youScore');
const machineScore = document.querySelector('#machineScore');
const drawsScore = document.querySelector('#drawsScore');
const yourChoice = document.querySelector('#yourChoice');
const machineChoice = document.querySelector('#machineChoice');
const result = document.querySelector('#result');
const buttonRock = document.querySelector('#buttonRock');
const buttonPaper = document.querySelector('#buttonPaper');
const buttonScissors = document.querySelector('#buttonScissors');

const machineOptions = ['rock', 'paper', 'scissors'];

function machineOption () {
    let result = machineOptions[Math.floor(Math.random() * 3 )];
    if (result === 'rock') {
    machineChoice.innerText += '🪨';
    } else if (result === 'paper'){
        machineChoice.innerText += '📄';
    } else if (result === 'scissors') {
        machineChoice.innerText += '✂️';
    }
    return result;
};

buttonRock.addEventListener('click', function() {
    machineChoice.innerText = 'Machine choice:'
    yourChoice.innerText = 'Your choice:'
    const machineResult = machineOption();

    yourChoice.innerText += '🪨';
});

buttonPaper.addEventListener('click', function() {
    machineChoice.innerText = 'Machine choice:'
    yourChoice.innerText = 'Your choice:'
    const machineResult = machineOption();

    yourChoice.innerText += '📄';
});

buttonScissors.addEventListener('click', function() {
    machineChoice.innerText = 'Machine choice:'
    yourChoice.innerText = 'Your choice:'
    const machineResult = machineOption();

    yourChoice.innerText += '✂️';
});
