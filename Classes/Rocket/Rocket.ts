/*
    * Name: Vivien Peschke
    * Matrikel: 270154
    * Datum: 12.02.2023
    * Quellen: In Zusammenarbeit mit Ann-Kathrin Pfeffer, Cara Brüggendieck und Henning Pils
    */
   
namespace Firework {

    export class Rocket {

        lifetime: number;
        color: string;
        shape: string;
        position: Vector;
        particles: Particle[] = [];

        constructor(_lifetime: number, _color: string, _shape: string, _position: Vector) {
            this.position = _position;
            this.color = _color;
            this.shape = _shape;
            this.lifetime = _lifetime;
            this.explode();
        }

        explode(): void {
            // erstellt Partikel und pushed sie ins Array
            for (let i: number = 0; i < 30; i++) {
                // Kreis oder Viereck
                switch (this.shape) {
                    case "circle":
                        let createdCircle: Particle = new Circle(this.color, this.position, this.lifetime);
                        this.particles.push(createdCircle);
                        break;
                    case "square":
                        this.particles.push(new Square(this.color, this.position, this.lifetime));
                        break;
                }

            }
        }
        draw(): void {
            for (let i: number = 0; i < this.particles.length; i++) {
                this.particles[i].move();
                this.particles[i].draw();
                if (this.particles[i].lifetime <= 0) {
                    this.particles.splice(i, 1);
                }
            }
        }



    }
}