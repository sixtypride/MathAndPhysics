var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

var startX = 100;
var startY = 100;

function Ball() {
    this.x = 0;
    this.y = 0;
    this.radius = 5;
}

Ball.prototype.draw = function() {
    context.save();
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.fillStyle = "gray";
    context.fill();
    context.restore();
}

var ball = new Ball();

requestAnimationFrame(animate);

var radian = 0;
var drawCount = 0;

function animate() {
    //context.clearRect(0,0, canvas.width, canvas.height);
    radian += 0.05;

    ball.x = startX + 50 * Math.cos(radian);
    ball.y = startY + 50 * Math.sin(radian);

    ball.draw();

    if(radian > Math.PI * 2)
    {
        radian = 0;
        //startX += 80;
        drawCount++;

        if(drawCount == 1)
        {
            return;
        }
    }
    requestAnimationFrame(animate);
}




