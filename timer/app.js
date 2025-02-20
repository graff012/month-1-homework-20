let timer;
let seconds = 0;
let minutes = 0;
let running = false;

let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

function updateTimerDisplay() {
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      updateTimerDisplay();
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  minutes = 0;
  updateTimerDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

updateTimerDisplay();
