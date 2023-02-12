/*
    * Name: Vivien Peschke
    * Matrikel: 270154
    * Datum: 12.02.2023
    * Quellen: In Zusammenarbeit mit Ann-Kathrin Pfeffer, Cara Brüggendieck und Henning Pils
    */
var Firework;
(function (Firework) {
    let lifetime;
    let color;
    let shape;
    //let radius: number;
    //let opacity: number;
    //let speed: Vector;
    let rocket = [];
    //let particle: Particle;
    Firework.rs1 = true;
    Firework.rs2 = false;
    Firework.rs3 = false;
    Firework.rs4 = false;
    //Laden der Seite
    window.addEventListener("load", handleLoad);
    async function handleLoad(_event) {
        //Größe Canvas
        //   crc2.canvas.width = window.innerWidth * 0.5;
        // crc2.canvas.height = window.innerHeight * 0.5;
        document.getElementById("canvas")?.addEventListener("click", createRocket);
        document.getElementById("buttonSave")?.addEventListener("click", saveRocket);
        document.getElementById("rs1")?.addEventListener("click", clickRocketButton);
        document.getElementById("rs2")?.addEventListener("click", clickRocketButton);
        document.getElementById("rs3")?.addEventListener("click", clickRocketButton);
        document.getElementById("rs4")?.addEventListener("click", clickRocketButton);
        Firework.canvas = document.getElementsByTagName("canvas")[0];
        Firework.crc2 = Firework.canvas.getContext("2d");
        window.setInterval(animateRocket, 20);
        Firework.getSavedRocket();
    }
    //Ausführen der Kreation
    function createRocket(_event) {
        //Mausposition wird angenommen und übertragen
        let rect = Firework.canvas.getBoundingClientRect();
        let mousePositionX = _event.clientX - rect.left;
        let mousePositionY = _event.clientY - rect.top;
        //Daten der Settings auf Variablen anwenden 
        let formData = new FormData(document.forms[0]);
        //Auslesen der Werte im FormData Element der HTML
        for (let entry of formData) {
            lifetime = Number(formData.get("lifetime"));
            color = String(formData.get("color"));
            shape = String(formData.get("shape"));
            //console.log(entry[0]);
        }
        let rocketPosition = new Firework.Vector(mousePositionX, mousePositionY);
        let rocketCreated = new Firework.Rocket(lifetime, color, shape, rocketPosition);
        rocket.push(rocketCreated);
        //Zur Kontrolle, ob die richtigen Werte ausgelesen und übertragen bzw. mitgegeben wurden
        console.log(rocketCreated);
        console.log(rocket);
        console.log(mousePositionX, mousePositionY);
        //animateRocket(mousePositionX, mousepositionY, lifetime, color, radius, opacity, speed, shape);
    }
    function animateRocket() {
        Firework.crc2.clearRect(0, 0, Firework.canvas.width, Firework.canvas.height);
        if (rocket.length > 0) {
            for (let i = 0; i < rocket.length; i++) {
                if (rocket[i].particles.length != 0) {
                    rocket[i].draw();
                }
                else {
                    rocket.splice(i, 1);
                }
            }
        }
    }
    //Save Button liest Werte der FormData
    async function saveRocket(_event) {
        let formData = new FormData(document.forms[0]);
        for (let {} of formData) {
            lifetime = Number(formData.get("lifetime"));
            color = String(formData.get("color"));
            shape = String(formData.get("shape"));
            //console.log(entry[1]);
        }
        Firework.sendData(formData);
    }
    Firework.saveRocket = saveRocket;
    //Zufällige Nummer für andere Funktionen 
    function getRandomNumber(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1)) + _min;
    }
    Firework.getRandomNumber = getRandomNumber;
    //Farbe des ausgewählten Buttons wird angezeigt
    function clickRocketButton(_event) {
        let eventTarget = _event.target;
        let button1 = document.getElementById("rs1");
        let button2 = document.getElementById("rs2");
        let button3 = document.getElementById("rs3");
        let button4 = document.getElementById("rs4");
        //sobald ein Button gedrückt wurde, wird dieser auf 'true' gesetzt
        if (eventTarget == button1) {
            Firework.rs1 = true;
            Firework.rs2 = false;
            Firework.rs3 = false;
            Firework.rs4 = false;
        }
        else if (eventTarget == button2) {
            Firework.rs1 = false;
            Firework.rs2 = true;
            Firework.rs3 = false;
            Firework.rs4 = false;
        }
        else if (eventTarget == button3) {
            Firework.rs1 = false;
            Firework.rs2 = false;
            Firework.rs3 = true;
            Firework.rs4 = false;
        }
        else if (eventTarget == button4) {
            Firework.rs1 = false;
            Firework.rs2 = false;
            Firework.rs3 = false;
            Firework.rs4 = true;
        }
        //sobald der oben geklickte Button nun 'true' ist - soll der Style dementsprechend angepasst werden
        if (Firework.rs1 == true) {
            button1.style.backgroundColor = "#141e67";
            button1.style.color = "#fff";
            button2.style.backgroundColor = "#fff";
            button2.style.color = "#000";
            button3.style.backgroundColor = "#fff";
            button3.style.color = "#000";
            button4.style.backgroundColor = "#fff";
            button4.style.color = "#000";
            Firework.rs2 = false;
            Firework.rs3 = false;
            Firework.rs4 = false;
        }
        else if (Firework.rs2 == true) {
            button2.style.backgroundColor = "#141e67";
            button2.style.color = "#fff";
            button1.style.backgroundColor = "#fff";
            button1.style.color = "#000";
            button3.style.backgroundColor = "#fff";
            button3.style.color = "#000";
            button4.style.backgroundColor = "#fff";
            button4.style.color = "#000";
            Firework.rs1 = false;
            Firework.rs3 = false;
            Firework.rs4 = false;
        }
        else if (Firework.rs3 == true) {
            button3.style.backgroundColor = "#141e67";
            button3.style.color = "#fff";
            button2.style.backgroundColor = "#fff";
            button2.style.color = "#000";
            button1.style.backgroundColor = "#fff";
            button1.style.color = "#000";
            button4.style.backgroundColor = "#fff";
            button4.style.color = "#000";
            Firework.rs1 = false;
            Firework.rs2 = false;
            Firework.rs4 = false;
        }
        else if (Firework.rs4 == true) {
            button4.style.backgroundColor = "#141e67";
            button4.style.color = "#fff";
            button1.style.backgroundColor = "#fff";
            button1.style.color = "#000";
            button3.style.backgroundColor = "#fff";
            button3.style.color = "#000";
            button2.style.backgroundColor = "#fff";
            button2.style.color = "#000";
            Firework.rs1 = false;
            Firework.rs2 = false;
            Firework.rs3 = false;
        }
        Firework.getSavedRocket();
    }
})(Firework || (Firework = {}));
//# sourceMappingURL=script.js.map