"use strict"
document.addEventListener('keydown', movePlayer);

function moveToNextCell(player, destination) {
    player.dataset.type = " ";
    destination.dataset.type = "S";
}

function movePlayer(event) {
    let player = document.querySelector('[data-type="S"]');
    console.log('player:', player);
    let currColumn = Number(player.dataset.cell);
    console.log('currColumn:', currColumn)
    let currRow = Number(player.dataset.row);
    console.log('currRow:', currRow)
    let destination;

    destination = moveRight(event, destination, currRow, currColumn, player);
    destination = moveLeft(event, destination, currRow, currColumn, player);
    destination = moveUp(event, destination, currRow, currColumn, player);
    destination = moveDown(event, destination, currRow, currColumn, player);


    win(currColumn, currRow);
}

function win(currColumn, currRow) {
    if (currColumn + currRow === 27) {
        document.querySelector(".gameOver").style.display = "block";
        document.getElementById('text').innerHTML = "You slove the maze!" + "</br>"+
        "<button id='reset' onClick='document.location.reload(true)'>Play again</button>";;
    }

}

function moveRight(event, destination, currRow, currColumn, player) {
    if (gameActive) {
        if (event.key === 'ArrowRight') {
            destination = document.getElementById(currRow + "-" + (currColumn + 1));
            // console.log('destination:', destination);
            if (destination.dataset.type !== "W") {
                moveToNextCell(player, destination);
                playerLocation.cell++;
            }
        }
    }
    return destination;
}

function moveLeft(event, destination, currRow, currColumn, player) {
    if (gameActive) {
        if (event.key === 'ArrowLeft') {
            destination = document.getElementById(currRow + "-" + (currColumn - 1));
            if (destination.dataset.type !== "W") {
                moveToNextCell(player, destination);
                playerLocation.cell--;
            }
        }
    }
    return destination;
}

function moveUp(event, destination, currRow, currColumn, player) {
    if (gameActive) {
        if (event.key === 'ArrowUp') {
            destination = document.getElementById(currRow - 1 + "-" + (currColumn));
            if (destination.dataset.type !== "W") {
                moveToNextCell(player, destination);
                playerLocation.cell--;
            }
        }
    }
    return destination;
}

function moveDown(event, destination, currRow, currColumn, player) {
    if (gameActive) {
        if (event.key === 'ArrowDown') {
            destination = document.getElementById(currRow + 1 + "-" + (currColumn));
            if (destination.dataset.type !== "W") {
                moveToNextCell(player, destination);
                playerLocation.cell--;
            }
        }
    }
    return destination;
}

function winCheck() {
    if (playerLocation.cell === 20) {
        alert('jk')
    }
}