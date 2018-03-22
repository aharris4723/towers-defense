class Game {
    constructor() {
        this.canvas = document.getElementById('mycanvas');
        this.context = this.canvas.getContext("2d");
        this.enemies = [];
        this.towers = [];
        this.towers1 = [];
        this.projectiles = [];
        this.check = false;
        this.check = true;
        this.checkroads = true;
        this.road_x = [0.0, 42.0, 84.0, 126.0, 168.0, 210.0, 252.0, 294.0, 336.0, 378.0, 384.0, 384.0, 384.0, 384.0, 384.0, 342.0, 298.0, 254.0, 210.0, 166.0, 122.0, 78.0, 74.0, 74.0];
        this.road_y = [11.0, 11.0, 11.0, 11.0, 11.0, 11.0, 11.0, 11.0, 11.0, 11.0, 45.0, 79.0, 113.0, 147.0, 181.0, 178.0, 178.0, 178.0, 178.0, 178.0, 178.0, 178.0, 212.0, 246.0];
        this.cash = 100;
        this.count = 10;
        this.upgradeCost = 200;
        this.damage = 1;
        this.score = 0
        this.lives = 5;

    }
    addenemy(health) {
        var goblin = new Goblin(health);
        this.enemies.push(goblin);
    }
    addTower(xcord, ycord, damage) {
        var tower = new Tower(xcord, ycord, damage);
        this.checkroads = true;
        for (var z = 0; z < this.road_x.length; z++) {
            var distRoadX = (tower.x - 10) - this.road_x[z];
            var distRoadY = (tower.y + 6) - this.road_y[z];
            var distRoad = (distRoadX * distRoadX) + (distRoadY * distRoadY);
            if (distRoad < 2500) {
                this.checkroads = false;
            }
        }
        if (this.towers.length == 0 && this.checkroads === true) {
            this.cash -= 50;
            this.towers.push(tower);
        } else if (this.towers.length >= 1) {
            this.check = true;
            for (var i = 0; i < this.towers.length; i++) {
                var distancex = (tower.x + 20) - (this.towers[i].x + 20);
                var distancey = (tower.y + 25) - (this.towers[i].y + 25);
                var distance = (distancex * distancex) + (distancey * distancey);
                if (distance < 500) {
                    this.check = false;
                }
            }
            if (this.check === true && this.checkroads === true && this.cash >= 50) {
                this.cash -= 50;
                this.towers.push(tower);

            }
        }
    }

    addTower1(xcord, ycord, damage) {
        var tower1 = new Tower1(xcord, ycord, damage);
        this.checkroads = true;
        for (var z = 0; z < this.road_x.length; z++) {
            var distRoadX = (tower1.x - 10) - this.road_x[z];
            var distRoadY = (tower1.y + 6) - this.road_y[z];
            var distRoad = (distRoadX * distRoadX) + (distRoadY * distRoadY);
            if (distRoad < 2500) {
                this.checkroads = false;
            }
        }
        if (this.towers.length == 0 && this.checkroads === true) {
            this.cash -= 100;
            this.towers.push(tower1);
        } else if (this.towers.length >= 1) {
            this.check = true;
            for (var i = 0; i < this.towers.length; i++) {
                var distancex = (tower1.x + 20) - (this.towers[i].x + 20);
                var distancey = (tower1.y + 25) - (this.towers[i].y + 25);
                var distance = (distancex * distancex) + (distancey * distancey);
                if (distance < 500) {
                    this.check = false;
                }
            }
            if (this.check === true && this.checkroads === true && this.cash >= 100) {
                this.cash -= 100;
                this.towers.push(tower1);

            }
        }
    }

    addProjectile(x, y, target, damage) {
        var projectile = new Projectile(x, y, target, damage);
        this.projectiles.push(projectile);
    }
    draw() {
        this.context.beginPath();
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].draw();
        }
        for (let i = 0; i < this.towers.length; i++) {
            this.towers[i].drawTower();
        }
        for (let i = 0; i < this.projectiles.length; i++) {
            if (this.projectiles[i] != null) {
                this.projectiles[i].draw();
                this.projectiles[i] = null;
            }
        }
    }
    upgradeTower() {
        this.damage = this.damage * 2;
        this.cash -= this.upgradeCost;
        this.upgradeCost = this.upgradeCost * 3;
    }

    update() {
        document.getElementById('money').innerHTML = "Cash: " + this.cash;
        document.getElementById('upgradeMultiplier').innerHTML = "Multiplier: " + mainloop.damage + "x";
        document.getElementById('upgradeCost').innerHTML = "Cost: $" + mainloop.upgradeCost;
        document.getElementById('score').innerHTML = "Score: " + mainloop.score;
        document.getElementById('lives').innerHTML = "Lives: " + mainloop.lives;
        for (var i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i].health > 0) {
                this.enemies[i].update()
                if (this.enemies[i].y == 225) {
                    this.enemies.splice(i, i + 1);
                    this.lives -= 1
                }
                if (this.lives === 0) {
                    this.enemies = []
                    this.towers = []
                    return window.location.reload();
                }
            } else if (this.enemies[i].health <= 0) {
                this.enemies.splice(i, 1);
                this.count += 0.5;
                this.cash += this.count / 4;
                this.score += 100;
            }
        }
        for (var i = 0; i < this.towers.length; i++) {
            this.towers[i].findTarget();
        }
    }
}

var mainloop = new Game();

var playButton = document.getElementById('play_button');
var xcord;
var ycord;
var rect;
var restart = document.getElementById('restart');

restart.addEventListener('click', function() {

    window.location.reload()
});

playButton.addEventListener('click', function() {
    document.getElementById('tower1').style.display = 'block';
    document.getElementById('tower2').style.display = 'block';
    document.getElementById('upgrade').style.display = 'block';
    document.getElementById('money').style.display = 'inline-block';
    document.getElementById('score').style.display = 'block';
    document.getElementById('lives').style.display = 'block';
    document.getElementById('start').style.display = 'block';
    document.getElementById('pause').style.display = 'block';
    document.getElementById('restart').style.display = 'block';
    document.getElementById('play_button').style.display = 'none';

    setInterval(function() {
        mainloop.addenemy(mainloop.count / 2);

    }, 2000);
    setInterval(function() {
        for (var i = 0; i < mainloop.towers.length; i++) {
            if (mainloop.towers[i].target != null) {
                mainloop.addProjectile(mainloop.towers[i].x, mainloop.towers[i].y, mainloop.towers[i].target, (mainloop.towers[i].damage * mainloop.damage));
            }
        }
    }, 1000 / 2);
    setInterval(function() {
        mainloop.update();
        mainloop.draw();
    }, 1000 / 30);
});

var towerArcher = document.getElementById('tower1')
towerArcher.addEventListener('dragend', function(event) {
    canvas = document.getElementById('mycanvas');
    rect = canvas.getBoundingClientRect();
    mainloop.addTower((event.clientX) - rect.left, (event.clientY) - rect.top, mainloop.damage);

});

var towerSword = document.getElementById('tower2')
towerSword.addEventListener('dragend', function(event) {
    canvas = document.getElementById('mycanvas');
    rect = canvas.getBoundingClientRect();
    mainloop.addTower1((event.clientX) - rect.left, (event.clientY) - rect.top, mainloop.damage);

});

var upgrade = document.getElementById("upgrade");
upgrade.addEventListener("click", function() {
    if (mainloop.cash >= mainloop.upgradeCost) {
        mainloop.upgradeTower();

    }
})