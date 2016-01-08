function Line(context, length, radian) {
    this._context = context;
    this.x = 0;
    this.y = 0;
    this.radian = radian;
    this.length = length;
}

Line.prototype = {
    draw: function() {
        this._context.save();

        this._width = Math.cos(this.radian) * this.length;
        this._height = Math.sin(this.radian) * this.length;

        this._context.translate(this.x, this.y);
        this._context.beginPath();
        this._context.arc(0,0,2, 0, Math.PI * 2);
        this._context.fill();
        this._context.lineWidth = 1;
        this._context.moveTo(0, 0);
        this._context.lineTo(this._width, this._height);
        this._context.strokeStyle = "black";
        this._context.stroke();

        this._context.restore();
    }
}

