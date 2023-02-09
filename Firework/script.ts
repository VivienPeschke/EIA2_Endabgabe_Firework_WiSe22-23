/**
    * Name: Vivien Peschke
    * Matrikel: 270154
    * Datum: 08.02.2023
    * Quellen: -
    */

namespace testfirework {

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    let color: string;
    let size: number;
    let amount: number;


    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        document.getElementById("canvas")?.addEventListener("click", clickCircle);

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;
    }

    function clickCircle(_event: MouseEvent): void {


        let rect: DOMRect = canvas.getBoundingClientRect();
        let mousePositionX: number = _event.clientX - rect.left;
        let mousePositionY: number = _event.clientY - rect.top;


        console.log(mousePositionX, mousePositionY);


        let formData: FormData = new FormData(document.forms[0]);
        for (let _entry of formData) {
            amount = Number(formData.get("particles"));
            size = Number(formData.get("size"));
            color = String(formData.get("color-picker"));

        }
        console.log(amount, size, color);

        crc2.beginPath();
        crc2.arc(mousePositionX, mousePositionY, size, 0, Math.PI * 2);
        crc2.fillStyle = color;
        crc2.fill();
        crc2.closePath();
        crc2.save();

    }



    /*
        window.addEventListener("load", handleLoad);
    
        //Funktion handleLoad um alle "Listeners" zu installieren
        function handleLoad(): void {
            canvas = document.getElementsByTagName("canvas")[0];
            crc2 = canvas.getContext("2d")!;
            document.addEventListener("click", logInfo);
        }
    
        function logInfo(_event: Event): void {
            console.log(_event);
        }
        /*
            function firework(_event: Event): void {
        
            } 
            
        // Zum Ausprobieren schießen wir am Beginn
        // eine einzelne Rakete ab. Das werden wir in unseren
        // Übungen ändern, damit das Feuerwerk spannender wird.
        //
        // Größe der Explosion -------------------------------+
        // Höhe (0 bis 100) ------------------------------+   |
        // X-Position (horizontal) ----------+            |   |
        // Farbe -------------------+        |            |   |
        //                          V        V            V   V
        fireworks.push(new Firework(75, (p.width * 1) / 4, 75, 5)); //1. Wert: Farbe, 2. Wert:  */


}
