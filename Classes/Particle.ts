namespace Firework {

    export class Particle {
        position: Vector;
        amount: number;
        size: number;
        color: string;
        lifetime: number;
        opacity: number;
        velocity: Vector;

        constructor(_color: string, _position: Vector, _lifetime: number) {
            this.velocity = new Vector(this.velocity.x, this.velocity.y);
            //this.velocity = _velocity;
            this.position = new Vector(this.position.x, this.position.y);
            this.position = _position;
            this.color = _color;
            this.size = Math.floor(Math.random());
            this.opacity = 1;
            this.lifetime = _lifetime;

        }

        move(): void {
            let offset: Vector = this.velocity;
            this.position.add(offset);
    }
    }
}