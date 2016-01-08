var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

var speed = 7;
var arrows = [];

var shooter = new Shooter(context);

shooter.x = 0;
shooter.y = canvas.height;

function windowToCanvas(canvas, x, y) {
    var bbox = canvas.getBoundingClientRect();

    return {
        x: x - bbox.left * (canvas.width / bbox.width),
        y: y - bbox.top * (canvas.height / bbox.height)
    };
}

requestAnimationFrame(loop);

canvas.onmousemove = function (e) {
    var loc = windowToCanvas(canvas, e.clientX, e.clientY);

    shooter.angle = Math.atan2(loc.y - shooter.y, loc.x - shooter.x);
};

canvas.onmousedown = function (e) {
    var loc = windowToCanvas(canvas, e.clientX, e.clientY);

    shooter.angle = Math.atan2(loc.y - shooter.y, loc.x - shooter.x);
    shootArrow();
};

function shootArrow() {
    var arrow = new Arrow(context);
    var angle = shooter.angle;

    arrow.vx = Math.cos(angle) * speed;
    arrow.vy = Math.sin(angle) * speed;
    arrow.x = shooter.x;
    arrow.y = shooter.y;

    arrows.push(arrow);
}

function loop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < arrows.length; i++) {
        var arrow = arrows[i];

        arrow.angle = Math.atan2(arrow.vy, arrow.vx);
        arrow.vy += arrow.gravity;
        arrow.x += arrow.vx;
        arrow.y += arrow.vy;

        arrow.draw();


        if (arrow.x < 0 - 100 ||
            arrow.x > canvas.width + 100 ||
            arrow.y > canvas.height + 100 ||
            arrow.y < 0 - 100) {
            arrows.splice(arrows.indexOf(arrow), 1);
        }
    }

    shooter.draw();

    requestAnimationFrame(loop);
}
