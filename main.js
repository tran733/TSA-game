const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) {
        return "mobile";
    }
    else if (('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/))) {
        return "mobile";
    }
    else if (window.matchMedia("only screen and (max-width: 760px)").matches) {
        return "mobile";
    }
    return "desktop";
}

var mainTime;
var ninjastars;
var monsters;
var generator;

var elem = document.documentElement;
var gamestarted = false;
elem.requestFullscreen();
var test = false;
localStorage.highScore = localStorage.highScore ? localStorage.highScore : 0;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const background = document.getElementById("clouds");
const mainMusic = document.getElementById("mainMusic");
const heart = new Image();
heart.src = "heart.png";
const bigSmallMushroom = new Image();
bigSmallMushroom.src = "bigsmallMushroom.png";
const bigSmallMushroomSpring = new Image();
bigSmallMushroomSpring.src = "bigsmallMushroomSpring.png";
const buttonDown = new Image();
buttonDown.src = "buttonDown.png";
const buttonUp = new Image();
buttonUp.src = "buttonUp.png";
const blueButtonDown = new Image();
blueButtonDown.src = "blueButtonDown.png";
const blueButtonUp = new Image();
blueButtonUp.src = "blueButtonUp.png";
const pinkButtonDown = new Image();
pinkButtonDown.src = "pinkButtonDown.png";
const pinkButtonUp = new Image();
pinkButtonUp.src = "pinkButtonUp.png";
const redButtonUp = new Image();
redButtonUp.src = "redButtonUp.png";
const redButtonDown = new Image();
redButtonDown.src = "redButtonDown.png";
const mushroom = new Image();
mushroom.src = "mushroomNormal.png";
const mushroomSpring = new Image();
mushroomSpring.src = "mushroomSpring.png";
const laserUp = new Image();
laserUp.src = "laser-up.png";
const laserRight = new Image();
laserRight.src = "laser-right.png";
const cplaserUp = new Image();
cplaserUp.src = "cplaser-up.png";
const cplaserRight = new Image();
cplaserRight.src = "cplaser-right.png";
const cblaserUp = new Image();
cblaserUp.src = "cblaser-up.png";
const cblaserRight = new Image();
cblaserRight.src = "cblaser-right.png";
const crlaserUp = new Image();
crlaserUp.src = "crlaser-up.png";
const crlaserRight = new Image();
crlaserRight.src = "crlaser-right.png";
const slimeleft = new Image();
slimeleft.src = "slimeleft.png";
const slimedie = new Image();
slimedie.src = "slimedie.png";
const archerright = new Image();
archerright.src = "archer-right.png";
const archerleft = new Image();
archerleft.src = "archer-left.png";
const arrowright = new Image();
arrowright.src = "arrow-right2.png";
const arrowleft = new Image();
arrowleft.src = "arrow-left2.png";
const slimeright = new Image();
slimeright.src = "slimeright.png";
const ninMainRight = new Image();
ninMainRight.src = 'Nin-Main-Right.png';
const ninMainLeft = new Image();
ninMainLeft.src = 'Nin-Main-Left.png';
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
const spikeBottom = new Image();
spikeBottom.src = "spike-bottom.png";
const ground = new Image();
ground.src = "platform.png"
const gameCoin = new Image();
gameCoin.src = "coin.png";
const swampPortal = new Image();
swampPortal.src = "swampPortal.png";
const electricPortal = new Image();
electricPortal.src = "electricPortal.png";
const SwampImg = new Image();
SwampImg.src = "swamp.png";
const TopLeftSwamp = new Image();
TopLeftSwamp.src = "TopLeftSwamp.png";
const TopMiddleSwamp = new Image();
TopMiddleSwamp.src = "TopMiddleSwamp.png";
const TopRightSwamp = new Image();
TopRightSwamp.src = "TopRightSwamp.png";
const MiddleLeftSwamp = new Image();
MiddleLeftSwamp.src = "MiddleLeftSwamp.png";
const MiddleMiddleSwamp = new Image();
MiddleMiddleSwamp.src = "MiddleMiddleSwamp.png";
const MiddleRightSwamp = new Image();
MiddleRightSwamp.src = "MiddleRightSwamp.png";
const BottomMiddleSwamp = new Image();
BottomMiddleSwamp.src = "BottomMiddleSwamp.png";
const TopLeftElectric = new Image();
TopLeftElectric.src = "TopLeftElectric.png";
const TopMiddleElectric = new Image();
TopMiddleElectric.src = "TopMiddleElectric.png";
const TopRightElectric = new Image();
TopRightElectric.src = "TopRightElectric.png";
const MiddleLeftElectric = new Image();
MiddleLeftElectric.src = "MiddleLeftEletric.png";
const MiddleMiddleElectric = new Image();
MiddleMiddleElectric.src = "MiddleMiddleElectric.png";
const MiddleRightElectric = new Image();
MiddleRightElectric.src = "MiddleRightElectric.png";
const BottomRightElectric = new Image();
BottomRightElectric.src = "BottomRightElectric.png";
const BottomMiddleElectric = new Image();
BottomMiddleElectric.src = "BottomMiddleElectric.png";
const BottomLeftElectric = new Image();
BottomLeftElectric.src = "BottomLeftElectric.png";
const tree = new Image();
tree.src = "tree.png";
const swampWaterTop = new Image();
swampWaterTop.src = "swampWaterTop.png";
const swampWaterBottom = new Image();
swampWaterBottom.src = "swampWaterBottom.png";
const vines = new Image();
vines.src = "vines.png";
const platformSwamp = new Image();
platformSwamp.src = "platformSwamp.png";
const platformElectric = new Image();
platformElectric.src = "platformElectric.png";
const pipeLeft = new Image();
pipeLeft.src = "pipeLeft.png";
const pipeTop = new Image();
pipeTop.src = "pipeTop.png";
const crate = new Image();
crate.src = "crateElectric.png";
const warehouse = new Image();
warehouse.src = "warehouse.png";
const elematrix = new Image();
elematrix.src = "Elematrix.png";
const neoElematrix = new Image();
neoElematrix.src = "neoElemtrix.png";
const ballHorizontalAttack = new Image();
ballHorizontalAttack.src = "ballHorizontalElectric.png";
const attackHorizontalElectric = new Image();
attackHorizontalElectric.src = "attackHorizontalElectric.png";
const elematrixFinalAttack = new Image();
elematrixFinalAttack.src = "elematrixFinalAttack.png";
const elematrixRoll = new Image();
elematrixRoll.src = "elematrixRoll.png";
const elematrixSuperRun = new Image();
elematrixSuperRun.src = "elematrixSuperRun.png";
const tiredElematrix = new Image();
tiredElematrix.src = "tiredElematrix.png";
const elematrixSuperSonic = new Image();
elematrixSuperSonic.src = "elematrixSuperSonic.png";
const attackFinal = new Image();
attackFinal.src = "attackFinal.png";
const bottomAttackFinal = new Image();
bottomAttackFinal.src = "bottomAttackFinal.png";
var currentSprite = "ninMainRight";
var time = 0;
function whichSprite() {
    return currentSprite == "ninMainRight" ? ninMainRight : currentSprite == "ninMainLeft" ? ninMainLeft : ninSprite;
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

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
if (localStorage != ("mobile" || "tablet")) {
    background.style.width = canvas.width + "px";
    background.style.height = canvas.height + "px";
}

class Component {
    constructor(x, y, width, height, type, move = "", moveAmount, fullType, expandTop = 0) {
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
        if (type == "b") {
            this.y += 0.25 * height;
        }
        if (type == "e") {
            this.y += 0.25 * height;
        }
        if (type == "u") {
            this.y += 0.25 * height;
        }
        if (type == "k") {
            this.y += 0.25 * height;
        }
        if (type == "s") {
            this.y += this.height / 2;
        }
        if (type == "[") {
            this.width = this.height;
        }
        if (type == "]") {
            this.width *= 2;
            this.height *= 2;
        }
        this.types = {
            g: "#1c5200",
            "0": "none",
            p: "pink",
            y: "yellow",
            v: "swampWaterTop.png",
            ",": "swampWaterBottom.png",
            ".": "vines.png",
            "[": "crate.png",
            "]": "warehouse.png",
            l: this.fullType == "lr" ? "laser-right.png" : "laser-up.png",
            "2": this.fullType == "2l" ? "crlaser-right.png" : "crlaser-up.png",
            "3": this.fullType == "3l" ? "cplaser-right.png" : "cplaser-up.png",
            "4": this.fullType == "4l" ? "cblaser-right.png" : "cblaser-up.png",
            "P": "swampPortal.png",
            "c": "coin.png",
            "/": "pipeTop.png",
            "|": "pipeLeft.png",
            "%": "ballHorizontalElectric.png",
            "^": "attackHorizontalElectric.png",
            "&": "attackFinal.png",
            "=": "BottomAttackFinal.png",
            "t": "platform.png",
            "-": "platformSwamp.png",
            "nl": "starleft.png",
            "x": "tree.png",
            "1": "elematrix.png",
            "!": "TopLeftSwamp.png",
            "@": "TopMiddleSwamp.png",
            "#": "TopRightSwamp.png",
            "$": "BottomMiddleSwamp.png",
            "*": "MiddleLeftSwamp.png",
            "(": "MiddleMiddleSwamp.png",
            ")": "MiddleRightSwamp.png",
            "nr": "starright.png",
            "sl": "slimeball-left.png",
            "sr": "slimeball-right.png",
            "al": "arrow-left2.png",
            "ar": "arrow-right2.png",
            "s": "spike-bottom.png",
            "d": "slimedie.png",
            "b": "buttonUp.png",
            "e": "redButtonUp.png",
            "u": "blueButtonUp.png",
            "r": "mushroomNormal.png",
            "n": "bigsmallMushroom.png",
            "rs": "mushroomSpring.png",
            "ns": "bigsmallMushroomSpring.png",
            "k": "pinkButtonUp.png",
            "sw": "swamp.png",
            "a": this.x > canvas.width / 2 ? "archer-left.png" : "archer-right.png",
            "m": Math.sign(moveAmount) == "-1" ? "slimeleft.png" : "slimeright.png"
        }
        this.images = {
            "[": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "sw": { row: 1, cols: 10, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "c": { row: 1, cols: 3, multiplierX1: 0.3, multiplierX2: 0.6, width: 50, height: this.height, multiplierY1: 0.1, multiplierY2: 0.25 },
            "1": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height * 2, multiplierY1: 0, multiplierY2: 0 },
            "a": { row: 1, cols: 10, multiplierX1: 0, multiplierX2: 0, width: 70, height: 1.15 * this.height, multiplierY1: 0.06, multiplierY2: 0 },
            "-": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "/": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "|": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "]": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "!": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "%": { row: 1, cols: 11, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "^": { row: 1, cols: 3, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "&": { row: 1, cols: 3, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "=": { row: 1, cols: 17, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "@": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "#": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "v": { row: 1, cols: 32, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            ".": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            ",": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "$": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "*": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "(": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            ")": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "t": { row: 1, cols: 4, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "b": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: 0.75 * this.height, multiplierY1: 0, multiplierY2: 0 },
            "k": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: 0.75 * this.height, multiplierY1: 0, multiplierY2: 0 },
            "u": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: 0.75 * this.height, multiplierY1: 0, multiplierY2: 0 },
            "e": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: 0.75 * this.height, multiplierY1: 0, multiplierY2: 0 },
            "m": { row: 1, cols: 7, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "d": { row: 1, cols: 13, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height, multiplierY1: 0, multiplierY2: 0 },
            "2": { row: 1, cols: 7, multiplierX1: 0, multiplierX2: 0, width: this.fullType == "2" ? this.width / 4 : this.width, height: this.fullType == "2l" ? this.height / 2 : this.height, multiplierY1: 0, multiplierY2: 0, frame: 50 },
            "3": { row: 1, cols: 7, multiplierX1: 0, multiplierX2: 0, width: this.fullType == "3" ? this.width / 4 : this.width, height: this.fullType == "3l" ? this.height / 2 : this.height, multiplierY1: 0, multiplierY2: 0, frame: 50 },
            "4": { row: 1, cols: 7, multiplierX1: 0, multiplierX2: 0, width: this.fullType == "4" ? this.width / 4 : this.width, height: this.fullType == "4l" ? this.height / 2 : this.height, multiplierY1: 0, multiplierY2: 0, frame: 50 },
            "l": { row: 1, cols: 7, multiplierX1: 0, multiplierX2: 0, width: this.fullType == "l" ? this.width / 4 : this.width, height: this.fullType == "lr" ? this.height / 2 : this.height, multiplierY1: 0, multiplierY2: 0, frame: 50 },
            "s": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: this.height / 1.5, multiplierY1: 0, multiplierY2: 0 },
            "rs": { row: 1, cols: 6, multiplierX1: 0, multiplierX2: 0, width: this.width, height: 2 * this.height, multiplierY1: 0, multiplierY2: 0 },
            "r": { row: 1, cols: 6, multiplierX1: 0.13, multiplierX2: 0.275, width: this.width, height: 2 * this.height, multiplierY1: 0.1, multiplierY2: 0.2 },
            "x": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: this.width, height: 2 * this.height, multiplierY1: 0, multiplierY2: 0 },
            "n": { row: 1, cols: 6, multiplierX1: 0.13, multiplierX2: 0.275, width: this.width, height: 2 * this.height, multiplierY1: 0.1, multiplierY2: 0.2 },
            "ns": { row: 1, cols: 6, multiplierX1: 0.13, multiplierX2: 0.275, width: this.width, height: 2 * this.height, multiplierY1: 0.1, multiplierY2: 0.2 },
            "P": { row: 1, cols: 4, multiplierX1: 0, multiplierX2: 0, width: this.width, height: 2 * this.height, multiplierY1: 0, multiplierY2: 0 },
            "al": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: 40, height: 10, multiplierY1: 0, multiplierY2: 0 },
            "ar": { row: 1, cols: 1, multiplierX1: 0, multiplierX2: 0, width: 40, height: 10, multiplierY1: 0, multiplierY2: 0 },
            "nl": { row: 1, cols: 16, multiplierX1: 0, multiplierX2: 0, width: 30, height: 30, multiplierY1: 0, multiplierY2: 0 },
            "nr": { row: 1, cols: 16, multiplierX1: 0, multiplierX2: 0, width: 30, height: 30, multiplierY1: 0, multiplierY2: 0 },
            "sl": { row: 1, cols: 10, multiplierX1: 0, multiplierX2: 0, width: 40, height: 40, multiplierY1: 0, multiplierY2: 0 },
            "sr": { row: 1, cols: 10, multiplierX1: 0, multiplierX2: 0, width: 40, height: 40, multiplierY1: 0, multiplierY2: 0 }


        }
        this.appearance = {
            visible: true
        }
        this._image;
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
            switch (this.type) {
                case "c":
                    this.image = gameCoin;
                    break;
                case "a":
                    this.image = this.x > canvas.width / 2 ? archerleft : archerright;
                    break;
                case "t":
                    this.image = ground;
                    break;
                case "m":
                    this.image = Math.sign(moveAmount) == "-1" ? slimeleft : slimeright;
                    break;
                case "l":
                    this.image = this.fullType == "lr" ? laserRight : laserUp;
                    break;
                case "s":
                    this.image = spikeBottom;
                    break;

                case "P":
                    this.image = swampPortal;
                    break;

                case "al":
                    this.image = arrowleft;
                    break;

                case "ar":
                    this.image = arrowright;
                    break;

                case "nl":
                    this.image = ninjaLeft;
                    break;

                case "nr":
                    this.image = ninjaRight;
                    break;

                case "sl":
                    this.image = slimeballLeft;
                    break;

                case "sr":
                    this.image = slimeballRight;
                    break;
                case "d":
                    this.image = slimedie;
                    break;

                case "r":
                    this.image = mushroom;
                    break;

                case "n":
                    this.image = bigSmallMushroom;
                    break;
                case "x":
                    this.image = tree;
                    break;
                case "rs":
                    this.image = mushroomSpring;
                    break;

                case "ns":
                    this.image = bigSmallMushroomSpring;
                    break;
                case "b":
                    this.image = buttonUp;
                    break;
                case "u":
                    this.image = blueButtonUp;
                    break;
                case "e":
                    this.image = redButtonUp;
                    break;
                case "k":
                    this.image = pinkButtonUp;
                    break;
                case "2":
                    this.image = this.fullType == "2l" ? crlaserRight : crlaserUp;
                    break;
                case "3":
                    this.image = this.fullType == "3l" ? cplaserRight : cplaserUp;
                    break;
                case "4":
                    this.image = this.fullType == "4l" ? cblaserRight : cblaserUp;
                    break;
                case "!":
                    this.image = TopLeftSwamp;
                    break;
                case "@":
                    this.image = TopMiddleSwamp;
                    break;
                case "#":
                    this.image = TopRightSwamp;
                    break;
                case "*":
                    this.image = MiddleLeftSwamp;
                    break;
                case "(":
                    this.image = MiddleMiddleSwamp;
                    break;
                case ")":
                    this.image = MiddleRightSwamp;
                    break;
                case "$":
                    this.image = BottomMiddleSwamp;
                    break;
                case "v":
                    this.image = swampWaterTop;
                    break;
                case ",":
                    this.image = swampWaterBottom;
                    break;
                case ".":
                    this.image = vines;
                    break;
                case "-":
                    this.image = platformSwamp;
                    break;
                case "/":
                    this.image = pipeTop;
                    break;
                case "|":
                    this.image = pipeLeft;
                    break;
                case "[":
                    this.image = crate;
                    break;
                case "]":
                    this.image = warehouse;
                    break;
                case "%":
                    this.image = ballHorizontalAttack;
                    break;
                case "^":
                    this.image = attackHorizontalElectric;
                    break;
                case "&":
                    this.image = attackFinal;
                    break;
                case "=":
                    this.image = bottomAttackFinal;
                    break;
                case "1":
                    this.image = elematrix;
                    break;
                case "sw":
                    this.image = SwampImg;

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
    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
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
        if (this.types[`${this.type}`].indexOf(".") > -1 && this.appearance.visible) {

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
                if (String(this.time / (this.images[this.type].frame ? this.images[this.type].frame : 100)).indexOf(".") == -1 && this.type != "a") {
                    this.frame = this.frame < (this.images[this.type].row + this.images[this.type].cols - 2) ? this.frame + 1 : 0;

                }
                if (game.current.stage == "electric") {
                    switch (this.type) {
                        case "!":
                            this.image = TopLeftElectric;
                            break;
                        case "@":
                            this.image = TopMiddleElectric;
                            break;
                        case "#":
                            this.image = TopRightElectric;
                            break;
                        case "*":
                            this.image = MiddleLeftElectric;
                            break;
                        case "(":
                            this.image = MiddleMiddleElectric;
                            break;
                        case ")":
                            this.image = MiddleRightElectric;
                            break;
                        case "$":
                            this.image = BottomMiddleElectric;
                            break;
                        case "-":
                            this.image = platformElectric;
                            break;
                        case "P":
                            this.image = electricPortal;
                            this.images[this.type].cols = 1;
                            this.images[this.type].frame = 0;
                    }
                }
                if (this.type == "d") {
                    if (this.frame == 12) {
                        this.type = "0";
                    }
                }
                if (this.image.src.indexOf("mushroomSpring.png") > -1) {
                    if (this.frame == 5) {
                        this.image = mushroom;
                    }
                }
                if (this.image.src.indexOf("bigsmallMushroomSpring.png") > -1) {
                    if (this.frame == 5) {
                        this.image = bigSmallMushroom;
                    }
                }
                if (this.type == "a" && String(this.time / 150).indexOf(".") == -1) {
                    if (this.frame == 6) {
                        var left = this.x > canvas.width / 2;
                        var right = this.x < canvas.width / 2;
                        var kind = right ? { type: "ar", direction: "positive" } :
                            left ? { type: "al", direction: "negative" }
                                : { type: "ar", direction: "positive" };
                        var startingpoint = this.x + (kind.type == "ar" ? 100 : kind.type == "al" ? -100 : 100);
                        if (game.objects.thrown.length < Infinity || game.objects.thrown[game.objects.thrown.length - 1].x - startingpoint > 100)
                            game.objects.thrown.push(new Component(startingpoint,
                                this.y + this.height / 5, 50, 25, kind.type, kind.direction));
                    }
                    this.frame = this.frame < (this.images[this.type].row + this.images[this.type].cols - 2) ? this.frame + 1 : 0;

                }
            }
            else {
                ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
            }
        }
        else {
            if (this.type == "0" || this.type == "2" || this.type == "2l" || this.type == "3" || this.type == "3l" || this.type == "4" || this.type == "4l") {
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
        if (this.moveTiles != 0 && this.walkingDistance < this.moveMax && String(this.time / (this.moveTiles)).indexOf(".") == -1) {
            this.walkingDistance += Math.abs(this.moveTiles);
            this.x += this.moveTiles;
        }
        else if (this.walkingDistance >= this.moveMax && String(this.time / 50).indexOf(".") == -1) {
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
        var g = "(";
        var P = "P";
        var c = "c";
        var t = "@";
        var p = "!";
        var f = "#";
        var j = "*";
        var o = "$";
        var d = ")";
        var y = "y";
        var l = "l";
        var r = "r";
        var x = "2";
        var X = "2l";
        var w = "3";
        var W = "3l";
        var z = "4";
        var Z = "4l";
        var s = "s";
        var m = "r";
        var h = "rs";
        var n = "n";
        var b = "b";
        var k = "k";
        var e = "e";
        var u = "u";
        var v = "v";
        var s1 = ",";
        var q = "x";
        var i = ".";
        var h = "/";
        var h1 = "|";
        var l2 = "-";
        var c1 = "[";
        var w1 = "]";
        this.objects = {
            thrown: [],
            turnoff: "",
            turnon: ""
        }
        this.current =
        {
            level: 0,
            sparningPoint: [],
            stage: "swamp"
        };
        this.array = [

            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, q, 0, 0, 0, l2, l2, l2, 0, 0, 0, 0, 0],
                [y, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, P],
                [q, q, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l2, l2],
                [p, t, t, t, t, t, t, t, t, t, t, t, f],
                [j, g, g, g, g, g, g, g, g, g, g, g, d],
            ],

            [
                [i, i, i, i, i, i, i, i, i, i, i, i, i],
                [i, i, i, i, i, i, i, i, i, i, i, i, i],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [y, q, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [q, q, 0, 0, 0, 0, 0, c, 0, 0, 0, 0, 0],
                [q, q, 0, 0, 0, 0, l2, l2, l2, 0, 0, 0, P],
                [q, q, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [q, q, 0, 0, 0, 0, 0, 0, 0, 0, 0, l2, l2],
                [q, q, 0, 0, 0, 0, 0, 0, 0, 0, 0, l2, l2],
                [j, t, t, t, t, 0, 0, 0, 0, 0, t, t, d],
            ],



            [
                [0, 0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, i, 0, 0, 0, 0, P, 0, 0, 0],
                [0, 0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, c, 0, i, 0, 0, 0, l2, l2, l2, 0, 0],
                [0, 0, 0, 0, i, 0, c, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [y, q, 0, 0, 0, 0, q, q, 0, 0, 0, 0, 0],
                [q, q, 0, 0, 0, 0, q, q, 0, 0, 0, l2, l2],
                [q, q, 0, 0, 0, m, q, q, q, q, q, 0, 0],
                [q, q, 0, 0, 0, 0, q, q, q, q, q, 0, 0],
                [p, t, t, t, t, t, t, t, t, t, t, t, f],
                [j, g, g, g, g, g, g, g, g, g, g, g, d],
            ],
                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, c, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, P],
                    [0, 0, 0, 0, 0, 0, l2, l2, l2, 0, 0, q, q],
                    [0, 0, 0, l2, l2, 0, 0, 0, 0, 0, 0, q, q],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [y, q, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [q, q, 0, p, t, t, 0, 0, 0, 0, 0, t, f],
                    [p, t, t, g, g, g, g, g, g, g, g, g, d],
                    [j, g, g, g, g, g, g, g, g, g, g, g, d],
                ],


                [
                    [0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, l2, l2, y, l2, l2, l2, l2, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, c, 0],
                    [c, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, l2, l2, l2, l2, l2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [l2, l2, l2, l2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, P, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [v, v, v, v, v, v, t, t, v, v, v, v, v],
                ],

                [
                    [0, 0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, P, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, i, 0, 0, 0, 0, 0, 0, c, 0],
                    [0, l2, l2, 0, 0, 0, l2, l2, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, c, 0, 0, 0, 0, 0, 0, 0, l2, l2, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, l2, l2, l2, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [y, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, m],
                    [p, t, t, t, 0, 0, 0, t, t, t, t, t, f],
                    [j, g, g, g, g, g, g, g, g, g, g, g, d],
                ],





                [
                    [0, 0, 0, 0, 0, 0, i, 0, 0, i, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, i, c, 0, i, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, i, 0, 0, i, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, i, 0, 0, i, 0, 0, 0],
                    [0, 0, 0, l2, l2, 0, 0, 0, 0, i, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, i, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, P],
                    [0, m, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [y, l2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, m],
                    [0, 0, 0, 0, 0, 0, 0, p, t, t, t, t, f],
                    [v, v, v, v, v, v, v, j, g, g, g, g, d],
                ],

                [
                    [i, i, i, i, i, i, i, i, i, i, i, i, i],
                    [i, i, i, i, i, i, i, i, i, i, i, i, i],
                    [0, 0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, P],
                    [0, 0, c, 0, i, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, l2, 0, i, 0, 0, 0, l2, l2, l2, l2, l2],
                    [0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, i, 0, 0, 0, m, 0, 0, 0, c, 0, 0],
                    [0, 0, i, 0, 0, l2, l2, 0, 0, 0, 0, 0, 0],
                    [y, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 0],
                    [v, v, v, v, v, v, v, v, v, v, g, v, v],
                ],









                [
                    [0, 0, 0, i, c, 0, 0, 0, i, i, i, i, i],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, l2, l2, l2, 0, 0, 0, 0, 0, 0],
                    [y, l2, l2, l2, 0, 0, 0, 0, 0, 0, 0, 0, r],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, l2, l2, l2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [P, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, m, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, t, t, t, t, d],
                    [j, g, g, g, g, v, v, v, g, g, g, g, d],
                ],

                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, P],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [l2, l2, l2, 0, 0, 0, l2, l2, 0, 0, 0, l2, l2],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, c, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, m, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [c, 0, 0, l2, l2, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, l2, l2, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, t, t, t, t, t, 0, 0, 0, m, 0],
                    [y, t, t, o, o, o, o, o, t, t, t, t, f],
                    [g, g, g, g, g, g, g, g, g, g, g, g, d],
                ],






                [
                    [0, 0, i, 0, 0, 0, P, 0, 0, 0, i, 0, 0],
                    [0, 0, i, 0, 0, 0, 0, 0, 0, 0, i, 0, 0],
                    [0, 0, i, 0, 0, 0, l2, 0, 0, 0, i, c, 0],
                    [0, 0, i, l2, 0, 0, 0, 0, 0, l2, i, 0, 0],
                    [0, 0, i, 0, 0, 0, 0, 0, 0, 0, i, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, l2, l2, 0, 0, 0, 0, 0, 0, 0, l2, l2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, c, 0, 0, l2, l2, 0, l2, l2, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [m, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, m],
                    [p, 0, 0, 0, 0, 0, y, 0, 0, 0, 0, 0, f],
                    [j, g, g, g, g, g, g, g, g, g, g, g, d],
                ],

                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, P],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, l2, l2, 0, 0, 0, l2, 0, 0, 0, 0, l2],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, l2, 0, 0, l2, 0, 0, 0, l2, 0, 0, l2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [y, 0, 0, 0, l2, l2, 0, 0, l2, 0, 0, 0, m],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [v, j, g, d, v, v, v, j, g, d, v, v, v],
                ],











                [
                    [0, 0, 0, 0, 0, 0, 0, i, 0, 0, i, c, 0],
                    [0, 0, 0, 0, 0, 0, 0, i, 0, 0, i, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, i, 0, 0, i, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, l2, l2, 0, 0, l2, l2, 0, 0, l2, l2, l2],
                    [r, 0, 0, i, 0, 0, 0, 0, 0, 0, i, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i, 0, 0],
                    [0, l2, l2, l2, 0, 0, l2, l2, 0, 0, 0, 0, 0],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, 0, q, 0, 0],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, 0, q, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, q, 0, P],
                    [y, t, t, t, t, 0, 0, 0, 0, 0, t, t, f],
                    [j, g, g, g, g, g, g, g, g, g, g, g, d],
                ],

                [
                    [P, 0, 0, 0, 0, 0, i, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [l2, l2, l2, l2, l2, l2, l2, l2, l2, l2, 0, 0, 0],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, l2, 0, 0, 0],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [l2, 0, 0, l2, l2, l2, l2, l2, l2, l2, 0, 0, l2],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, i, 0, 0, 0],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, i, 0, 0, 0],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, i, 0, 0, 0],
                    [0, m, 0, 0, 0, 0, 0, 0, 0, 0, 0, m, 0],
                    [y, t, t, t, 0, 0, 0, 0, 0, t, t, t, f],
                    [j, g, g, g, g, g, g, g, g, g, g, g, d],
                ],











                [
                    [0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, i, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, y, l2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, l2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [c, 0, l2, l2, l2, 0, 0, 0, 0, 0, 0, 0, 0],
                    [l2, 0, l2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, i, 0, 0, m, 0, 0, 0, 0, 0, 0, 0],
                    [l2, 0, i, l2, l2, l2, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, i, 0, 0, 0, 0, 0, 0, 0, c, 0, 0],
                    [P, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [p, t, t, t, t, t, 0, 0, 0, 0, 0, t, f],
                    [j, g, g, g, g, g, g, g, g, g, g, g, d],
                ],

                [
                    [0, 0, 0, 0, 0, 0, l, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, l, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, l, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, l, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, l, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, l, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, l2, l2, l2, l2, l2, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, w, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, w, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, w, 0, 0, 0, 0, 0, 0],
                    [y, 0, 0, k, 0, 0, w, 0, 0, 0, 0, 0, P],
                    [p, t, t, t, t, t, t, t, t, t, t, t, f],
                    [j, g, g, g, g, g, g, g, g, g, g, g, d],
                ],







                [
                    [h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, h],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, h],
                    [0, 0, 0, 0, l, 0, 0, 0, 0, 0, 0, 0, h],
                    [0, 0, 0, 0, l, P, 0, 0, 0, 0, 0, 0, h],
                    [0, 0, 0, 0, l, 0, 0, 0, 0, 0, 0, 0, h],
                    [0, 0, 0, 0, l2, l2, l2, l2, l2, 0, 0, 0, h],
                    [y, c1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, h],
                    [c1, c1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, h],
                    [c1, c1, 0, 0, 0, 0, 0, 0, 0, c1, c1, 0, h],
                    [c1, c1, 0, 0, 0, 0, 0, 0, 0, c1, c1, 0, h],
                    [p, t, t, t, t, t, t, t, t, t, t, t, f],
                    [j, g, g, g, g, g, g, g, g, g, g, g, d],
                ],

                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, l2, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, l2, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, l2, P, 0, 0, 0],
                    [0, 0, 0, 0, 0, k, 0, 0, l2, 0, 0, 0, 0],
                    [0, 0, l2, l2, l2, l2, l2, l2, l2, l2, l2, 0, 0],
                    [0, 0, 0, 0, 0, 0, w, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, w, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, w, 0, 0, 0, 0, l2, l2],
                    [y, 0, 0, 0, 0, 0, w, 0, 0, 0, 0, l2, l2],
                    [p, t, t, t, t, t, t, t, t, t, t, t, f],
                    [j, g, g, g, g, g, g, g, g, g, g, g, d],
                ],









                [
                    [h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, l, 0, c, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, l, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, l, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, k, l, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, l2, l2, l2, 0, 0, l2, l2, l2],
                    [y, l2, l2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, c],
                    [0, 0, c1, 0, 0, 0, 0, 0, 0, 0, c1, 0, 0],
                    [p, t, t, t, t, t, t, t, t, t, t, t, f],
                    [f, g, g, g, g, g, g, g, g, g, g, g, d],
                ],

                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1],
                    [h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1],
                    [0, 0, 0, 0, 0, w, c, l, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, w, 0, l, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, w, u, l, 0, 0, 0, P, 0],
                    [y, l2, l2, 0, 0, l2, l2, l2, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, z, 0, 0, 0, c1, c1, c1],
                    [0, k, 0, 0, 0, 0, z, c, 0, 0, c1, c1, c1],
                    [l2, l2, l2, 0, 0, 0, z, 0, 0, 0, c1, c1, c1],
                    [p, t, t, t, t, t, t, t, t, t, t, t, f],
                    [f, g, g, g, g, g, g, g, g, g, g, g, d],
                ],











                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, k, 0, 0],
                    [0, 0, 0, 0, l2, r, r, r, l2, 0, 0, 0, 0],
                    [0, 0, l2, l2, l2, l2, l2, l2, l2, l2, l2, l2, l2],
                    [0, 0, l2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, l2, 0, 0, 0, 0, 0, 0, 0, 0, 0, P],
                    [0, 0, l2, 0, u, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, l2, l2, l2, l2, W, W, W, l2, l2, Z, Z],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [y, c1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [c1, c1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [p, t, t, t, t, t, t, t, t, t, t, t, f],
                    [f, g, g, g, g, g, g, g, g, g, g, g, d],
                ],

                [
                    [h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, h],
                    [c, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, h],
                    [0, 0, 0, l, 0, 0, 0, 0, x, 0, 0, 0, h],
                    [0, 0, 0, l, 0, 0, 0, 0, x, 0, P, 0, h],
                    [0, 0, 0, l, 0, 0, 0, u, x, 0, 0, 0, h],
                    [0, 0, 0, l2, W, W, W, l2, l2, l2, l2, l2, l2],
                    [y, c1, 0, 0, 0, 0, 0, z, 0, 0, 0, c, h],
                    [c1, c1, 0, k, 0, 0, 0, z, 0, 0, 0, 0, h],
                    [c1, c1, c1, c1, r, r, c1, c1, 0, 0, 0, 0, h],
                    [c1, c1, c1, c1, 0, 0, c1, c1, l2, e, 0, l2, h],
                    [p, t, t, t, t, t, t, t, t, t, t, t, f],
                    [f, g, g, g, g, g, g, g, g, g, g, g, d],
                ],



















                [
                    [h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1, h1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, l, 0, 0, z, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, l, 0, 0, z, 0, 0],
                    [0, 0, 0, 0, 0, 0, k, l, 0, 0, z, 0, e],
                    [y, l2, l2, 0, 0, l2, l2, l2, 0, 0, l2, l2, l2],
                    [0, 0, x, 0, 0, 0, 0, 0, 0, 0, w, 0, 0],
                    [0, 0, x, 0, 0, 0, 0, 0, 0, 0, w, 0, 0],
                    [P, 0, x, 0, 0, 0, 0, 0, 0, 0, w, 0, u],
                    [0, 0, x, 0, 0, 0, 0, c1, 0, c1, c1, c1, c1],
                    [p, t, t, t, t, t, t, t, t, t, t, t, f],
                    [j, g, g, g, g, g, g, g, g, g, g, g, d],
                ],

                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, k],
                    [y, l2, l2, r, r, r, l2, l2, W, W, l2, l2, l2],
                    [0, 0, z, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, z, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [P, 0, z, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, z, 0, 0, 0, 0, 0, 0, 0, 0, u, 0],
                    [p, t, t, t, t, t, t, t, t, t, t, t, f],
                    [j, g, g, g, g, g, g, g, g, g, g, g, d],
                ],





                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, k],
                    [y, c1, Z, Z, Z, l2, l2, l2, W, W, W, l2, l2],
                    [c1, c1, 0, P, 0, 0, l, 0, 0, 0, 0, 0, 0],
                    [c1, c1, 0, 0, 0, 0, l, 0, 0, 0, 0, 0, 0],
                    [c1, c1, 0, 0, 0, 0, l, 0, 0, u, 0, 0, 0],
                    [p, t, t, t, t, t, t, t, t, t, t, t, f],
                    [j, g, g, g, g, g, g, g, g, g, g, g, d],
                ],

                [
                    [h1, h1, h1, h1, h1, h1, h1, l2, h1, h1, h1, h1, h1],
                    [0, 0, 0, 0, 0, 0, 0, l, 0, c, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, l, 0, 0, l2, l2, l2],
                    [0, 0, 0, 0, 0, 0, k, l, 0, 0, x, 0, 0],
                    [0, 0, 0, 0, 0, l2, l2, l2, 0, 0, x, 0, P],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, x, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l2, l2, l2],
                    [y, l2, l2, 0, 0, 0, 0, 0, 0, 0, c1, c1, c1],
                    [l2, l2, l2, W, W, c1, c1, c1, Z, Z, l2, l2, l2],
                    [0, 0, 0, 0, 0, c1, c1, c1, 0, 0, 0, 0, c],
                    [0, u, 0, 0, 0, c1, c1, c1, 0, e, 0, 0, 0],
                    [p, t, t, t, t, t, t, t, t, t, t, t, f],
                    [f, g, g, g, g, g, g, g, g, g, g, g, d],
                ],













                [
                    [0, 0, z, 0, 0, 0, l2, 0, 0, 0, 0, 0, 0],
                    [0, 0, z, 0, e, 0, l2, 0, 0, 0, 0, 0, P],
                    [y, 0, l2, l2, l2, l2, l2, X, X, X, l2, l2, l2],
                    [0, 0, l2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, l2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, l2, 0, 0, l2, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, l2, 0, 0, l2, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, l2, u, 0, l2, l2, 0, 0, 0, 0, 0, 0],
                    [0, 0, l2, l2, l2, l2, l2, l2, l2, l2, W, W, W],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, k, 0, 0, 0, 0, 0, 0, 0, 0],
                    [p, t, t, t, t, t, t, t, t, t, t, t, f],
                    [j, g, g, g, g, g, g, g, g, g, g, g, d]
                ],

                [
                    [0, 0, 0, 0, 0, 0, w, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, w, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, w, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, l2, 0, 0, 0, 0, 0, 0],
                    [0, y, l2, 0, 0, 0, l, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, l, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, k, l, 0, 0, 0, 0, 0, u],
                    [l2, l2, Z, Z, l2, l2, l2, l2, l2, X, X, l2, l2],
                    [0, 0, 0, 0, 0, 0, l, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, l, 0, 0, 0, 0, 0, 0],
                    [0, e, 0, 0, 0, 0, l, 0, 0, 0, 0, 0, P],
                    [p, t, t, t, t, t, t, t, t, t, t, t, f],
                    [j, g, g, g, g, g, g, g, g, g, g, g, d]
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
                    if (this.array[h][i][j] == "y") {
                        this.current.sparningPoint.push({ x: j, y: i - 2 });
                    }
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
                    player.stats.x = this.current.sparningPoint[h].x * ((canvas.width / this.array[h].length));
                    player.stats.y = ((canvas.height / this.array[h][i].length) * this.current.sparningPoint[h].y);
                    game.objects.thrown = [];
                    this.objects.turnon = this.objects.turnoff;
                    this.objects.turnoff = "";
                    if (game.current.level > 1) {
                        game.current.stage = "electric";
                    }

                    return;
                }
                if (this.objects.turnoff) {
                    if (String(this.array[h][i][j].type).indexOf(this.objects.turnoff) > -1) {
                        this.array[h][i][j].appearance.visible = false;
                    }
                }
                if (this.objects.turnon) {
                    if (String(this.array[h][i][j].type).indexOf(this.objects.turnon) > -1) {
                        this.array[h][i][j].appearance.visible = true;
                    }
                }
                if (player.collide(this.array[h][i][j]) && (
                    (this.array[h][i][j].type == "l" || this.array[h][i][j].type == "lr") ||
                    (this.array[h][i][j].type == "2" || this.array[h][i][j].type == "2l") ||
                    (this.array[h][i][j].type == "3" || this.array[h][i][j].type == "3l") ||
                    (this.array[h][i][j].type == "4" || this.array[h][i][j].type == "4l")) && this.array[h][i][j].appearance.visible) {
                    player.health -= 1;
                    if ((this.array[h][i][j].fullType == "l" ||
                        this.array[h][i][j].fullType == "2" ||
                        this.array[h][i][j].fullType == "3" ||
                        this.array[h][i][j].fullType == "4") && (j != 0 && j != this.array[h][i].length))
                        player.stats.x += player.left ? -100 : 100;
                    else {
                        if (j != 0 && j != this.array[h][i].length)
                            player.stats.y += 75;
                    }
                }

                if (player.collide(this.array[h][i][j]) && this.array[h][i][j].type == "m") {
                    this.array[h][i][j] = 0;
                    player.health -= 1;
                }
                if (player.collide(this.array[h][i][j]) && this.array[h][i][j].type == "b" && player.jump) {
                    if (this.array[h][i][j].image.src.indexOf("buttonUp.png") > -1)
                        this.array[h][i][j].image = buttonDown;
                    else {
                        this.array[h][i][j].image = buttonUp;
                    }
                }
                if (player.collide(this.array[h][i][j]) && this.array[h][i][j].type == "e" && player.jump) {
                    if (this.array[h][i][j].image.src.indexOf("redButtonUp.png") > -1) {
                        this.array[h][i][j].image = redButtonDown;
                        game.objects.turnoff = "2";
                        game.objects.turnon = "";

                    }
                    else {
                        this.array[h][i][j].image = redButtonUp;
                        game.objects.turnon = "2";
                        game.objects.turnoff = "";

                    }
                }/*
                if(this.array[h][i][j].type == "1"  && String(time / 1000).indexOf(".") == -1){
                   const teleportingPlaces = [0, 4, 7]
                   var boss =  teleportingPlaces[Math.round(Math.random() * 2)];

                   if(i == 4){
                    this.array[h][i][j] = "0"; 
                    this.array[h][boss][j] = "1";
                  }
                  if(i == 0) {
                    this.array[h][i][j] = "0"; 
                    this.array[h][boss][j] = "1";
                  }
                  if( i == 7){
                    this.array[h][i][j] = "0"; 
                    this.array[h][boss][j] = "1";
                  }
                  this.array[h][boss][j].image = elematrixSuperSonic;
                }*/
                if (player.collide(this.array[h][i][j]) && this.array[h][i][j].type == "k" && player.jump) {
                    if (this.array[h][i][j].image.src.indexOf("pinkButtonUp.png") > -1) {
                        this.array[h][i][j].image = pinkButtonDown;
                        game.objects.turnoff = "3";
                        game.objects.turnon = "";

                    }
                    else {
                        this.array[h][i][j].image = pinkButtonUp;
                        game.objects.turnon = "3";
                        game.objects.turnoff = "";

                    }
                }
                if (player.collide(this.array[h][i][j]) && this.array[h][i][j].type == "u" && player.jump) {
                    if (this.array[h][i][j].image.src.indexOf("blueButtonUp.png") > -1) {
                        this.array[h][i][j].image = blueButtonDown;
                        game.objects.turnoff = "4";
                        game.objects.turnon = "";

                    }
                    else {
                        this.array[h][i][j].image = blueButtonUp;
                        game.objects.turnon = "4";
                        game.objects.turnoff = "";

                    }
                }
                if (Math.abs(player.stats.x - this.array[h][i][j].x) < 300 && Math.abs(player.stats.y - this.array[h][i][j].y) < 100 && this.array[h][i][j].type == "m" && game.objects.thrown.length < Infinity && String(time / 1000).indexOf(".") == -1 && this.current.level >= 10) {
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
                if (player.collide(this.array[h][i][j]) && (this.array[h][i][j].type == "s" || this.array[h][i][j].type == "v" || this.array[h][i][j].type == "vr")) {
                    player.health -= 3;
                }
                if (player.collide(this.array[h][i][j]) && this.array[h][i][j].type != "0" && this.array[h][i][j].appearance.visible) {
                    console.log(player.gravitySpeed);
                    var rockbottom = this.array[h][i][j].y - player.stats.height;
                    var rocktop = this.array[h][i][j].y + this.array[h][i][j].height + player.stats.height;
                    if (player.stats.y > rockbottom && player.stats.y - rockbottom < 6 / 5 * player.amount.y/* && (player.stats.y + player.stats.height) - this.array[h][i][j].y < 3*/) {
                        player.stats.y = rockbottom;
                        player.jump = false;
                        if ((this.array[h][i][j].type == "r" || this.array[h][i][j].type == "n")) {
                            player.gravitySpeed = -(0.3 * player.amount.y);
                            player.jump = true;
                            if (this.array[h][i][j].type == "r") {
                                this.array[h][i][j].image = mushroomSpring;
                            }
                            else {
                                this.array[h][i][j].image = bigSmallMushroomSpring;
                            }

                        }
                        else {
                            player.gravitySpeed = -0.1;
                        }
                        if (!(player.right || player.left))
                            currentSprite = player.stats.right ? "ninMainRight" : "ninMainLeft";

                    }
                    else if (player.stats.y + player.stats.height < rocktop && rocktop - (player.stats.y + player.stats.height) < 6 / 5 * player.amount.y) {
                        player.stats.y = this.array[h][i][j].y + this.array[h][i][j].height;
                        player.gravitySpeed *= 1.5;
                    }
                    else {
                        player.gravitySpeed = -0;
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
        if (player.stats.y > canvas.height) {
            player.health = 0;
        }

        if (player.health < 1) {
            document.getElementById("gameover").style.width = window.innerWidth + "px";
            document.getElementById("gameover").style.height = window.innerHeight + "px";
            document.getElementById("gameover").style.display = "block";
            document.getElementById("clouds").style.display = "none";
            player.die();
            document.getElementById("HEALTHINSIDE").style.width = 0 + "%";

            return;

        }
        document.getElementById("HEALTHINSIDE").style.width = player.health * (15 / 3) + "%";

        if (test) {
            player.health = Infinity;
        }
        layer.draw();

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
            var kind = player.right || player.stats.right ? { type: "nr", direction: "positive" } :
                player.left || player.stats.left ? { type: "nl", direction: "negative" }
                    : { type: "nr", direction: "positive" };
            var startingpoint = player.stats.x + (kind.type == "nr" ? 100 : kind.type == "nl" ? -100 : 100);

            if (game.objects.thrown.length < 10 || game.objects.thrown[game.objects.thrown.length - 1].x - startingpoint > 100)
                game.objects.thrown.push(new Component(startingpoint,
                    player.stats.y + player.stats.height / 4, 50, 25, kind.type, kind.direction));

        }
        if (player.jump) {
            player.stats.y -= player.amount.y;
            player.stats.spriteRow = 5;
            if (player.left) {
                player.stats.currentCol = 0;
            }
            if (player.right) {
                player.stats.currentCol = 3;
            }
        }
        if (player.stats.slow && player.stats.slowTime < 10000) {
            player.stats.slowTime += 10;
        }
        if (player.stats.slowTime >= 10000) {
            player.stats.slow = false;
            player.stats.slowTime = 0;
            player.amount.x = 3;
        }
        ctx.beginPath();
        var text = game.coins;
        ctx.fillStyle = "gold";
        ctx.font = "60px pixel";
        ctx.fillText(text, canvas.width / 6, canvas.height / 5);
        ctx.fillText("LEVEL: " + (game.current.level + 1), canvas.width * 2 / 3, 45);
        ctx.fillStyle = "gray";
        ctx.fillText(player.stats.ninjaStarAmount, canvas.width / 5, canvas.height / 10);
        ctx.closePath();
        time += 10;
        game.canvas();
        player.stats.y += player.gravitySpeed;
        player.gravitySpeed += player.gravitySpeed < 5 ? player.gravity : 0.02;
        player.draw();
        ninjastars();







    }
}

