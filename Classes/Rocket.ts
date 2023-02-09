namespace Firework {

    export class Rocket {

        position: Vector;
        color: string;
        shape: string;
        lifetime: number;
        particles: Particle[];

        constructor(_position: Vector, _color: string, _shape: string, _lifetime: number) {
            this.position = new Vector(this.position.x, this.position.y);
            this.color = _color;
            this.shape = _shape;
            this.lifetime = _lifetime;
        }

        explode(): void {

            for (let i: number = 0; i >= 30; i++) {
                switch (this.shape) {
                    case "circle":
                        this.particles.push(new Circle(this.color, this.position, this.lifetime));
                        break;
                    case "square":
                        this.particles.push(new Square(this.color, this.position, this.lifetime));
                        break;
                }

            }
        }


    }
}