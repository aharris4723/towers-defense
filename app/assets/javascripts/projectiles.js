class Projectile {
    constructor(x, y, target, damage) {
        this.canvas = document.getElementById("mycanvas");
        this.content = canvas.getContext("2d");
        this.target = target;
        this.damage = damage;
        this.x = x;
        this.y = y;
    }
    draw() {
        this.content.moveTo(this.x, this.y);
        this.content.lineWidth = 3;
        this.content.strokeStyle = "red";
        this.content.lineTo(this.target.x + 40, this.target.y + 40);
        this.target.health -= this.damage;
        this.content.stroke();
    }
}