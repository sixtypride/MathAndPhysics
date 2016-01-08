var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');


var angle = 40;
var speed = 6;
var bounce = -0.8;
var gravity = 0.8;

var lines = [];

var ball = new Ball(context, 10);

ball.x = 100;
ball.y = 0;

var radian = angle * Math.PI/180;
ball.vx = Math.cos(radian) * speed;
ball.vy = Math.sin(radian) * speed;

ball.draw();


var line0 = new Line(context, 300, 10 * Math.PI/180);
line0.x = 0;
line0.y = 50;
line0.draw();
lines.push(line0);


var line1 = new Line(context, 300, -10 * Math.PI/180);
line1.x = 350;
line1.y = 150;
line1.draw();
lines.push(line1);

var line2 = new Line(context, 300, 10 * Math.PI/180);
line2.x = 0;
line2.y = 150;
line2.draw();
lines.push(line2);

var line3 = new Line(context, 300, -10 * Math.PI/180);
line3.x = 350;
line3.y = 250;
line3.draw();
lines.push(line3);

var line4 = new Line(context, 300, 10 * Math.PI/180);
line4.x = 0;
line4.y = 250;
line4.draw();
lines.push(line4);

var line5 = new Line(context, 300, -10 * Math.PI/180);
line5.x = 350;
line5.y = 350;
line5.draw();
lines.push(line5);

var line6 = new Line(context, 700, 30 * Math.PI/180);
line6.x = 0;
line6.y = 350;
line6.draw();
lines.push(line6);


requestAnimationFrame(loop);

function loop() {

    context.clearRect(0,0, canvas.width, canvas.height);

    ball.vy += gravity;
    ball.x += ball.vx;
    ball.y += ball.vy;

    for(var i = 0; i < lines.length; i++)
    {
        checkLine(lines[i]);
        lines[i].draw();
    }

    if(ball.x > canvas.width - ball.radius)
    {
        ball.x = canvas.width - ball.radius;
        ball.vx *= bounce;
    }
    else if(ball.x < ball.radius)
    {
        ball.x = ball.radius;
        ball.vx *= bounce;
    }
    else if(ball.y > canvas.height - ball.radius)
    {
        ball.y = canvas.height - ball.radius;
        ball.vy *= bounce;
    }
    else if(ball.y < ball.radius)
    {
        ball.y = ball.radius;
        ball.vy *= bounce;
    }

    ball.draw();

    requestAnimationFrame(loop);
}

function checkLine(line) {

    if(ball.x > line.x && ball.x < line.x + Math.cos(line.radian) * line.length)
    {
        var cos = Math.cos(line.radian);
        var sin = Math.sin(line.radian);

        var x1 = ball.x - line.x;
        var y1 = ball.y - line.y;

        var y2 = cos * y1 - sin * x1;

        var vy1 = cos * ball.vy - sin * ball.vx;

        if(y2 > -ball.radius && y2 < vy1)
        {
            y2 = -ball.radius;

            var x2 = cos * x1 + sin * y1;

            var vx1 = cos * ball.vx + sin * ball.vy;

            vy1 *= bounce;

            x1 = cos * x2 - sin * y2;
            y1 = cos * y2 + sin * x2;

            ball.vx = cos * vx1 - sin * vy1;
            ball.vy = cos * vy1 + sin * vx1;

            ball.x = line.x + x1;
            ball.y = line.y + y1;
        }
    }
}