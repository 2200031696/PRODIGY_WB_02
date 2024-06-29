// script.js

let startTime = 0;
let elapsedTime = 0;
let intervalId;
let isRunning = false;

const timeDisplay = document.getElementById('timeDisplay');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');


startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);


function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 10);
        isRunning = true;
    }
}

function pause() {
    if (isRunning) {
        clearInterval(intervalId);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(intervalId);
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    timeDisplay.textContent = '00:00:00';
    laps.innerHTML = '';
}



function updateTime() {
    elapsedTime = Date.now() - startTime;
    const time = new Date(elapsedTime);
    const minutes = time.getUTCMinutes().toString().padStart(2, '0');
    const seconds = time.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = Math.floor(time.getUTCMilliseconds() / 10).toString().padStart(2, '0');

    timeDisplay.textContent = `${minutes}:${seconds}:${milliseconds}`;
}
