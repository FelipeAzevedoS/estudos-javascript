const timeInput = document.querySelector('#timeInput');
const timer = document.querySelector('#timer');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');
const chooseMinutes = document.querySelector('#chooseMinutes');

let currentTime;
let timerFunctionality;
let isRunning = false;

function timeStarter() {
    timerFunctionality = setInterval(() => {
        currentTime--;
        formatTime();
        if (currentTime <= 0) {
            clearInterval(timerFunctionality);
            isRunning = false;
            timer.textContent = 'END';
            timer.classList.add('end');
        };
    }, 1000);
    isRunning = true;
};
        
function inputToTime() {
    if (!timeInput.value || Number(timeInput.value) <= 0) return;
    clearInterval(timerFunctionality);

    timer.classList.remove('end');

    currentTime = Number(timeInput.value) * 60;
    formatTime();
    timeStarter();

    timer.classList.remove('hidden');
    timeInput.classList.add('hidden');
    chooseMinutes.classList.add('hidden');
    pause.textContent = 'Pause';
};

function formatTime () {
    
    let formattedMinutes = Math.floor(currentTime / 60);
    let formattedSeconds = currentTime % 60;

    timer.textContent = `${String(formattedMinutes).padStart(2, '0')}:${String(formattedSeconds).padStart(2, '0')}`;
};

function pauseTime () {
    if (isRunning) {
        clearInterval(timerFunctionality);
        pause.textContent = 'Restart';
        isRunning = false;
    } else {
        timeStarter();
        isRunning = true;
        pause.textContent = 'Pause';
    }
};

function resetTimer () {
    clearInterval(timerFunctionality);

    isRunning = false;
    timeInput.value = '';
    timer.classList.add('hidden');
    timeInput.classList.remove('hidden');
    chooseMinutes.classList.remove('hidden');
    timer.classList.remove('end');
    pause.textContent = 'Pause';
};

start.addEventListener ('click', inputToTime);
pause.addEventListener ('click', pauseTime);
reset.addEventListener ('click', resetTimer);