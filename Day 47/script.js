let startStopBtn = document.getElementById("startStop");
let resetBtn = document.getElementById("reset");
let display = document.getElementById("display");

let intervalId;
let elapsedTime = 0;
let running = false;

startStopBtn.addEventListener("click", function () {
    if (running) {
        clearInterval(intervalId);
        startStopBtn.textContent = "Start";
    } else {
        intervalId = setInterval(updateDisplay, 1000);
        startStopBtn.textContent = "Stop";
    }
    running = !running;
});

resetBtn.addEventListener("click", function () {
    clearInterval(intervalId);
    elapsedTime = 0;
    display.textContent = "00:00:00";
    startStopBtn.textContent = "Start";
    running = false;
});

function updateDisplay() {
    elapsedTime++;
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;

    display.textContent =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}
