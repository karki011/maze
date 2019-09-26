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


let gameActive = true;
const gameContainer = document.querySelector('.gameContainer');
// console.log(map[0].length); //colum
// console.log(map.length); //row
const playerLocation = {
    row: 0,
    cell: 0,
}

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
            // console.log('tempMap:', tempMap)
            const cell = document.createElement('div');
            cell.classList.add("cell");
            // cell.className = 'cell '+tempMap;
            cell.dataset.type = tempMap;
            cell.id = rowIndex + "-" + columnIndex;;
            cell.dataset.row = rowIndex;
            cell.dataset.cell = columnIndex;

            rowView.appendChild(cell);
        }
    }
}
createMaze(map)

