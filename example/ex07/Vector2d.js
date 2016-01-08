function Vector2d(x, y) {
    this.vx = x;
    this.vy = y;
}

Vector2d.prototype = {
    add: function (vec) {
        return new Vector2D(this.vx + vec.vx, this.vy + vec.vy);
    },
    sub: function (vec) {
        return new Vector2D(this.vx - vec.vx, this.vy - vec.vy);
    },
    scale: function (scale) {
        return new Vector2D(this.vx * scale, this.vx * scale);
    },
    length: function () {
        return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    },
    normalize: function () {
        var len = this.length();
        return new Vector2D(this.vx / len, this.vy / len);
    },
    rotate: function (angle) {
        var rad = angle * (Math.PI/180);
        var cos = Math.cos(rad);
        var sin = Math.sin(rad);
        return new Vector2D(cos * this.vx - sin * this.vy, cos * this.vy + sin * this.vx);
    },
    dotProduct: function (vec) {
        return new Vector2D(this.vx * vec.vx, this.vy * vec.vy);
    }
}