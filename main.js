const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
}
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const background = document.getElementById("clouds");
const ninMain = new Image();
var time = 0;
ninMain.src = 'Nin-Main.png';
const animate = {
    right: false,
    left: false,
}
localStorage.device = deviceType();

if(localStorage.device == ("mobile" || "tablet")){
    var e = document.getElementById('myCanvas');
(e.webkitRequestFullScreen || e.mozRequestFullScreen || e.requestFullscreen).apply(e);
    screen.orientation.lock("landscape-primary");
    const jumpBtn = document.getElementById("jump");
    const rightBtn = document.getElementById("right");
    const leftBtn = document.getElementById("left");
    const container = document.getElementById("gameBtns");
    container.style.display = "block";
    jumpBtn.addEventListener("touchstart", function (e) {
        e.preventDefault();
        if(!player.jump){
        player.speedY = -player.amount.y;
        player.jump = true;
        }
    });

    rightBtn.addEventListener("touchstart", function(e){
        e.preventDefault();
        player.right = true;
    });
    leftBtn.addEventListener("touchstart", function(e){
        e.preventDefault();
        player.left = true;
    });
    rightBtn.addEventListener("touchend", function(e){
        e.preventDefault();
        player.right = false;
    });
    leftBtn.addEventListener("touchend", function(e){
        e.preventDefault();
        player.left = false;
    });
}
canvas.width = window.innerWidth * 98/100;
canvas.height = window.innerHeight * 95/100;
if(localStorage != ("mobile" || "tablet")){
    background.style.width = canvas.width + "px";
    background.style.height = canvas.height + "px";
}
class Component {
    constructor(x, y, width, height, type) {
        this._x = x;
        this._y = y;
        this.width = width;
        this.height = height;
        this.types = {
            g: "green",
            "0": "none",
            p: "pink",
            "P": "purple"
        }
        this._back = false;
        this._falling = true;
        this.type = type;
        this.color = this.types[`${this.type}`];
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get falling() {
        return this._falling;
    }
    set falling(value) {
        this._falling = value;
    }
    get back() {
        return this._x;
    }
    set back(value) {
        this._back = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    collide(value) {
        if (value.x < this.x + this.width &&
            value.x + value.width > this.x &&
            value.y < this.y + this.height &&
            value.y + value.height > this.y) {
            return true;

        }
        else {
            return false;
        }
    }
    draw() {
        ctx.beginPath();
        if (this.type == "0") {
            ctx.globalAlpha = 0.0;
        }
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;

    }
}
class Game
{
    constructor()
    {
        var g = "g";
        var p = "p";
        var P = "P";
        this.current = 
        {
            level: 0
        };
        this.array = [
            
                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, P, P, 0],
                    [0, 0, 0, 0, 0, 0, 0, P, P, 0],
                    [0, 0, 0, 0, 0, g, g, g, 0, 0],
                    [0, g, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, g, 0, g, 0, g, 0, 0, 0],
                    [g, g, g, g, g, g, g, g, g, g],
                    [g, g, g, g, g, g, g, g, g, g]
                ]
            ,
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, p, 0, g, 0, g, 0, 0],
                [0, g, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, g, 0, g, 0, g, 0, 0, 0],
                [g, g, p, g, g, g, g, g, g, g],
                [g, g, g, g, p, g, g, g, g, g]
            ]
        ]
    }

    canvas() {
            var h = this.current.level;

            for (let i = 0; i < this.array[h].length; i++) {
                for (let j = 0; j < this.array[h][i].length; j++) {
                    if (!isNaN(this.array[h][i][j]) || typeof this.array[h][i][j] == "string") {
                        this.array[h][i][j] = new Component(((canvas.width / this.array[h].length) * j),
                            ((canvas.height / this.array[h][i].length) * i),
                            ((canvas.width / this.array[h].length)),
                            ((canvas.height / this.array[h][i].length)), 
                            this.array[h][i][j]
                            );
                    }

                    if(player.collide(this.array[h][i][j]) && this.array[h][i][j].type == "P"){
                        this.current.level += this.current.level < this.array.length ? 1: 0;
                    }
                    if (player.collide(this.array[h][i][j]) && this.array[h][i][j].type != "0") {
                        var rockbottom = this.array[h][i][j].y - player.stats.height;
                        var rocktop = this.array[h][i][j].y + this.array[h][i][j].height + player.stats.height;
                        if (player.stats.y > rockbottom && player.stats.y - rockbottom < 6 / 5 *player.amount.y/* && (player.stats.y + player.stats.height) - this.array[h][i][j].y < 3*/) {
                            player.stats.y = rockbottom;
                            player.jump = false;
                            player.gravitySpeed = 0;



                        }
                        else if(player.stats.y + player.stats.height < rocktop && rocktop - (player.stats.y + player.stats.height) < 6 / 5 *player.amount.y){
                            player.stats.y = this.array[h][i][j].y + this.array[h][i][j].height;
                            player.gravitySpeed *= 1.5;
                        }
                        else {
                            player.gravitySpeed = 0;
                            if (player.stats.x > this.array[h][i][j].x) {
                                player.stats.x = this.array[h][i][j].x + this.array[h][i][j].width;
                                player.left = false;
                                player.stats.noleft = true;
                            }
                            if (player.stats.x < this.array[h][i][j].x) {
                                player.stats.x = this.array[h][i][j].x - player.stats.width;
                                player.right = false;
                                player.stats.noright = true;
                            }
                            player.stats.currentCollision = [h, i, j];

                        }
                    }

                    if (!isNaN(player.stats.currentCollision[0]) && player.jump) {
                        
                        if (!player.collide(this.array[player.stats.currentCollision[0]][player.stats.currentCollision[1]][player.stats.currentCollision[2]])) {
                            player.stats.noleft = false;
                            player.stats.noright = false;
                            player.stats.currentCollision = ["none", "none", "none"];
                        }
                    }

                    this.array[h][i][j].draw();


                }
            
        }
    }
    draw() {
        if (player.right && !player.stats.noright && player.stats.x + player.stats.width + player.amount.x < canvas.width) {
            player.stats.x += player.amount.x;
            player.stats.noleft = false;
            ninMain.src = "Nin-Sprite.png";
            player.stats.spriteRow = 1;

        }


        if (player.left && !player.stats.noleft && player.stats.x - player.amount.x > 0) {
            player.stats.x -= player.amount.x;
            player.stats.noright = false;
            ninMain.src = "Nin-Sprite.png";
            player.stats.spriteRow = 0;

            


        }

        if (player.jump) {
            player.stats.y -= player.amount.y;
            player.stats.spriteRow = 2;


        }
        time += 10;
        game.canvas();
        player.stats.y += player.gravitySpeed;
        player.gravitySpeed += player.gravity;
        player.draw();

 

 

 
    }
}


