"use strict";
var Firework;
(function (Firework) {
    class Circle extends Firework.Particle {
        radius;
        draw() {
            Firework.crc2.save();
            Firework.crc2.beginPath();
            Firework.crc2.translate(this.position.x, this.position.y);
            Firework.crc2.arc(0, 0, 7 * this.radius / 100, 0, 2 * Math.PI);
            Firework.crc2.closePath();
            Firework.crc2.fillStyle = this.color;
            if (this.lifetime < 0) {
                Firework.crc2.globalAlpha = this.opacity--;
            }
            Firework.crc2.fill();
            Firework.crc2.restore();
        }
    }
    Firework.Circle = Circle;
})(Firework || (Firework = {}));
//# sourceMappingURL=Circle.js.map