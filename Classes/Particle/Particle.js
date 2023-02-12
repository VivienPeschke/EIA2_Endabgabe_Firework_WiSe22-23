"use strict";
var Firework;
(function (Firework) {
    class Particle {
        color;
        radius;
        speed;
        opacity;
        lifetime;
        position;
        constructor(_color, _position, _lifetime) {
            let speed = new Firework.Vector(Math.random() * Firework.getRandomNumber(-30, 30), Math.random() * Firework.getRandomNumber(-20, 20));
            this.speed = speed;
            this.position = new Firework.Vector(_position.x, _position.y);
            this.color = _color;
            this.lifetime = _lifetime;
            this.radius = Math.floor((Math.random() * 20) + 2);
            this.opacity = 1;
        }
        draw() {
            //
        }
        move() {
            let offset = this.speed;
            this.position.add(offset);
            this.lifetime--;
            this.opacity--;
        }
    }
    Firework.Particle = Particle;
})(Firework || (Firework = {}));
//# sourceMappingURL=Particle.js.map