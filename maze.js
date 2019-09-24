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
const gameContainer = document.querySelector('.gameContainer');
console.log(map[0]);
console.log(map.length);

function createMaze(){
    for (let i = 0; i < map.length; i++){
        let createMazeDiv = document.createElement('div');
        createMazeDiv.className ="mazeDiv";
        // let textnode = document.createTextNode();
        // createMazeDiv.appendChild(textnode);
        gameContainer.appendChild(createMazeDiv)
    }
}
createMaze()