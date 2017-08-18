var score = 0;
document.getElementById('marks').innerHTML = "Score : " + score;

// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    var speed = 100; //in this enemy function we have taken constant speed for moving of enenmies.
    this.x = x; //it will store the value of x that we are providing
    this.y = y; //it will store the value of y that we are providing
    this.speed = speed;

    //.speed =Math.random(500,200);

    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x > 550) //it is use to prevent enemy to go out of canvas
    {
        this.x = this.x - 645;
    }



    if (Math.abs(this.x - player.x) < 80 && Math.abs(this.y - player.y) < 80) //in this we are taking the value of x cooridante of enenmy and player and compare wiyh the width and height of tile of player and enemy.
    {
        player.reposition(); //after colliding it willcome back to its original position.
        score = 0;
        document.getElementById('marks').innerHTML = "Score : " + score;

    }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) //this function stores the initial value of player.
    {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-boy.png';
    };
Player.prototype.update = function() {




};
Player.prototype.render = function() //this function use to show the image of player
    {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
Player.prototype.handleInput = function(keys) //in this finction keys are provided which user presses.
    {
        if (keys === 'left') {
            this.x = this.x - 100;
            if (this.x < 0) {
                this.x = this.x + 100; //it will to prevent the player to come out of box
            }


        } else if (keys === 'up') {
            this.y = this.y - 85;
            if (this.y < -20) {
                this.reposition();
                score = score + 1;
                document.getElementById('marks').innerHTML = "Score : " + score;
                if (score == 6) {
                    window.alert("you have win the game!!!");
                }

            }


        } else if (keys === 'right') {
            this.x = this.x + 100;
            if (this.x > 400) {
                this.x = this.x - 100; //it will prevent the player to come out of the canvas wwhen the user press right key.
            }


        } else if (keys === 'down') {

            this.y = this.y + 85;
            if (this.y > 400) {
                this.y = this.y - 85; //it will help to prevent to come out of the canvas when user press the up key

            }

        }

    };

Player.prototype.reposition = function() //this function is made to start again the game from the original position
    {
        this.x = 200;
        this.y = 400;
    };

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy = new Enemy(30, 40);
var enemy1 = new Enemy(30, 130);
var enemy2 = new Enemy(30, 220);

var allEnemies = [enemy, enemy1, enemy2]; //array of three different enemies
// Place the player object in a variable called player
var player = new Player(200, 400); //this is player starting position



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
