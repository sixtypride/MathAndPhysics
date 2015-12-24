var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

draw("black");

var angle = 45 * Math.PI/180;

context.beginPath();
context.arc(0,0,100,0,Math.PI*2);
context.fill();

context.transform(1,0,0,1,100,100);

context.transform(Math.cos(angle),Math.sin(angle),-Math.sin(angle),Math.cos(angle),0,0);
context.transform(2,0,0,2, 0, 0);

draw("red");

function draw(style) {
    context.save();
    context.globalAlpha = 0.5;
    context.fillStyle = style;
    context.fillRect(-50,-50,100,100);
    context.restore();
}

