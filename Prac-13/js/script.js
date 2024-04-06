let square = document.getElementById("square");
let colorSelect = document.getElementById("color");
let difficultySelect = document.getElementById("difficulty");
let startBtn = document.getElementById("startBtn");
let scoreDisplay = document.getElementById("scoreValue");
let timeLeftDisplay = document.getElementById("timeLeft");
let score = 0;
let timeLeft;
let timerInterval;
let gameInterval;
let gameArea = document.getElementById("gameContainer");
let clickSquareOnceFlag = false;

startBtn.addEventListener("click", startGame);

function startGame() {
    let color = colorSelect.value;
    let difficulty = difficultySelect.value;

    document.getElementById("settings").style.display = "none";

    square.style.backgroundColor = color;

    square.style.display = "block";

    if (!clickSquareOnceFlag) {
        square.addEventListener("click", clickSquareOnce);
        clickSquareOnceFlag = true;
    }


    timeLeftDisplay.textContent = timeLeft;

    timerInterval = setInterval(updateTimer, 1000);
}
А
function clickSquareOnce() {
    score++;
    scoreDisplay.textContent = score;

    moveSquare();

    clearInterval(timerInterval);
    switch (difficultySelect.value) {
        case "easy":
            timeLeft = 2.7;
            break;
        case "medium":
            timeLeft = 1.7;
            break;
        case "hard":
            timeLeft = 1;
            break;
    }
    timeLeftDisplay.textContent = timeLeft;
    timerInterval = setInterval(updateTimer, 1000);
}

function moveSquare() {
    let maxX = gameArea.clientWidth - square.offsetWidth;
    let maxY = gameArea.clientHeight - square.offsetHeight;

    let newX = Math.floor(Math.random() * maxX);
    let newY = Math.floor(Math.random() * maxY);

    square.style.left = newX + "px";
    square.style.top = newY + "px";
}

function updateTimer() {
    timeLeft -= 1;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
    } else {
        timeLeftDisplay.textContent = timeLeft.toFixed(1);
    }
}

function endGame() {
    clearInterval(timerInterval);
    square.style.display = "none";
    alert("Game over! Your score: " + score);
    resetGame();
}

function resetGame() {
    document.getElementById("settings").style.display = "block";

    score = 0;
    scoreDisplay.textContent = score;
    timeLeft = "";
    timeLeftDisplay.textContent = timeLeft;

    clickSquareOnceFlag = false;
}