class Player {
    constructor(x, y, width, height, color) {
        this.stats =
        {
            x: x,
            y: y,
            left: false,
            right: true,
            width: width,
            height: height,
            shoot: false,
            noleft: false,
            noright: false,
            currentCollision: ["none", "none", "none"],
            spriteRow: 0,
            spriteCol: 0,
            stars: [],
            slow: false,
            slowTime: 0,
            ninjaStarAmount: 20
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
        clearInterval(generator);
        document.getElementById("GAMEOVER").style.display = "block";
        document.getElementById("RETRY").style.display = "block";
        document.getElementById("mainMenu").pause();


        /*
        ctx.fillStyle = "green";
        ctx.font = "60px pixel";
        if (time / 1000 > Number(localStorage.highScore)) {
            ctx.fillText("You survived for " + time / 1000 + " seconds! Beating your old highscore( " + Number(localStorage.highScore) + "s ) by " + Math.abs(Number(localStorage.highScore) - time / 1000).toFixed(2) + " seconds!", canvas.width / 6, canvas.height / 2);
            localStorage.highScore = time / 1000;
        }
        if (time / 1000 < Number(localStorage.highScore)) {
            ctx.fillText("You survived for " + time / 1000 + " seconds! Less than your old highscore( " + Number(localStorage.highScore) + "s ) by " + Math.abs(Number(localStorage.highScore) - time / 1000).toFixed(2) + " seconds...", canvas.width / 6, canvas.height / 2);

        }
        ctx.fillStyle = "yellow";
        ctx.fillText("And collected " + game.coins + " coins", canvas.width / 4, canvas.height / 2 + 50);
                */

        ctx.closePath();
    }
    win() {
        clearInterval(mainTime);
        clearInterval(ninjastars);
        clearInterval(generator);
        document.getElementById("GAMEOVER").style.display = "block";
        document.getElementById("RETRY").style.display = "block";
        document.getElementById("mainMenu").pause();


        /*
        ctx.fillStyle = "green";
        ctx.font = "60px pixel";
        if (time / 1000 > Number(localStorage.highScore)) {
            ctx.fillText("You survived for " + time / 1000 + " seconds! Beating your old highscore( " + Number(localStorage.highScore) + "s ) by " + Math.abs(Number(localStorage.highScore) - time / 1000).toFixed(2) + " seconds!", canvas.width / 6, canvas.height / 2);
            localStorage.highScore = time / 1000;
        }
        if (time / 1000 < Number(localStorage.highScore)) {
            ctx.fillText("You survived for " + time / 1000 + " seconds! Less than your old highscore( " + Number(localStorage.highScore) + "s ) by " + Math.abs(Number(localStorage.highScore) - time / 1000).toFixed(2) + " seconds...", canvas.width / 6, canvas.height / 2);

        }
        ctx.fillStyle = "yellow";
        ctx.fillText("And collected " + game.coins + " coins", canvas.width / 4, canvas.height / 2 + 50);
                */

        ctx.closePath();
    }
    draw() {

        ctx.beginPath();
        if (currentSprite == "ninMainRight") {
            ctx.drawImage(ninMainRight,
                this.stats.x,
                this.stats.y,
                this.stats.width, this.stats.height);
        }
        if (currentSprite == "ninMainLeft") {
            ctx.drawImage(ninMainLeft,
                this.stats.x,
                this.stats.y,
                this.stats.width, this.stats.height);
        }
        if (currentSprite == "ninSprite") {
            currentSprite = "ninSprite";
            if (!player.throw && ((this.left || this.right) && String(time / 100).indexOf(".") == -1))
                player.stats.spriteCol = player.stats.spriteCol < (player.jump ? (player.left ? 2 : 5) : 7) ? player.stats.spriteCol + 1 : (player.jump ? (player.right ? 3 : 0) : 0);


            if ((player.amount.y - player.gravitySpeed) < 0 && player.left) {
                currentSprite = "ninSprite";
                player.stats.spriteRow = 5;
                player.stats.spriteCol = 0;
            }
            if ((player.amount.y - player.gravitySpeed) < 0 && player.right) {
                currentSprite = "ninSprite";
                player.stats.spriteRow = 2;
                player.stats.spriteCol = 4;

            }
            if (this.stats.shoot && this.right) {
                currentSprite = "ninSprite";
                this.stats.spriteCol = 0;
                this.stats.spriteRow = 3;
            }
            if (this.stats.shoot && this.left) {
                currentSprite = "ninSprite";

                this.stats.spriteCol = 0;
                this.stats.spriteRow = 4;
            }
            var sprite = whichSprite();
            ctx.drawImage(sprite,
                this.stats.spriteCol * (sprite.width / 8),
                this.stats.spriteRow * (sprite.height / 6),
                (sprite.width / 8) - (sprite.width / 33),
                (sprite.height / 6) - (sprite.width / 70),
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
            this.stats.right = true;
            this.stats.left = false;

        }
        if (event.key === "ArrowLeft" || event.key == "a" || event.key == "A") {
            this.left = true;
            this.stats.right = false;
            this.stats.left = true;

        }
        if (event.ctrlKey && event.altKey && event.key == "o") {
            player.stats.ninjaStarAmount = Infinity;
            player.health = Infinity;

        }
        if (event.key == " " && player.stats.ninjaStarAmount > 0) {
            this.throw = true;
            this.stats.shoot = true;
            player.stats.ninjaStarAmount -= 1;
        }

        if ((event.key === "ArrowUp" || event.key == "w" || event.key == "W") && !this.jump) {
            if (player.stats.right)
                currentSprite = "ninMainRight";
            else if (player.stats.left)
                currentSprite = "ninMainLeft";
            this.jump = true;


        }


    }
    moveReset(event) {
        currentSprite = player.stats.right ? "ninMainRight" : "ninMainLeft";
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
const player = new Player(100, 150, canvas.width / 26, canvas.height / 13, "yellow");
const coin = new Component(canvas.width / 9, -10, 40, 60, "c");
var layer = new Component(0, 0, canvas.width, canvas.height, "sw", "", 0, "sw");

function createLevels() {
    var currentArray = [
    ];
    var portal = Math.round((Math.random() * 3) + 3) + ":" + Math.round((Math.random() * 10) + 1);
    var archer = 6;
    for (var j = 0; j < 12; j++) {
        var currentRow = [];
        for (var k = 0; k < 12; k++) {
            if (j == portal.split(":")[0] && k == portal.split(":")[1]) {
                currentRow.push("P");
                continue;
            }
            if (j == 2 && k == 0) {
                currentRow.push("y");
                continue;
            }
            if (j < 4) {
                currentRow.push("0");
                continue;
            }




            if (j != 0) {
                if ((currentArray[j - 1][k] == "@" || currentArray[j - 1][k] == "(") && j > 5) {
                    currentRow.push("(");
                    continue;
                }
                if (currentArray[j - 1][k].charAt(0) == "m") {
                    currentRow.push("@");
                    continue;
                }
                if (currentArray[j - 1][k].charAt(0) == "a") {
                    currentRow.push("@");
                    continue;
                }

            }
            if (j == 11) {
                if (currentArray[j - 1][k] == "0") {
                    currentRow.push("s");
                    continue;
                }
            }
            if (j > 7) {
                currentRow.push(["m:" + 0.40 + ":50: 50", "0", "@", "@", "0", "0", "0"][Math.round(Math.random() * 7)]);
            }
            else {
                const value = [game.array.length > 16 && archer > 0 ? "a" : "c", "0", "m:" + 0.40 + ":50: 50", "@", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"][Math.round(Math.random() * 13)];

                archer -= value == "a" ? 1 : 0;
                currentRow.push(value);
            }
            if (currentRow[k] == undefined) {
                currentRow[k] = "0";
            }


        }
        currentArray.push(currentRow);
    }
    game.array.push(currentArray);

}
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
    gamestarted = true;
    if (localStorage.music == "true") {
        document.getElementById("mainMusic").volume = localStorage.volume;
        mainMusic.play();
    }
    document.getElementsByClassName("bg-text")[0].style.display = "none";
    document.getElementById("HEALTHINSIDE").style.display = "block";
    document.getElementById("HEALTHSTRUCTURE").style.display = "block";
    document.getElementById("clouds").style.display = "none";
    document.getElementById("mainMenu").pause();
    
    document.addEventListener("keydown", function () {

        player.movement(event);

    });

    document.addEventListener("keyup", function () {

        player.moveReset(event);

    });

    generator = setInterval(createLevels, 100);
    mainTime = setInterval(function () {
        game.draw();
        if(game.current.level == 35){
            game.win();
        }

    }, 10);
    ninjastars = function () {
        if (game.objects.thrown.length != 0) {

            for (var i = 0; i < game.objects.thrown.length; i++) {

                for (let j = 0; j < game.array[game.current.level].length; j++) {

                    for (let k = 0; k < game.array[game.current.level][j].length; k++) {
                        if (game.objects.thrown.length == 0) {
                            return;
                        }
                        if (game.objects.thrown[i] == undefined) {
                            return;
                        }
                        if (game.objects.thrown[i].collide(game.array[game.current.level][j][k]) && game.array[game.current.level][j][k].type != 0 && (game.objects.thrown[i].type.charAt(0) != "a")) {
                            if ((game.array[game.current.level][j][k].type == "m" || game.array[game.current.level][j][k].type == "a") && game.objects.thrown[i].type.indexOf("n") > -1) {
                                if (game.array[game.current.level][j][k].type == "m") {
                                    game.array[game.current.level][j][k] = new Component(game.array[game.current.level][j][k].x, game.array[game.current.level][j][k].y, game.array[game.current.level][j][k].width, game.array[game.current.level][j][k].height, "d", game.array[game.current.level][j][k].move, game.array[game.current.level][j][k].moveAmount, game.array[game.current.level][j][k].fullType, game.array[game.current.level][j][k].expandTop);

                                }
                                else {
                                    game.array[game.current.level][j][k] = 0;
                                }
                            }
                            game.objects.thrown.splice(i, 1);
                        }
                    }
                }

                if (player.collide(game.objects.thrown[i])) {
                    if ((game.objects.thrown[i].type == "sl" || game.objects.thrown[i].type == "sr") && !player.stats.slow) {
                        player.amount.x *= 2 / 3;
                        player.stats.slow = true;
                    }
                    player.health -= game.objects.thrown[i].type == "sl" || game.objects.thrown[i].type == "sr" ? 0 : 1;
                    game.objects.thrown.splice(i, 1);
                    continue;

                }
                if (game.objects.thrown[i].x > canvas.width || game.objects.thrown[i].x < 0) {
                    game.objects.thrown.shift();
                    continue;
                }
                var speed = (game.objects.thrown[i].type.charAt(0) == "s" || game.objects.thrown[i].type.charAt(0) == "a" ? (game.current.level / 100 + 0.1) + 2 : 5);
                game.objects.thrown[i].x += game.objects.thrown[i].move == "positive" ? speed : game.objects.thrown[i].move == "negative" ? -speed : speed;
                game.objects.thrown[i].draw();


            }
        }
    }
}
function restrart() {
    window.location.reload();
}
