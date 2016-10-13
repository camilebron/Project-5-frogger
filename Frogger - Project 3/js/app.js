var lanes = [60, 145, 230, 300];

// Credits http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Enemy = function() {
  var number = getRandomInt(0, lanes.length-1);
    this.x = 0;
    this.y = lanes[number];
    this.speed = this.getspeed();
    this.sprite = 'images/enemy-bug.png';
    this.width = 101;
    this.height = 75;
};
function positionReset() { //if collision detected reset player to start position, if player reaches water alert you won, and position reset to start.
  /*if(checkCollision = true || player.y = (range btween 0-87)) {
  positionReset
  }*/
    player.x = 200;
    player.y = 425;
    //console.log (positionReset);
};


function checkCollisions() {

    if (Enemy.x < Player.x + Player.width &&
    Enemy.x + Enemy.width > Player.x &&
    Enemy.y < Player.y + Player.height &&
    Enemy.height + Enemy.y > Player.y) {
        positionReset(); // collision detected. player returns to start position.
        alert("YOU LOSE!");
    };
    //console.log(checkCollisions);
  };


Enemy.prototype.update = function(dt) {

    this.x += this.speed * dt;
    if(this.x>500){
      this.x = 0;
      this.y = lanes[getRandomInt(0, lanes.length-1)];//enemy changing lanes when reappearing
    };
    checkCollisions();
  };

Enemy.prototype.getspeed = function(){
    var random = Math.random();
    this.speed = 200 * random;
    return this.speed;
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

for (var i = 0; i <= 3; i++) {
  var enemy = new Enemy;
  allEnemies.push(enemy);
};

var Player = function() {
      this.x = 200; //player star position
      this.y = 425;
      this.sprite = 'images/char-horn-girl.png';
      this.width = 90;
      this.height = 89;
      //if(player.y >){ //limit players movements to canvas width ahd height

      //}
  };

var player = new Player();


Player.prototype.update = function() {

      if (this.y == 0) {
        this.reset();
        alert("YOU WON!!");
    };
    checkCollisions();

  };

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

   player.handleInput(allowedKeys[e.keyCode]);
});

Player.prototype.handleInput = function(keyCode) {
  if (keyCode == 'up'){
    this.y -= 87; // decrease
  } else if (keyCode == 'down') {
    this.y += 87;
  } else if (keyCode == 'left') {
    this.x -= 87;
  } else if (keyCode == 'right')
    this.x += 87;
};
