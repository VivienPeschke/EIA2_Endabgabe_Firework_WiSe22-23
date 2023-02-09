namespace Firework {

    export class Moveable {
        position: Vector;
        velocity: Vector;
        speed: number;

        constructor(_position?: Vector) {
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new Vector(0, 0);
                this.velocity = new Vector(0, 0);
            }
        }

        moveForward(): void {
            this.position.x += this.position.y * +0.5;
            if (this.position.x < 0) {
                this.position.x = this.position.x + crc2.canvas.width;
            }
            if (this.position.x > crc2.canvas.width) {
                this.position.x = this.position.x - crc2.canvas.width;
            }
        }

        // tslint:disable-next-line: no-empty
        draw(): void { }
    }
}