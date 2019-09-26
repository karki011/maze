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
const playerLocation = {
    row: 0,
    cell: 0,
}

let gameActive = true;
const gameContainer = document.querySelector('.gameContainer');
// console.log(map[0].length); //colum
// console.log(map.length); //row


function createMaze(map) {
    for (let rowIndex = 0; rowIndex < map.length; rowIndex++) {
        const rowModel = map[rowIndex];
        const rowView = document.createElement('div');
        rowView.classList.add('row');
        rowView.dataset.type = 'row';
        rowView.dataset.row = 'row' + rowIndex;
        gameContainer.appendChild(rowView)

        for (let columnIndex = 0; columnIndex < map[rowIndex].length; columnIndex++) {
            let tempMap = map[rowIndex][columnIndex]
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.type = tempMap;
            cell.dataset.row = rowIndex;
            cell.dataset.cell = columnIndex;
            
            rowView.appendChild(cell);
        }
    }
}
createMaze(map)
document.addEventListener('keydown', movePlayer);

function movePlayer(event) {
    let player = document.querySelector('[data-type="S"]');
    console.log('player:', player);
    let currColumn = Number(player.dataset.cell);
    console.log('currColumn:', currColumn)
    let currRow = Number(player.dataset.row);
    console.log('currRow:', currRow)


}