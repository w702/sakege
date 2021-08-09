var canvas = document.getElementById("pong");
var ctx = canvas.getContext("2d");

var RocketX = (canvas.width / 2) - 25;  
var RocketY = 530;
var RocketWidth = 25;
var RocketHeight = 40;

var rightPress = false;
var leftPress = false;
var upPress = false;
var downPress = false;

var x = Math.random()*400;
var a = Math.random()*400;
var b = Math.random()*400;
var c = Math.random()*400;
var d = Math.random()*400;
var e = Math.random()*400;

var y = 10;

var ballRadius = 10;

var dy = 3;
var dx = 3 * Math.random();
var da = 3 * Math.random();
var db = 3 * Math.random();
var dc = 3 * Math.random();
var dd = 3 * Math.random();
var de = 3 * Math.random();

function drawRocket() {
    ctx.beginPath();
    ctx.rect(RocketX, RocketY, RocketWidth, RocketHeight);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function drawBallA() {
    ctx.beginPath();
    ctx.arc(a, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function drawBallB() {
    ctx.beginPath();
    ctx.arc(b, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
function drawBallC() {
    ctx.beginPath();
    ctx.arc(c, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
function drawBallD() {
    ctx.beginPath();
    ctx.arc(d, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
function drawBallE() {
    ctx.beginPath();
    ctx.arc(e, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawRocket();
    drawBall();
    drawBallA();
    drawBallB();
    drawBallC();
    drawBallD();
    drawBallE();

    if(y + dy < ballRadius | y + dy > canvas.height - ballRadius) {
        dy=-dy;
    }
    if(x + dx < ballRadius | x + dx > canvas.width  - ballRadius){
        dx=-dx;
    }
    if(a + da < ballRadius | a + da > canvas.width  - ballRadius){
        da=-da;
    }
    if(b + db < ballRadius | b + db > canvas.width  - ballRadius){
        db=-db;
    }
    if(c + dc < ballRadius | c + dc > canvas.width  - ballRadius){
        dc=-dc;
    }
    if(d + dd < ballRadius | d + dd > canvas.width  - ballRadius){
        dd=-dd;
    }
    if(e + de < ballRadius | e + de > canvas.width  - ballRadius){
        de=-de;
    }

    y += dy;
    x += dx;
    a += da;
    b += db;
    c += dc;
    d += dd;
    e += de;

    if(y + dy > RocketY && y + dy < RocketY + RocketHeight) {
        if(x > RocketX && x < RocketX + RocketWidth) {
            alert("GAME_OVER");
            document.location.reload();
        }
        if(a > RocketX && a < RocketX + RocketWidth) {
            alert("GAME_OVER");
            document.location.reload();
        }
        if(b > RocketX && b < RocketX + RocketWidth) {
            alert("GAME_OVER");
            document.location.reload();
        }
        if(c > RocketX && c < RocketX + RocketWidth) {
            alert("GAME_OVER");
            document.location.reload();
        }
        if(d > RocketX && d < RocketX + RocketWidth) {
            alert("GAME_OVER");
            document.location.reload();
        }
        if(e > RocketX && e < RocketX + RocketWidth) {
            alert("GAME_OVER");
            document.location.reload();
        }
    }
    //キーを押したときの反応
    if(rightPress && RocketX < canvas.width - RocketWidth) {
        RocketX += 3;
    }
    else if(leftPress && RocketX > 0) {
        RocketX -= 3;
    }
    else if(upPress && RocketY > 0) {
        RocketY -= 3;
    }
    else if(downPress && RocketY < 560) {
        RocketY += 3;
    }
}




//イベントと追加する
//初めはfalseで後からtrueにする
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPress = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPress = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPress = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPress = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPress = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPress = false;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPress = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPress = false;
    }
}


setInterval(draw, 10);
draw();