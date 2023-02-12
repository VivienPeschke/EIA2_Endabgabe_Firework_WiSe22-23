/*
    * Name: Vivien Peschke
    * Matrikel: 270154
    * Datum: 12.02.2023
    * Quellen: In Zusammenarbeit mit Ann-Kathrin Pfeffer, Cara Brüggendieck und Henning Pils
    */

namespace Firework {

    //global canvas
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let lifetime: number;
    let color: string;
    let shape: string;
    //let radius: number;
    //let opacity: number;
    //let speed: Vector;
    let rocket: Rocket[] = [];
    //let particle: Particle;

    export let rs1: boolean = true;
    export let rs2: boolean = false;
    export let rs3: boolean = false;
    export let rs4: boolean = false;

    //Laden der Seite
    window.addEventListener("load", handleLoad);



    async function handleLoad(_event: Event): Promise<void> {

        //Größe Canvas
     //   crc2.canvas.width = window.innerWidth * 0.5;
       // crc2.canvas.height = window.innerHeight * 0.5;

        document.getElementById("canvas")?.addEventListener("click", createRocket);
        document.getElementById("buttonSave")?.addEventListener("click", saveRocket);
        document.getElementById("rs1")?.addEventListener("click", clickRocketButton);
        document.getElementById("rs2")?.addEventListener("click", clickRocketButton);
        document.getElementById("rs3")?.addEventListener("click", clickRocketButton);
        document.getElementById("rs4")?.addEventListener("click", clickRocketButton);

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        window.setInterval(animateRocket, 20);

        getSavedRocket();
    }

    //Ausführen der Kreation
    function createRocket(_event: MouseEvent): void {

        //Mausposition wird angenommen und übertragen
        let rect: DOMRect = canvas.getBoundingClientRect();
        let mousePositionX: number = _event.clientX - rect.left;
        let mousePositionY: number = _event.clientY - rect.top;

        //Daten der Settings auf Variablen anwenden 
        let formData: FormData = new FormData(document.forms[0]);

        //Auslesen der Werte im FormData Element der HTML
        for (let entry of formData) {
            lifetime = Number(formData.get("lifetime"));
            color = String(formData.get("color"));
            shape = String(formData.get("shape"));

            //console.log(entry[0]);
        }

        let rocketPosition: Vector = new Vector(mousePositionX, mousePositionY);
        let rocketCreated: Rocket = new Rocket(lifetime, color, shape, rocketPosition);


        rocket.push(rocketCreated);

        //Zur Kontrolle, ob die richtigen Werte ausgelesen und übertragen bzw. mitgegeben wurden
        console.log(rocketCreated);
        console.log(rocket);
        console.log(mousePositionX, mousePositionY);
        //animateRocket(mousePositionX, mousepositionY, lifetime, color, radius, opacity, speed, shape);
    }


    function animateRocket(): void {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        if (rocket.length > 0) {
            for (let i: number = 0; i < rocket.length; i++) {
                if (rocket[i].particles.length != 0) {
                    rocket[i].draw();
                } else {
                    rocket.splice(i, 1);
                }
            }
        }
    }

    //Save Button liest Werte der FormData
    export async function saveRocket(_event: Event): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        for (let {} of formData) {
            lifetime = Number(formData.get("lifetime"));
            color = String(formData.get("color"));
            shape = String(formData.get("shape"));

            //console.log(entry[1]);
        }

        sendData(formData);

    }

    //Zufällige Nummer für andere Funktionen 
    export function getRandomNumber(_min: number, _max: number): number {
        return Math.floor(Math.random() * (_max - _min + 1)) + _min;
    }

    //Farbe des ausgewählten Buttons wird angezeigt
    function clickRocketButton(_event: MouseEvent): void {

        let eventTarget: EventTarget = _event.target;
        let button1: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rs1");
        let button2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rs2");
        let button3: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rs3");
        let button4: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rs4");

        //sobald ein Button gedrückt wurde, wird dieser auf 'true' gesetzt
        if (eventTarget == button1) {
            rs1 = true;
            rs2 = false;
            rs3 = false;
            rs4 = false;
        } else if (eventTarget == button2) {
            rs1 = false;
            rs2 = true;
            rs3 = false;
            rs4 = false;
        } else if (eventTarget == button3) {
            rs1 = false;
            rs2 = false;
            rs3 = true;
            rs4 = false;
        } else if (eventTarget == button4) {
            rs1 = false;
            rs2 = false;
            rs3 = false;
            rs4 = true;
        }

        //sobald der oben geklickte Button nun 'true' ist - soll der Style dementsprechend angepasst werden
        if (rs1 == true) {
            button1.style.backgroundColor = "#141e67";
            button1.style.color = "#fff";

            button2.style.backgroundColor = "#fff";
            button2.style.color = "#000";

            button3.style.backgroundColor = "#fff";
            button3.style.color = "#000";

            button4.style.backgroundColor = "#fff";
            button4.style.color = "#000";

            rs2 = false;
            rs3 = false;
            rs4 = false;
        }
        else if (rs2 == true) {
            button2.style.backgroundColor = "#141e67";
            button2.style.color = "#fff";

            button1.style.backgroundColor = "#fff";
            button1.style.color = "#000";

            button3.style.backgroundColor = "#fff";
            button3.style.color = "#000";

            button4.style.backgroundColor = "#fff";
            button4.style.color = "#000";

            rs1 = false;
            rs3 = false;
            rs4 = false;
        }
        else if (rs3 == true) {
            button3.style.backgroundColor = "#141e67";
            button3.style.color = "#fff";

            button2.style.backgroundColor = "#fff";
            button2.style.color = "#000";

            button1.style.backgroundColor = "#fff";
            button1.style.color = "#000";

            button4.style.backgroundColor = "#fff";
            button4.style.color = "#000";

            rs1 = false;
            rs2 = false;
            rs4 = false;
        }
        else if (rs4 == true) {
            button4.style.backgroundColor = "#141e67";
            button4.style.color = "#fff";

            button1.style.backgroundColor = "#fff";
            button1.style.color = "#000";

            button3.style.backgroundColor = "#fff";
            button3.style.color = "#000";

            button2.style.backgroundColor = "#fff";
            button2.style.color = "#000";

            rs1 = false;
            rs2 = false;
            rs3 = false;
        }

        getSavedRocket();
    }
}