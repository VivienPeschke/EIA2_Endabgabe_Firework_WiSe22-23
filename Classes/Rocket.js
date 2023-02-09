"use strict";
var Firework;
(function (Firework) {
    class Rocket {
        position;
        color;
        shape;
        lifetime;
        particles;
        constructor(_position, _color, _shape, _lifetime) {
            this.position = new Firework.Vector(this.position.x, this.position.y);
            this.color = _color;
            this.shape = _shape;
            this.lifetime = _lifetime;
        }
        explode() {
            for (let i = 0; i >= 30; i++) {
                switch (this.shape) {
                    case "circle":
                        this.particles.push(new Firework.Circle(this.color, this.position, this.lifetime));
                        break;
                    case "square":
                        this.particles.push(new Firework.Square(this.color, this.position, this.lifetime));
                        break;
                }
            }
        }
    }
    Firework.Rocket = Rocket;
})(Firework || (Firework = {}));
//# sourceMappingURL=Rocket.js.map