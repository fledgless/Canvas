let canvas = document.querySelector("#canvas");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;
let ctx = canvas.getContext("2d");
    

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
       if (canvas.getContext) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();

        if (y + dy < 0 || y + dy > canvas.height) {
            dy = -dy;
        }

        if (x + dx < 0 || x + dx > canvas.width) {
            dx = -dx;
        }

        x += dx;
        y += dy;
    }
}

setInterval(draw, 50);
