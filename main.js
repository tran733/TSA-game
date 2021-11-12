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

localStorage.device = deviceType();

if(localStorage.device == ("mobile" || "tablet")){
    var de = document.documentElement;
    de.requestFullscreen();
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
    leftBtn.addEventListener("touchstart", function(e){
        e.preventDefault();
        player.left = false;
    });
    background.style.display = "none";
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
            p: "pink"
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
        this.current = 
        {
            level: 0
        };
        this.array = [
            
                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
                            player.gravitySpeed *= 2;
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (player.right && !player.stats.noright && player.stats.x + player.stats.width + player.amount.x < canvas.width) {
            player.stats.x += player.amount.x;
            player.stats.noleft = false;
        }


        if (player.left && !player.stats.noleft && player.stats.x - player.amount.x > 0) {
            player.stats.x -= player.amount.x;
            player.stats.noright = false;
        }
        if(player.stats.x + player.stats.width +  player.amount.x > canvas.width && game.current.level + 1 < game.array.length){
            player.stats.x = 0;
            game.current.level += 1;
        }

        if (player.jump) {
            player.stats.y -= player.amount.y;
        }
        player.draw();
        game.canvas();
        player.stats.y += player.gravitySpeed;
        player.gravitySpeed += player.gravity;
 
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
            currentCollision: ["none", "none", "none"]
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
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.rect(this.stats.x, this.stats.y, this.stats.width, this.stats.height);
        ctx.fill();
        ctx.stroke();
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
            this.speedY = -this.amount.y;
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
const player = new Player(100, 150, 30,  30, "yellow");


document.addEventListener("keydown", function () {
    player.movement(event);
});
document.addEventListener("keyup", function () {
    player.moveReset(event);
});
setInterval(function () {
    game.draw();
}, 10);
