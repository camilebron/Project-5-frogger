var Enemy = function() {
    this.x = 0;
    this.y = Math.random()*400;
    this.speed = this.getspeed();
    this.sprite = 'images/enemy-bug.png';
    //this.pos = this.x + this.y;
    //return this;
};

Enemy.prototype.getspeed = function(){
    var random = Math.random();
    this.speed = 200 * random;
    return this.speed;
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

  this.x += this.speed * dt;
  if(this.x>500){
    this.x=0;
  };
  if(this.y > 375){
    this.y=275;
  } else if (this.y < 100) {
    this.y=175;
    };
  };
  //function checkCollisions() {
    //if (player.y === enemy.y) {
      //this.reset();
      //alert("YOU LOST!!");
    //}
    //else if (player.x === enemy.x){
      //this.reset();
      //alert("YOU LOST!!");
  //};


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
      this.x = 200;
      this.y = 425;
      this.sprite = 'images/char-horn-girl.png';
  };

var player = new Player();


Player.prototype.update = function() {

      if (this.y == 0) {
        this.reset();
        alert("YOU WON!!");
    };
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
    this.x += 100;
  } else if (keyCode == 'down') {
    this.x -= 100;
  } else if (keyCode == 'left') {
    this.y -= 100;
  } else (keyCode == 'right')
    this.y += 100;
  };
