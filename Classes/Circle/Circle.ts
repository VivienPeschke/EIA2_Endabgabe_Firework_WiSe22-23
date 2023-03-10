/*
    * Name: Vivien Peschke
    * Matrikel: 270154
    * Datum: 12.02.2023
    * Quellen: In Zusammenarbeit mit Ann-Kathrin Pfeffer, Cara Brüggendieck und Henning Pils
    */
   
namespace Firework {

    export class Circle extends Particle {
        
        constructor(_color: string, _position: Vector, _lifetime: number) {
            super(_color, _position, _lifetime);
            this.draw();
        }

        draw(): void {

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, 7 * this.radius / 30, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = this.color;
            if (this.lifetime < 0) {
                crc2.globalAlpha = this.opacity;
                this.opacity -= 0.5;
            }
            crc2.fill();
            crc2.restore();
        }
    }
}