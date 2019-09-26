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
    if (gameActive) {
        if(event.key === 'ArrowRight'){
            destination = document.getElementById(currRow +"-"+ (currColumn+1))
            console.log('destination:', destination)
            if (destination.dataset != "W"){
                console.log("NON");
                moveToNextCell(player, destination);
                playerLocation.cell ++;
            }
        }
    }

}