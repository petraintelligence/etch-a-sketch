let numberOfRows = 16;
let colorPicker = 0;
let shade = 100;

function makeBoard() {
    const boardWidth = document.getElementById('game-div').offsetWidth;
    const boardHeight = document.getElementById('game-div').offsetHeight;

    for(x=0; x < parseInt(numberOfRows) * parseInt(numberOfRows); x++){
        const gridSquare = document.createElement('div');
        gridSquare.className = "color";
        gridSquare.style.shade = "brightness(100%)";
        document.getElementById('game-div').appendChild(gridSquare);
        document.getElementById('game-div').style.gridTemplateColumns = `repeat(${parseInt(numberOfRows)}, ${boardWidth / numberOfRows}px)`;
        document.getElementById('game-div').style.gridAutoRows = `${boardHeight/ parseInt(numberOfRows)}px`;
    }

    const boxes = Array.from(document.querySelectorAll('.color'));
    shade = 100
    boxes.forEach(box => box.addEventListener("mouseover", function() {
        if (colorPicker == 0) {
            box.style.backgroundColor = blackBrush();
            box.style.opacity = "1.0";
        } else if (colorPicker == 1) {
            box.style.opacity = "1.0";
            box.style.backgroundColor = randomBrush();
        }  else if (colorPicker == 2) {
            box.style.backgroundColor = changeGradient();
            box.style.opacity -= ".1";
        } else if (colorPicker = 3) {
            box.style.opacity = "1.0";
            box.style.backgroundColor = eraseBoard();
        }
    }))
};

function eraseBoard() {
    for(x = 0; x < (parseInt(numberOfRows) * parseInt(numberOfRows)); x++) {
        board = document.getElementById('game-div');
        board.removeChild(board.lastElementChild);
    };
    board.style.animation = "shake 0.5s";
    board.style.animationIterationCount = "1";
}

function boardSize() {

}

function blackBrush() {
    return "black"
}

function randomBrush() {

}

function changeGradient() {

}

// Main Function
makeBoard();

// Set Board Size Text
const boardSizeText = document.querySelector('#grid-size');
boardSizeText.innerHTML = `Grid Size: ${numberOfRows} x ${numberOfRows}`;

// Event Listeners for Buttons
reset.addEventListener("click", function() { eraseBoard(), makeBoard()});
changeSize.addEventListener("click", boardSize);
blackColor.addEventListener("click", blackBrush);
randomColor.addEventListener("click", randomBrush);
gradient.addEventListener("click", changeGradient);
cleared.addEventListener("click", eraseBoard);
