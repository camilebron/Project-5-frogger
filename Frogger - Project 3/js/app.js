var Enemy = function() {
    this.x = 0;
    this.y = Math.random()*400;
    this.speed = this.getspeed();
    this.sprite = 'images/enemy-bug.png';
    this.pos = this.x + this.y;
    return this;

};

Enemy.prototype.getspeed = function(){
    var random = Math.random();
    if (Math.floor(random) < 1)
    {
        this.speed = 3.5;
    }
    else
    {
        this.speed = 6;
    }
    return this.speed;
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    this.pos += this.speed * dt;
    if (this.x >= 505 || this.y >= 606) {
      reset();
    };

    if (this.y >= 400) {
      this.y = 250;
      return this.y;
    };
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

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
      this.x = 253;
      this.y = 600;
      this.sprite = 'images/char-horn-girl.png';

  };

var player = new Player();

Player.prototype.update = function() {
    checkCollisions();
    if (this.y == 0) {
      this.reset();
      alert("YOU WON!!");
    };
};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


function checkCollisions(){
  if (player.y === enemy.y && player.x === enemy.x){
    player.reset();
    alert("YOU LOST!!");
  };
};



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});