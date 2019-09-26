const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
let game =[];
let gameActive = true;
const gameContainer = document.querySelector('.gameContainer');
console.log(map[0].length);//colum
console.log(map.length);//row


function createMaze(map) {
    for(let rowIndex = 0; rowIndex <map.length; rowIndex++){
        const rowModel = map[rowIndex];
        const rowView = document.createElement('div');
        rowView.classList.add('row');
        rowView.dataset.type ='row';
        rowView.dataset.index ='row'+rowIndex;
        gameContainer.appendChild(rowView)

        for(let columnIndex = 0; columnIndex < map[rowIndex].length; columnIndex++){
            let tempMap = map[rowIndex][columnIndex]
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.type = tempMap;
            cell.dataset.index='cell'+columnIndex;
            rowView.appendChild(cell);
        }   
     }
}
createMaze(map)
document.addEventListener('keydown', movePlayer);
function movePlayer(event){
    let player = document.querySelector(".S");
    let currentX = parseInt(player.dataset.cell);
    let currentY = parseInt(player.dataset.row);
    let destination;
    function classChange(){
        player.className = "cell F";
        destination.className = "cell P";
    }
    if (gameActive) {
        if (event.key == "ArrowRight"){
            destination = document.getElementById(currentY +"-"+ (currentX+1))
            if (!destination.classList.contains("W")){
                classChange();
                playerLocation.cell += 1;
            }
        }
        if (event.key == "ArrowLeft"){
            destination = document.getElementById((currentY) +"-"+ (currentX-1))
            if (!destination.classList.contains("W")){
                classChange();
                playerLocation.cell -= 1;
            }
        }
        if (event.key == "ArrowUp"){
            destination = document.getElementById((currentY-1) +"-"+ (currentX))
            if (!destination.classList.contains("W")){
                classChange();
                playerLocation.row -= 1;
            }
        }
        if (event.key == "ArrowDown"){
            destination = document.getElementById((currentY+1) +"-"+ (currentX))
            if (!destination.classList.contains("W")){
                classChange();
                playerLocation.row += 1;
            }
        }
        endGame()
    }
}

function checkWin(){
    if (playerLocation.row === 8 && playerLocation.cell === 20){
        return true
    }
}

function endGame(){
    if ((checkWin())){
        gameActive = false;
        console.log("You solved the maze! Amazing!")
        document.getElementById("gameWin").innerHTML = "You solved the maze! Amazing!"
    }
}