"use strict";
var Firework;
(function (Firework) {
    class Particle {
        position;
        amount;
        size;
        color;
        lifetime;
        opacity;
        velocity;
        constructor(_color, _position, _lifetime) {
            this.velocity = new Firework.Vector(this.velocity.x, this.velocity.y);
            //this.velocity = _velocity;
            this.position = new Firework.Vector(this.position.x, this.position.y);
            this.position = _position;
            this.color = _color;
            this.size = Math.floor(Math.random());
            this.opacity = 1;
            this.lifetime = _lifetime;
        }
        move() {
            let offset = this.velocity;
            this.position.add(offset);
        }
    }
    Firework.Particle = Particle;
})(Firework || (Firework = {}));
//# sourceMappingURL=Particle.js.map