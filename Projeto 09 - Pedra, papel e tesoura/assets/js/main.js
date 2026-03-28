const youScore = document.querySelector('#youScore');
const machineScore = document.querySelector('#machineScore');
const drawsScore = document.querySelector('#drawsScore');
const yourChoice = document.querySelector('#yourChoice');
const machineChoice = document.querySelector('#machineChoice');
const result = document.querySelector('#result');
const buttonRock = document.querySelector('#buttonRock');
const buttonPaper = document.querySelector('#buttonPaper');
const buttonScissors = document.querySelector('#buttonScissors');
let drawUpdate = 0;
let machineUpdate = 0;
let youUpdate = 0;

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

function play (playerChoice) {
    machineChoice.innerText = 'Machine choice:'
    yourChoice.innerText = 'Your choice:'
    result.innerText = '';
    result.className = '';
    const machineResult = machineOption();

    if (playerChoice === 'rock') {
        yourChoice.innerText += '🪨';
    } else if (playerChoice === 'paper'){
        yourChoice.innerText += '📄'
    } else if (playerChoice === 'scissors'){
        yourChoice.innerText += '✂️'
    }

    const winner = determineWinner(playerChoice, machineResult);
    updateScoreboard(winner);
};

function determineWinner (playerChoice, machineResult) {
    if(playerChoice === machineResult) {
        return 'draw';
    }
    if((playerChoice === 'rock' && machineResult === 'paper') || (playerChoice === 'paper' && machineResult === 'scissors') || (playerChoice === 'scissors' && machineResult === 'rock')) {
        return 'machineWin';
    }
    if((playerChoice === 'rock' && machineResult === 'scissors') || (playerChoice === 'paper' && machineResult === 'rock') || (playerChoice === 'scissors' && machineResult === 'paper')) {
        return 'playerWin';
    }
};

function updateScoreboard(winner) {

    if (winner === 'draw') {
        drawUpdate++;
        drawsScore.innerText = `Draws: ${drawUpdate}`;
        result.innerText = "It's a draw!";
        result.classList.add('draw');
    } else if (winner === 'machineWin') {
        machineUpdate++;
        machineScore.innerText = `Machine: ${machineUpdate}`;
        result.innerText = "You lose!";
        result.classList.add('lose');
    } else if (winner === 'playerWin') {
        youUpdate++;
        youScore.innerText = `You: ${youUpdate}`;
        result.innerText = "You win!";
        result.classList.add('win');
    }
};

buttonRock.addEventListener('click', () => play('rock'));

buttonPaper.addEventListener('click', () => play('paper'));

buttonScissors.addEventListener('click', () => play('scissors'));
