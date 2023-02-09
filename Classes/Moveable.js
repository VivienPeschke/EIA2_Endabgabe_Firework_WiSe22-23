"use strict";
var Firework;
(function (Firework) {
    class Moveable {
        position;
        velocity;
        speed;
        constructor(_position) {
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new Firework.Vector(0, 0);
                this.velocity = new Firework.Vector(0, 0);
            }
        }
        moveForward() {
            this.position.x += this.position.y * +0.5;
            if (this.position.x < 0) {
                this.position.x = this.position.x + Firework.crc2.canvas.width;
            }
            if (this.position.x > Firework.crc2.canvas.width) {
                this.position.x = this.position.x - Firework.crc2.canvas.width;
            }
        }
        // tslint:disable-next-line: no-empty
        draw() { }
    }
    Firework.Moveable = Moveable;
})(Firework || (Firework = {}));
//# sourceMappingURL=Moveable.js.map