class Player {
    constructor(x, y, width, height, color) {
        this.stats =
        {
            x: x,
            y: y,
            width: width,
            height: height,
            noleft: false,
            noright: false,
            currentCollision: ["none", "none", "none"],
            spriteRow: 0,
            spriteCol: 0
            }
        this._right = false;
        this._left = false;
        this._jump = false;
        this.color = color;
        this._speedY = 0;
        this.amount = { x: 3, y: 4 }
        this.gravity = 0.05;
        this._gravitySpeed = 0;
    }
    get speedY() {
        return this._speedY;
    }
    set speedY(value) {
        this._speedY = value;
    }
    get gravitySpeed() {
        return this._gravitySpeed;
    }
    set gravitySpeed(value) {
        this._gravitySpeed = value;
    }
    get jump() {
        return this._jump;
    }
    set jump(value) {
        this._jump = value;
    }
    get right() {
        return this._right;
    }
    set right(value) {
        this._right = value;
    }
    get left() {
        return this._left;
    }
    set left(value) {
        this._left = value;
    }
    draw() {

        ctx.beginPath();
        if((ninMain.src).indexOf("Nin-Main.png") > -1){
        ctx.drawImage(ninMain,
            this.stats.x,
            this.stats.y,
            this.stats.width, this.stats.height); 
        }
        if((ninMain.src).indexOf("Nin-Sprite.png") > -1){
            
            ctx.drawImage(ninMain,
                this.stats.spriteCol * (ninMain.width/ 4) + (ninMain.width/16) ,
                this.stats.spriteRow * (ninMain.height/5) + (ninMain.width/16),
                (1/2) * (ninMain.width/ 4),
                (1/2) * (ninMain.height/5),
                this.stats.x,
                this.stats.y,
                this.stats.width, 
                this.stats.height); 
                



        
        }       
        
        ctx.closePath();
    }
    collide(value) {
        if (value.x < this.stats.x + this.stats.width &&
            value.x + value.width > this.stats.x &&
            value.y < this.stats.y + this.stats.height &&
            value.y + value.height > this.stats.y) {
            return true;

        }
        else {
            return false;
        }
    }
    movement = (event) => {

        if (event.key === "ArrowRight") {
            this.right = true;

        }
        if (event.key === "ArrowLeft") {
            this.left = true;


        }

        if (event.key === "ArrowUp" && !this.jump) {
            ninMain.src = "Nin-Main.png";
            this.jump = true;

        }
    }
    moveReset(event)
    {
        if (event.key === "ArrowRight") {
            this.right = false;

        }
        if (event.key === "ArrowLeft") {
            this.left = false;

        }



    }
}
const game = new Game();
const player = new Player(100, 150, canvas.width/25,  canvas.height/10, "yellow");

// The sprite image frame starts from 0
/*
let currentFrame = 0;

setInterval(function()
{
    let sprite = new Image();
    sprite.src = "Nin-Sprite.png";
    let numColumns = 4;
    let numRows = 5;
    // Define the size of a frame
    let frameWidth = sprite.width / numColumns;;
    let frameHeight = sprite.height / numRows;;

    // Pick a new frame
    currentFrame++;

    // Make the frames loop
    let maxFrame = numColumns  - 1;
    if (currentFrame > maxFrame){
        currentFrame = 0;
    }

    // Update rows and columns
    var column = currentFrame % numColumns;
    var row = Math.floor(currentFrame / numColumns);

    // Clear and draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sprite, column * frameWidth, row * frameHeight, frameWidth, frameHeight, 10, 30, frameWidth/9, frameHeight/7);
    game.draw();


//Wait for next step in the loop
}, 100);*/

document.addEventListener("keydown", function () {

    player.movement(event);
    
});
document.addEventListener("keyup", function () {

    player.moveReset(event);
  
});

setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.draw();
}, 10);
setInterval(function(){
    if(!player.jump && (player.left || player.right))
    player.stats.spriteCol = player.stats.spriteCol < 3 ?  player.stats.spriteCol + 1: 0 ;
     if(player.jump && player.left) player.stats.spriteCol = 0;
     if(player.jump && player.right) player.stats.spriteCol = 2;
    if((player.amount.y - player.gravitySpeed) < 0 && player.left){
        ninMain.src = "Nin-Sprite.png";
        player.stats.spriteRow = 2;
        player.stats.spriteCol = 1;
    }
    if((player.amount.y - player.gravitySpeed) < 0 && player.right){
        ninMain.src = "Nin-Sprite.png";
        player.stats.spriteRow = 2;
        player.stats.spriteCol = 3;
    }


}, 100);
