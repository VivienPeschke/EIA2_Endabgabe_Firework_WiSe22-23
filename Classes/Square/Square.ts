/*
    * Name: Vivien Peschke
    * Matrikel: 270154
    * Datum: 12.02.2023
    * Quellen: In Zusammenarbeit mit Ann-Kathrin Pfeffer, Cara Brüggendieck und Henning Pils
    */

namespace Firework {

    export class Square extends Particle {

        constructor(_color: string, _position: Vector, _lifetime: number) {
            super(_color, _position, _lifetime);
            this.draw();
        }

        draw(): void {

            crc2.save();
            crc2.beginPath();
            crc2.rect(this.position.x - 8, this.position.y - 8, 0.5 * this.radius, 0.5 * this.radius);
            crc2.closePath();
            crc2.fillStyle = this.color;
            if (this.lifetime < 0) {
                crc2.globalAlpha = this.opacity;
                this.opacity -= 0.05;
            }
            crc2.fill();
            crc2.restore();
        }
    }
}