const container = document.getElementById("container");

const DEFAULT_GRID_SIZE = 16;

function makeGrid(rows, cols) {
    container.style.setProperty("--num-rows", rows);
    container.style.setProperty("--num-cols", cols);

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.backgroundColor = "white";
        cell.style.width = container.clientWidth / cols;
        cell.style.height = container.clientHeight / rows;

        container.appendChild(cell);
    }
}

function draw() {
    const allCells = document.querySelectorAll(".cell");
    allCells.forEach(cell => cell.addEventListener("mouseover", function() {
        this.style.backgroundColor = "black";
    }));
}

function destroyCells() {
    const allCells = document.querySelectorAll(".cell");
    allCells.forEach(cell => {
        container.removeChild(cell);
    });
}

function getNewGridSize() {
    const MIN = 4;
    const MAX = 100;
    let size = prompt("Enter a new grid size (<= 100)");

    if (size < MIN) {
        size = MIN;
    } else if (size > 100) {
        size = MAX;
    }

    return size;
}

function resetScreen() {
    destroyCells();
    let newSize = getNewGridSize();
    makeGrid(newSize, newSize);
    draw();
}

function initialize() {
    makeGrid(DEFAULT_GRID_SIZE, DEFAULT_GRID_SIZE);
    draw();

    const resetButton = document.querySelector(".reset-button");
    resetButton.addEventListener("click", resetScreen);
}

initialize();