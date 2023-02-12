"use strict";
var Firework;
(function (Firework) {
    class Square extends Firework.Particle {
        constructor(_color, _position, _lifetime) {
            super(_color, _position, _lifetime);
            this.draw();
        }
        draw() {
            Firework.crc2.save();
            Firework.crc2.beginPath();
            Firework.crc2.rect(this.position.x - 8, this.position.y - 8, 0.5 * this.radius, 0.5 * this.radius);
            Firework.crc2.closePath();
            Firework.crc2.fillStyle = this.color;
            if (this.lifetime < 0) {
                Firework.crc2.globalAlpha = this.opacity;
                this.opacity -= 0.05;
            }
            Firework.crc2.fill();
            Firework.crc2.restore();
        }
    }
    Firework.Square = Square;
})(Firework || (Firework = {}));
//# sourceMappingURL=Square.js.map