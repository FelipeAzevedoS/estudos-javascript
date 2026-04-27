const timeInput = document.querySelector('#timeInput');
const timer = document.querySelector('#timer');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');
const chooseMinutes = document.querySelector('#chooseMinutes');

let currentTime;
let timerFunctionality;
        
function inputToTime() {
    clearInterval(timerFunctionality);
    timer.classList.remove('end');

    currentTime = Number(timeInput.value) * 60;
    formatTime();
    timerFunctionality = setInterval(() => {
        currentTime--;
        formatTime();
        if (currentTime <= 0) {
            clearInterval(timerFunctionality)

            timer.textContent = 'END';
            timer.classList.add('end');
        };
    }, 1000);

    timer.classList.remove('hidden');
    timeInput.classList.add('hidden');
    chooseMinutes.classList.add('hidden');
    
};

function formatTime () {
    
    let formatedMinutes = Math.floor(currentTime / 60);
    let formatedSeconds = currentTime % 60;

    timer.textContent = `${String(formatedMinutes).padStart(2, '0')}:${String(formatedSeconds).padStart(2, '0')}`;
};

start.addEventListener ('click', inputToTime);