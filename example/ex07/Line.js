function Line(context) {
    this._context = context;
    this.startX;
    this.startY;
    this.endX;
    this.endY;
}

Line.prototype = {
    draw: function() {
        this._context.save();

        this._context.beginPath();
        this._context.moveTo(this.startX, this.startY);
        this._context.lineTo(this.endX, this.endY);

        this._context.stroke();

        this._context.restore();
    },
    getLength: function() {
        return Math.sqrt((this.endX-this.startX) * (this.endX-this.startX) + (this.endY-this.startY)* (this.endY-this.startY));
    }
}