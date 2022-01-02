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
var mainTime;
var ninjastars;
var monsters;
localStorage.highScore = localStorage.highScore ? localStorage.highScore : 0;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const background = document.getElementById("clouds");
const mainMusic = document.getElementById("mainMusic");
const heart = new Image();
heart.src = "heart.png";
const slimeleft = new Image();
slimeleft.src = "slimeleft.png";
const slimeright = new Image();
slimeright.src = "slimeright.png";
const ninMain = new Image();
ninMain.src = 'Nin-Main.png';
const ninSprite = new Image();
ninSprite.src = "Nin-Sprite.png";
const ninjaLeft = new Image();
ninjaLeft.src = "starleft.png";
const ninjaRight = new Image();
ninjaRight.src = "starright.png";
const slimeballLeft = new Image();
slimeballLeft.src = "slimeball-left.png";
const slimeballRight = new Image();
slimeballRight.src = "slimeball-right.png";
var currentSprite = "ninMain";
var time = 0;
function whichSprite() {
    return currentSprite == "ninMain" ? ninMain : ninSprite;
}

localStorage.device = deviceType();

if (localStorage.device == ("mobile" || "tablet")) {
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
        if (!player.jump) {
            player.speedY = -player.amount.y;
            player.jump = true;
        }
    });

    rightBtn.addEventListener("touchstart", function (e) {
        e.preventDefault();
        player.right = true;
    });
    leftBtn.addEventListener("touchstart", function (e) {
        e.preventDefault();
        player.left = true;
    });
    rightBtn.addEventListener("touchend", function (e) {
        e.preventDefault();
        player.right = false;
    });
    leftBtn.addEventListener("touchend", function (e) {
        e.preventDefault();
        player.left = false;
    });
}
canvas.width = window.innerWidth * 98 / 100;
canvas.height = window.innerHeight * 95 / 100;
if (localStorage != ("mobile" || "tablet")) {
    background.style.width = canvas.width + "px";
    background.style.height = canvas.height + "px";
}
class Component {
    constructor(x, y, width, height, type, move = "", moveAmount, fullType) {
        this._x = x;
        this._y = y;
        this.width = width;
        this.height = height;
        this.fullType = fullType;
        if (type == "m") {
            this.width = Number(this.fullType.split(":")[2]);
            this.height = Number(this.fullType.split(":")[3]);
            this.y += game.avgTileHeight - this.height;
        }
        this.types = {
            g: "green",
            "0": "none",
            p: "pink",
            "P": "purple",
            "c": "coin.png",
            "t": "platform.png",
            "nl": "starleft.png",
            "nr": "starright.png",
            "sl": "slimeball-left.png",
            "sr": "slimeball-right.png",
            "m": Math.sign(moveAmount) == "-1" ? "slimeleft.png" : "slimeright.png"
        }
        this.images = {
            "c": { row: 1, cols: 3, multiplierX1: 0.3, multiplierX2: 0.6, width: 50, height: this.height, multiplierY1: 0.1, multiplierY2: 0.25 },
            "t": { image: 1 },
            "m": { image: 1 },
            "nl": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: 40, height: 20, multiplierY1: 0, multiplierY2: 0 },
            "nr": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: 40, height: 20, multiplierY1: 0, multiplierY2: 0 },
            "sl": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: 40, height: 40, multiplierY1: 0, multiplierY2: 0 },
            "sr": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: 40, height: 40, multiplierY1: 0, multiplierY2: 0 }


        }
        this.image;

        this.moveTiles = moveAmount;
        this.moveMax = Math.abs(this.moveTiles) * Math.round(game.avgTileWidth);
        this.walkingDistance = 0;
        this.move = move;
        this._back = false;
        this._falling = true;
        this.type = type;
        this.color = this.types[`${this.type}`];
        this.frame = 0;
        if (this.types[`${this.type}`].indexOf(".") > -1) {
            if (this.type == "nl" || this.type == "nr" || this.type == "sl" || this.type == "sr") {
                this.image = this.type == "nl" ? ninjaLeft : this.type == "nr" ? ninjaRight : this.type == "sl" ? slimeballLeft : slimeballRight;
            }
            else {
                this.image = new Image();
                this.image.src = this.types[`${this.type}`];
            }
        }
        this.time = 0;
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
        if (this.types[`${this.type}`].indexOf(".") > -1) {

            if (this.images[this.type].image != 1) {
                var rows = Math.floor(this.frame / this.images[this.type].cols);
                var col = this.frame % this.images[this.type].cols;
                this.width = this.images[this.type].width;
                this.height = this.images[this.type].height;
                ctx.drawImage(this.image,
                    col * (this.image.width / this.images[this.type].cols) + (this.images[this.type].multiplierX1 * this.image.width / this.images[this.type].cols),
                    rows * (this.image.height / this.images[this.type].row) + (this.images[this.type].multiplierY1 * this.image.height / this.images[this.type].row),
                    this.image.width / this.images[this.type].cols - (this.images[this.type].multiplierX2 * this.image.width / this.images[this.type].cols),
                    this.image.height / this.images[this.type].row - (this.images[this.type].multiplierY2 * this.image.height / this.images[this.type].row)
                    , this.x, this.y, this.width, this.height);
                if (String(this.time / 250).indexOf(".") == -1) {
                    this.frame = this.frame < (this.images[this.type].row + this.images[this.type].cols - 2) ? this.frame + 1 : 0;
                }
            }
            else {
                ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
            }
        }
        else {
            if (this.type == "0") {
                ctx.globalAlpha = 0.0;
            }
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fill();
            ctx.stroke();
            ctx.globalAlpha = 1;
        }
        ctx.closePath();
        if (this.moveTiles != 0 && this.walkingDistance < this.moveMax) {
            this.walkingDistance += Math.abs(this.moveTiles);
            this.x += this.moveTiles;
        }
        else if (this.walkingDistance >= this.moveMax) {
            this.walkingDistance = 0;
            this.moveTiles = -this.moveTiles;
            if (this.type == "m") {
                this.image = this.image.src.indexOf("slimeright.png") > -1 ? slimeleft : slimeright;
            }
        }

        this.time += 10;

    }
}
class Game {
    constructor() {
        var g = "g";
        var p = "p";
        var P = "P";
        var c = "c";
        var t = "t";
        this.objects = {
            thrown: []
        }
        this.current =
        {
            level: 0
        };
        this.array = [

            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, P, P, 0, 0, 0, 0],
                [0, 0, 0, 0, g, g, 0, 0, "m:1:100:50", 0],
                [0, 0, 0, 0, 0, 0, 0, 0, g, 0],
                [0, 0, g, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, "m:2:70:50", 0, 0, 0, 0, 0],
                [0, 0, 0, g, g, g, g, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [t, t, t, t, t, t, t, t, t, t],
                [g, g, g, g, g, g, g, g, g, g]

            ]

            ,
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, P, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, g, 0, 0],
                [0, 0, 0, g, g, 0, 0, 0, 0, 0],
                [0, "m:0.25:70:50", 0, 0, 0, 0, 0, 0, 0, 0],
                [0, g, 0, 0, 0, 0, 0, g, g, 0],
                [0, 0, 0, 0, t, 0, 0, 0, 0, 0],
                [0, 0, 0, t, g, t, 0, "m:0.25:100:50", 0, 0],
                [t, t, t, g, g, g, t, t, t, t,],
                [g, g, g, g, g, g, g, g, g, g]
            ],
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, P, P, 0, 0, 0, 0],
                [0, 0, 0, 0, g, g, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [g, 0, 0, 0, "m:2:100:50", 0, 0, 0, 0, g],
                [0, 0, 0, 0, g, g, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [g, 0, 0, 0, 0, 0, 0, 0, 0, g],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [t, t, t, t, t, t, t, t, t, t]
            ],
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, c, 0, 0, 0, P, P, 0],
                [0, "m:.15:70:50", c, g, 0, 0, 0, P, P, 0],
                [0, g, g, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, g],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, "m:-2:70:50", 0, 0, 0, 0, 0],
                [t, c, 0, 0, g, g, 0, 0, c, t],
                [t, t, 0, 0, 0, 0, 0, 0, t, t],
                [g, g, g, g, g, g, g, g, g, g]
            ]



        ];

        this.avgTileWidth = canvas.width / this.array[0][0].length;
        this.avgTileHeight = canvas.height / this.array[0].length;
        this.monster = {
            slimeballs: []
        }
        this.coins = 0;
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
                        String(this.array[h][i][j]).charAt(0),
                        "",
                        String(this.array[h][i][j]).charAt(0) == "m" ? Number(String(this.array[h][i][j]).split(":")[1]) : 0,
                        String(this.array[h][i][j])
                    );
                }
                if (player.collide(this.array[h][i][j]) && this.array[h][i][j].type == "P") {
                    this.current.level += this.current.level < this.array.length ? 1 : 0;
                }
                if (player.collide(this.array[h][i][j]) && this.array[h][i][j].type == "m") {
                    this.array[h][i][j] = 0;
                    player.health -= 1;
                }
                if (Math.abs(player.stats.x - this.array[h][i][j].x) < 300 && Math.abs(player.stats.y - this.array[h][i][j].y) < 100 && this.array[h][i][j].type == "m" && game.objects.thrown.length < 2) {
                    var left = Math.sign(player.stats.x - this.array[h][i][j].x) == "-1";
                    var right = Math.sign(player.stats.x - this.array[h][i][j].x) == "1";
                    var kind = right ? { type: "sr", direction: "positive" } :
                        left ? { type: "sl", direction: "negative" }
                            : { type: "sr", direction: "positive" };
                    var startingpoint = this.array[h][i][j].x + (kind.type == "sr" ? 100 : kind.type == "sl" ? -100 : 100);

                    if (game.objects.thrown.length == 0 || game.objects.thrown[game.objects.thrown.length - 1].x - startingpoint > 100)
                        game.objects.thrown.push(new Component(startingpoint,
                            this.array[h][i][j].y + this.array[h][i][j].height / 6, 50, 25, kind.type, kind.direction));
                }
                if (player.collide(this.array[h][i][j]) && this.array[h][i][j].type == "c") {
                    this.array[h][i][j] = new Component(((canvas.width / this.array[h].length) * j),
                        ((canvas.height / this.array[h][i].length) * i),
                        ((canvas.width / this.array[h].length)),
                        ((canvas.height / this.array[h][i].length)),
                        0
                    );
                    game.coins += 1;
                }
                if (player.collide(this.array[h][i][j]) && this.array[h][i][j].type != "0") {
                    var rockbottom = this.array[h][i][j].y - player.stats.height;
                    var rocktop = this.array[h][i][j].y + this.array[h][i][j].height + player.stats.height;
                    if (player.stats.y > rockbottom && player.stats.y - rockbottom < 6 / 5 * player.amount.y/* && (player.stats.y + player.stats.height) - this.array[h][i][j].y < 3*/) {
                        player.stats.y = rockbottom;
                        player.jump = false;
                        player.gravitySpeed = 0;
                        if (!(player.right || player.left))
                            currentSprite = "ninMain";

                    }
                    else if (player.stats.y + player.stats.height < rocktop && rocktop - (player.stats.y + player.stats.height) < 6 / 5 * player.amount.y) {
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (player.health == 0) {
            player.die();
            return;

        }
        ctx.drawImage(heart, canvas.width - 225, 10, 40, 40)
        coin.draw();
        ctx.beginPath();
        var text = game.coins;
        ctx.fillStyle = "gold";
        ctx.font = "30px Impact";
        ctx.fillText(text, canvas.width - 75, 45);
        ctx.fillStyle = "red";
        ctx.fillText(player.health, canvas.width - 250, 45);
        ctx.closePath();
        if (player.right && !player.stats.noright && player.stats.x + player.stats.width + player.amount.x < canvas.width) {
            player.stats.x += player.amount.x;
            player.stats.noleft = false;
            currentSprite = "ninSprite";
            player.stats.spriteRow = 1;

        }


        if (player.left && !player.stats.noleft && player.stats.x - player.amount.x > 0) {
            player.stats.x -= player.amount.x;
            player.stats.noright = false;
            currentSprite = "ninSprite";
            player.stats.spriteRow = 0;




        }

        if (player.throw) {
            player.throw = false;
            var kind = player.right ? { type: "nr", direction: "positive" } :
                player.left ? { type: "nl", direction: "negative" }
                    : { type: "nr", direction: "positive" };
            var startingpoint = player.stats.x + (kind.type == "nr" ? 100 : kind.type == "nl" ? -100 : 100);

            if (game.objects.thrown.length == 0 || game.objects.thrown[game.objects.thrown.length - 1].x - startingpoint > 100)
                game.objects.thrown.push(new Component(startingpoint,
                    player.stats.y + player.stats.height / 4, 50, 25, kind.type, kind.direction));

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
            shoot: false,
            noleft: false,
            noright: false,
            currentCollision: ["none", "none", "none"],
            spriteRow: 0,
            spriteCol: 0,
            stars: []
        }
        this._health = 3;
        this._throw = false;
        this._right = false;
        this._left = false;
        this._jump = false;
        this.color = color;
        this._speedY = 0;
        this.amount = { x: 3, y: 4 }
        this.gravity = 0.06;
        this._gravitySpeed = 0;
    }
    get health() {
        return this._health;
    }
    set health(value) {
        this._health = value;
    }
    get throw() {
        return this._throw;
    }
    set throw(value) {
        this._throw = value;
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
    die() {
        clearInterval(mainTime);
        clearInterval(ninjastars);
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.font = "60px Impact";
        ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2 - 100);
        ctx.fillStyle = "green";
        ctx.font = "30px Arial";
        if (time / 1000 > Number(localStorage.highScore)) {
            ctx.fillText("You survived for " + time / 1000 + " seconds! Beating your old highscore( " + Number(localStorage.highScore) + "s ) by " + Math.abs(Number(localStorage.highScore) - time / 1000).toFixed(2) + " seconds!", canvas.width / 6, canvas.height / 2);
            localStorage.highScore = time / 1000;
        }
        if (time / 1000 < Number(localStorage.highScore)) {
            ctx.fillText("You survived for " + time / 1000 + " seconds! Less than your old highscore( " + Number(localStorage.highScore) + "s ) by " + Math.abs(Number(localStorage.highScore) - time / 1000).toFixed(2) + " seconds...", canvas.width / 6, canvas.height / 2);

        }
        ctx.fillStyle = "yellow";
        ctx.fillText("And collected " + game.coins + " coins", canvas.width / 4, canvas.height / 2 + 50);

        console.log("draw");
        ctx.closePath();
    }
    draw() {

        ctx.beginPath();
        if (currentSprite == "ninMain") {
            ctx.drawImage(ninMain,
                this.stats.x,
                this.stats.y,
                this.stats.width, this.stats.height);
        }
        if (currentSprite == "ninSprite") {
            currentSprite = "ninSprite";

            if (!player.jump && !player.throw)
                player.stats.spriteCol = player.stats.spriteCol < 3 ? player.stats.spriteCol + 1 : 0;
            if ((player.jump) && player.left) player.stats.spriteCol = 0;
            if ((player.jump) && player.right) player.stats.spriteCol = 2;

            if ((player.amount.y - player.gravitySpeed) < 0 && player.left) {
                currentSprite = "ninSprite";
                player.stats.spriteRow = 2;
                player.stats.spriteCol = 1;
            }
            if ((player.amount.y - player.gravitySpeed) < 0 && player.right) {
                currentSprite = "ninSprite";
                player.stats.spriteRow = 2;
                player.stats.spriteCol = 3;
            }
            if (this.stats.shoot && this.right) {
                currentSprite = "ninSprite";
                this.stats.spriteCol = 3;
                this.stats.spriteRow = 3;
            }
            if (this.stats.shoot && this.left) {
                currentSprite = "ninSprite";

                this.stats.spriteCol = 2;
                this.stats.spriteRow = 3;
            }
            var sprite = whichSprite();
            ctx.drawImage(sprite,
                this.stats.spriteCol * (sprite.width / 4) + (sprite.width / 16),
                this.stats.spriteRow * (sprite.height / 5) + (sprite.width / 16),
                (1 / 2) * (sprite.width / 4),
                (1 / 2) * (sprite.height / 5),
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

        if (event.key === "ArrowRight" || event.key == "d" || event.key == "D") {
            this.right = true;

        }
        if (event.key === "ArrowLeft" || event.key == "a" || event.key == "A") {
            this.left = true;


        }
        if (event.key == " ") {
            this.throw = true;
            this.stats.shoot = true;
        }

        if ((event.key === "ArrowUp" || event.key == "w" || event.key == "W") && !this.jump) {
            currentSprite = "ninMain";
            this.jump = true;


        }


    }
    moveReset(event) {
        currentSprite = "ninMain";
        if (event.key === "ArrowRight" || event.key == "d" || event.key == "D") {
            this.right = false;

        }
        if (event.key === "ArrowLeft" || event.key == "a" || event.key == "A") {
            this.left = false;

        }
        if (event.key === " ") {
            this.stats.shoot = false;
        }




    }
}
const game = new Game();
const player = new Player(100, 150, canvas.width / 25, canvas.height / 10, "yellow");
const coin = new Component(canvas.width - 150, 0, 40, 60, "c");

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
function start() {
    mainMusic.play();
    document.getElementsByClassName("bg-text")[0].style.display = "none";
    document.addEventListener("keydown", function () {

        player.movement(event);

    });
    document.addEventListener("keyup", function () {

        player.moveReset(event);

    });


    mainTime = setInterval(function () {
        game.draw();
    }, 10);
    ninjastars = setInterval(function () {
        if (game.objects.thrown.length != 0) {

            for (var i = 0; i < game.objects.thrown.length; i++) {
                game.objects.thrown[i].draw();
                for (let j = 0; j < game.array[game.current.level].length; j++) {

                    for (let k = 0; k < game.array[game.current.level][j].length; k++) {
                        if (game.objects.thrown.length == 0) {
                            return;
                        }
                        if (game.objects.thrown[i].collide(game.array[game.current.level][j][k]) && game.array[game.current.level][j][k].type != 0) {
                            if (game.array[game.current.level][j][k].type == "m" && game.objects.thrown[i].type.indexOf("n") > -1) {
                                game.array[game.current.level][j][k] = 0;
                            }
                            game.objects.thrown.splice(i, 1);
                        }
                    }
                }
                if (game.objects.thrown[i].collide(player)) {
                    game.objects.thrown.splice(i, 1);
                    player.health -= 1;
                }
                game.objects.thrown[i].x += game.objects.thrown[i].move == "positive" ? 5 : game.objects.thrown[i].move == "negative" ? -5 : 5;
                if (game.objects.thrown[i].x > canvas.width || game.objects.thrown[i].x < 0) game.objects.thrown.shift();
            }
        }
    }, 10);
}
