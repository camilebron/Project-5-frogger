var lanes = [60, 145, 230, 300];

// Credits http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
// getRandomInt function allows us to ger a random integer later used to randomize enemy bug position or lanes
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


Enemy.prototype.update = function(dt) {

    this.x += this.speed * dt;
    if(this.x>500){
      this.x = 0;
      this.y = lanes[getRandomInt(0, lanes.length-1)];//enemy changing lanes when reappearing
    };
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
      this.x = 200; //player start position
      this.y = 408;
      this.sprite = 'images/char-horn-girl.png';
      this.width = 90;
      this.height = 89;
  };

var player = new Player();


Player.prototype.update = function() {

      if (this.y > 0 && this.y < 50) {
        this.reset();
        alert("YOU WON!!");
    };
  };

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function(){
  //var self = this; //for function inside a function in a prototype construct
    this.x = 200;
    this.y = 408;

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
    this.y -= 101; // decrease
  } else if (keyCode == 'down') {
      if (this.y <= 400 ){
        this.y += 101;
      }
  } else if (keyCode == 'left') {
      if (this.x > 0){
        this.x -= 83;
    }
  } else if (keyCode == 'right')
      if (this.x < 400){
        this.x += 83;
    }
};
