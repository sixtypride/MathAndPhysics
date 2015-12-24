function Shooter (context) {
    this._context = context;

    this.width = 30;
    this.height = 10;
    this.x = 0;
    this.y = 0;
    this.angle = 0;
};

Shooter.prototype = {
    draw: function() {
        this._context.save();

        this._context.translate(this.x, this.y);
        this._context.rotate(this.angle);

        this._context.fillStyle = "red";
        this._context.fillRect(0, -this.height / 2, this.width, this.height);

        this._context.beginPath();
        this._context.arc(0,0,20,0,Math.PI*2);
        this._context.fill();

        this._context.restore();
    }
}