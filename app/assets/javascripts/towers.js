class Tower {
    constructor(x, y, damage) {
        this.canvas = document.getElementById('mycanvas');
        this.context = this.canvas.getContext("2d");
        this.towerImage = document.getElementById('tower_image');
        this.width = 45.0;
        this.height = 45.0;
        this.damage = damage;
        this.x = x;
        this.y = y;
        this.xcord = x - 25.0;
        this.ycord = y - 25.0;
        this.range = 80;
        this.target = null;
    }
    drawTower() {
        this.context.drawImage(this.towerImage, this.xcord, this.ycord, this.width, this.height);
    }
    findTarget() {
        if (mainloop.enemies.length === 0) {
            this.target = null;
        }
        for (var i = 0; i < mainloop.enemies.length; i++) {
            var distancex = Math.abs(mainloop.enemies[i].x + 37) - Math.abs(this.x + 12.5);
            var distancey = Math.abs(mainloop.enemies[i].y + 48) - Math.abs(this.y + 12.5);
            var distance = (distancex * distancex) + (distancey * distancey);
            var range = this.range * this.range;
            if (distance < range) {
                this.target = mainloop.enemies[i];
                return;

            }
            if (distance > (range)) {
                this.target = null;
            }
        }
    }
}

class Tower1 {
    constructor(x, y, damage) {
        this.canvas = document.getElementById('mycanvas');
        this.context = this.canvas.getContext("2d");
        this.damage = damage * 4;
        this.towerImage1 = document.getElementById('tower_image1');
        this.width = 45.0;
        this.height = 45.0;
        this.x = x;
        this.y = y;
        this.xcord = x - 25.0;
        this.ycord = y - 25.0;
        this.range = 59;
        this.target = null;

    }
    drawTower() {
        this.context.drawImage(this.towerImage1, this.xcord, this.ycord, this.width, this.height);
    }
    findTarget() {
        if (mainloop.enemies.length === 0) {
            this.target = null;
        }
        for (var i = 0; i < mainloop.enemies.length; i++) {
            var distancex = Math.abs(mainloop.enemies[i].x + 37) - Math.abs(this.x + 12.5);
            var distancey = Math.abs(mainloop.enemies[i].y + 48) - Math.abs(this.y + 12.5);
            var distance = (distancex * distancex) + (distancey * distancey);
            var range = this.range * this.range;
            if (distance < range) {
                this.target = mainloop.enemies[i];
                return;

            }
            if (distance > (range)) {
                this.target = null;
            }
        }
    }

}