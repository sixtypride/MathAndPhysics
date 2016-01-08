var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

var x = 0,
    y = 0,
    width = 100,
    height = 50;

context.fillRect(x, y, width, height);

context.fillStyle = "red";

requestAnimationFrame(animate);

var angle = 0;

function animate() {
    context.clearRect(0,0, canvas.width, canvas.height);
    context.save();

    angle += 10;

    if(angle >= 360)
    {
        angle = 0;
    }
    context.transform(1, Math.cos(angle * Math.PI/180), Math.sin(angle * Math.PI/180), 1, x + width/2, y + height/2);
    x = -width/2;
    y = -height/2;
    context.fillRect(x, y, width, height);
    context.restore();

    x = 100;
    y = 50;

    requestAnimationFrame(animate);

}






