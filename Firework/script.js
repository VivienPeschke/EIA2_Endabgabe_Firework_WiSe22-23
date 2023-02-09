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
            amount = Number(formData.get("amount"));
            size = Number(formData.get("size"));
            //lifetime = Number(formData.get("lifetime"));
            //shape = String(formData.get("shape"));
            color = String(formData.get("color-picker"));
        }
        console.log(amount, size, color);
        //drawing circle
        testfirework.crc2.beginPath();
        testfirework.crc2.arc(mousePositionX, mousePositionY, size, 0, Math.PI * 2);
        testfirework.crc2.fillStyle = color;
        testfirework.crc2.fill();
        testfirework.crc2.closePath();
        testfirework.crc2.save();
        /*      //drawing triangle (ignore till end)
                crc2.beginPath();
                crc2.moveTo(mousePositionX, mousePositionY);
                crc2.lineTo(mousePositionX + 100, mousePositionY + 200);
                crc2.lineTo(mousePositionX + 150, mousePositionY + 20);
                crc2.closePath();
                crc2.fillStyle = color;
                crc2.fill();
                crc2.save();

        if (valueCircle) {
            //drawing circle
            crc2.beginPath();
            crc2.arc(mousePositionX, mousePositionY, size, 0, Math.PI * 2);
            crc2.fillStyle = color;
            crc2.fill();
            crc2.closePath();
            crc2.save();

        } else if (valueSquare) {
            //drawing square
            crc2.beginPath();
            crc2.fillRect(mousePositionX - 8, mousePositionY - 8, size, size);
            crc2.fillStyle = color;
            crc2.fill();
            crc2.closePath();
            crc2.save();
        }
        */
        /*
                //drawing square
                crc2.beginPath();
                crc2.fillRect(mousePositionX - 8, mousePositionY - 8, size, size);
                crc2.fillStyle = color;
                crc2.fill();
                crc2.closePath();
                crc2.save();
            }
        */
    }
})(testfirework || (testfirework = {}));
//# sourceMappingURL=script.js.map