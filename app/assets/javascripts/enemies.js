class Goblin {
    constructor(health) {
        this.canvas = document.getElementById('mycanvas');
        this.context = this.canvas.getContext("2d");
        this.health = health;
        this.x = -6.0;
        this.y = -25.0;
        this.speed = 2.0;
        this.image = document.getElementById("image");
        this.width = 80.0;
        this.height = 80.0;
    }
    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    update() {
        if (this.x < 360 && this.y == -25.0) {
            this.x += this.speed;
        }
        if (this.x == 360 && this.y < 135) {
            this.y += this.speed;
        }
        if (this.y == 135 && this.x > 48) {
            this.x -= this.speed;
        }
        if (this.x == 48 && this.y != -25.0 && this.y < 225) {
            this.y += this.speed;
        }
    }
}