"use strict";
var Firework;
(function (Firework) {
    class Square extends Firework.Particle {
        radius;
        draw() {
            Firework.crc2.save();
            Firework.crc2.beginPath();
            Firework.crc2.rect(this.position.x - 30, this.position.y - 30, 0.5 * this.radius, 0.5 * this.radius);
            Firework.crc2.stroke();
            Firework.crc2.fillStyle = this.color;
            if (this.lifetime < 0) {
                Firework.crc2.globalAlpha = this.opacity--;
            }
            Firework.crc2.fill();
            Firework.crc2.restore();
        }
    }
    Firework.Square = Square;
})(Firework || (Firework = {}));
//# sourceMappingURL=Square.js.map