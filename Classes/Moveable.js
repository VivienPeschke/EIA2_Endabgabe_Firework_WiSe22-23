"use strict";
var testfirework;
(function (testfirework) {
    class Moveable {
        position;
        velocity;
        speed;
        constructor(_position) {
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new testfirework.Vector(0, 0);
                this.velocity = new testfirework.Vector(0, 0);
            }
        }
        moveForward() {
            this.position.x += this.position.y * +0.5;
            if (this.position.x < 0) {
                this.position.x = this.position.x + testfirework.crc2.canvas.width;
            }
            if (this.position.x > testfirework.crc2.canvas.width) {
                this.position.x = this.position.x - testfirework.crc2.canvas.width;
            }
        }
        // tslint:disable-next-line: no-empty
        draw() { }
    }
    testfirework.Moveable = Moveable;
})(testfirework || (testfirework = {}));
//# sourceMappingURL=Moveable.js.map