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

    angle += 1;

    if(angle >= 180)
    {
        angle = 0;
    }
    console.log(Math.tan(angle * Math.PI/180) * 0.1);
    context.transform(1, Math.tan(angle * Math.PI/180) * 0.1, Math.tan(angle * Math.PI/180) * 0.1, 1, x + width/2, y + height/2);
    x = -width/2;
    y = -height/2;
    context.fillRect(x, y, width, height);
    context.restore();

    x = 100;
    y = 50;

    requestAnimationFrame(animate);

}






