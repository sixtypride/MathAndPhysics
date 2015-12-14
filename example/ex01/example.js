var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

var linePoint0 = {x: 10, y: 100},
    linePoint1 = {x: 300, y: 200},
    linePoint2 = {x: 150, y: 300},
    linePoint3 = {x: 300, y: 100};

var lineInfo0 = {start: linePoint0, end: linePoint1},
    lineInfo1 = {start: linePoint2, end: linePoint3};

function drawLine(lineInfo) {
    context.beginPath();
    context.moveTo(lineInfo.start.x, lineInfo.start.y);
    context.lineTo(lineInfo.end.x, lineInfo.end.y);
    context.stroke();
}

function drawPoint(pt) {
    if (pt == null) return;

    context.beginPath();
    context.fillStyle = 'red';
    context.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
    context.fill();
}

function slopeBetweenPoints(lineInfo) {
    var value = (lineInfo.end.y - lineInfo.start.y) / (lineInfo.end.x - lineInfo.start.x);
    return value == Infinity ? 0 : value;
}

function lineIntersect(lineInfo0, lineInfo1) {
    var pt = {};

    var slope0 = slopeBetweenPoints(lineInfo0);
    var slope1 = slopeBetweenPoints(lineInfo1);

    if (slope0 !== slope1) {
        pt.x = Math.round((slope0 * lineInfo0.start.x - slope1 * lineInfo1.start.x + lineInfo1.start.y - lineInfo0.start.y) / (slope0 - slope1));
        pt.y = Math.round(slope0 * (pt.x - lineInfo0.start.x) + lineInfo0.start.y);

        return pt;
    }
    return null;
}

drawLine(lineInfo0);
drawLine(lineInfo1);
drawPoint(lineIntersect(lineInfo0, lineInfo1));