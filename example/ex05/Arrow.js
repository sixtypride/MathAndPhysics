function Arrow(context) {
    this._context = context;

    this.width = 30;
    this.height = 2;
    this.angle = 0;
    this.vx = 0;
    this.vy = 0;
    this.x = 0;
    this.y = 0;
    this.gravity = 0.09;

    this.radius = 0;
}

Arrow.prototype = {
    draw: function () {
        this._context.save();

        this._context.translate(this.x, this.y);
        this._context.rotate(this.angle);

        this._context.fillStyle = "gray";
        this._context.fillRect(-this.width, -this.height / 2, this.width, this.height);

        this._context.beginPath();
        this._context.arc(0,0, 5, 0, Math.PI * 2);
        this._context.fillStyle = "blue";
        this._context.fill();

        this._context.restore();
    }
}