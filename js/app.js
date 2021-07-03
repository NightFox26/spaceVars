var ship = new Ship(40,215,120,120);
var enemy = new Enemy(40,210,120,120);

var playerBullets = [];
var enemiesBullets = [];

gameRunning = false;

document.addEventListener('keydown', function(event) {
    const keyboardInput = event.key;    

    if(keyboardInput == "ArrowUp") {
        ship.goUp();
    }
    else if(keyboardInput == "ArrowDown") {
        ship.goDown();
    }

    if(keyboardInput == "Enter") {
        ship.shootBullet();
    }
});

setInterval("game()", 1000/60);

function game(){
    playerBullets.forEach(buletPlayer => {        
        buletPlayer.goRight();
    });
}