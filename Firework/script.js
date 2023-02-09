"use strict";
/**
    * Name: Vivien Peschke
    * Matrikel: 270154
    * Datum: 08.02.2023
    * Quellen: -
    */
var testfirework;
(function (testfirework) {
    let canvas;
    let color;
    let size;
    let amount;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.getElementById("canvas")?.addEventListener("click", clickCircle);
        canvas = document.getElementsByTagName("canvas")[0];
        testfirework.crc2 = canvas.getContext("2d");
    }
    function clickCircle(_event) {
        let rect = canvas.getBoundingClientRect();
        let mousePositionX = _event.clientX - rect.left;
        let mousePositionY = _event.clientY - rect.top;
        console.log(mousePositionX, mousePositionY);
        let formData = new FormData(document.forms[0]);
        for (let _entry of formData) {
            amount = Number(formData.get("particles"));
            size = Number(formData.get("size"));
            color = String(formData.get("color-picker"));
        }
        console.log(amount, size, color);
        testfirework.crc2.beginPath();
        testfirework.crc2.arc(mousePositionX, mousePositionY, size, 0, Math.PI * 2);
        testfirework.crc2.fillStyle = color;
        testfirework.crc2.fill();
        testfirework.crc2.closePath();
        testfirework.crc2.save();
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
})(testfirework || (testfirework = {}));
//# sourceMappingURL=script.js.map