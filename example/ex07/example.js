var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

var currentLine;
var lines = [];
var lineIntersections = [];


function windowToCanvas(canvas, x, y) {
    var bbox = canvas.getBoundingClientRect();

    return {
        x: x - bbox.left * (canvas.width / bbox.width),
        y: y - bbox.top * (canvas.height / bbox.height)
    };
}

function renderLine() {
    for (var i = 0; i < lines.length; i++) {
        lines[i].draw();
    }
    if (currentLine != null)
        currentLine.draw();
}

function renderLineIntersection() {
    for (var i = 0; i < lineIntersections.length; i++) {
        if (lineIntersections[i] == null) continue;

        context.beginPath();
        context.arc(lineIntersections[i].x, lineIntersections[i].y, 5, 0, Math.PI * 2);
        context.fill();
    }
}

function isContainsPoint(x, y, line) {
    var dx1 = line.endX - x,
        dx2 = line.startX - x,
        dy1 = line.endY - y,
        dy2 = line.startY - y;

    var len1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
    var len2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

    if(Math.floor(len1 + len2) == Math.floor(line.getLength())) return true;

    return false;
}

function findLineIntersection(line1, line2) {
    var x, y;

    var m1 = (line1.endY - line1.startY) / (line1.endX - line1.startX);
    var m2 = (line2.endY - line2.startY) / (line2.endX - line2.startX);

    if (m1 == m2) return null;

    x = (m1 * line1.endX - m2 * line2.endX + line2.endY - line1.endY) / (m1 - m2);
    y = m1 * (x - line1.endX) + line1.endY;

    if(isContainsPoint(x, y, line1) == false) return null;
    if(isContainsPoint(x, y, line2) == false) return null;

    return {x: x, y: y};
}
canvas.onmousemove = function (e) {
    if (currentLine == null) return;

    var loc = windowToCanvas(canvas, e.clientX, e.clientY);

    currentLine.endX = loc.x;
    currentLine.endY = loc.y;

    lineIntersections = [];
    for (var i = 0; i < lines.length; i++) {
        lineIntersections.push(findLineIntersection(currentLine, lines[i]));
        for (var j = i + 1; j < lines.length; j++) {
            lineIntersections.push(findLineIntersection(lines[i], lines[j]));
        }
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    renderLine();
    renderLineIntersection();
};

canvas.onmousedown = function (e) {
    var loc = windowToCanvas(canvas, e.clientX, e.clientY);

    currentLine = new Line(context);
    currentLine.startX = loc.x;
    currentLine.startY = loc.y;
};

canvas.onmouseup = function (e) {
    var loc = windowToCanvas(canvas, e.clientX, e.clientY);

    currentLine.endX = loc.x;
    currentLine.endY = loc.y;

    lines.push(currentLine);
    currentLine = null;
};