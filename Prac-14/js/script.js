let startBtn = document.getElementById("startBtn");
let board = document.getElementById("board");
let timerDisplay = document.getElementById("timer");
let targetDisplay = document.getElementById("target");
let movesDisplay = document.getElementById("moves");
let timerInterval;
let boardSize = 5;
let moves = 0;

let levels = [];
let currentLevel = 0;

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        levels = data.levels;
    });

startBtn.addEventListener("click", function() {
    if (startBtn.textContent === "Start Game") {
        startGame();
    } else {
        newGame();
    }
});

function startGame() {
    startBtn.textContent = "New Game";
    moves = 0;
    movesDisplay.textContent = moves;

    loadLevel(currentLevel);
    
    timerDisplay.textContent = 0;
    startTimer();
}

function newGame() {
    currentLevel = (currentLevel + 1) % levels.length;
    loadLevel(currentLevel);

    moves = 0;
    movesDisplay.textContent = moves;
    timerDisplay.textContent = 0;
}

function loadLevel(level) {
    let matrix = levels[level].matrix;

    board.innerHTML = '';

    matrix.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            let cellElem = document.createElement('div');
            cellElem.classList.add('cell', cell === 1 ? 'on' : 'off');
            cellElem.addEventListener('click', function() {
                toggleCells(rowIndex, colIndex);
                moves++;
                movesDisplay.textContent = moves;

                if (checkWin(matrix)) {
                    clearInterval(timerInterval);
                    alert(`You won in ${moves} moves!`);
                    newGame();
                }
            });
            board.appendChild(cellElem);
        });
    });

    targetDisplay.textContent = levels[level].minSteps;
}

function toggleCells(row, col) {
    toggleCell(row, col);
    toggleCell(row - 1, col);
    toggleCell(row + 1, col);
    toggleCell(row, col - 1);
    toggleCell(row, col + 1);
}

function toggleCell(row, col) {
    if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
        let cellElem = board.children[row * boardSize + col];
        cellElem.classList.toggle('on');
        cellElem.classList.toggle('off');
    }
}

function checkWin(matrix) {
    return matrix.every(row => row.every(cell => cell === 0));
}

function startTimer() {
    let seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        timerDisplay.textContent = seconds;
    }, 1000);
}