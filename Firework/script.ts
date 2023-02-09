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
 //   let lifetime: number;
    let shape: string;


    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        document.getElementById("canvas")?.addEventListener("click", clickCircle);

        canvas = document.getElementsByTagName("canvas")[0];
    }

    function clickCircle(_event: MouseEvent): void {


        let rect: DOMRect = canvas.getBoundingClientRect();
        let mousePositionX: number = _event.clientX - rect.left;
        let mousePositionY: number = _event.clientY - rect.top;


        console.log(mousePositionX, mousePositionY);


        let formData: FormData = new FormData(document.forms[0]);
        for (let _entry of formData) {
            amount = Number(formData.get("amount"));
            size = Number(formData.get("size"));
        //    lifetime = Number(formData.get("lifetime"));
            shape = String(formData.get("shape"));
            color = String(formData.get("color-picker"));

        }
        console.log(amount, size, color);

        /*      //drawing triangle (ignore till end)
                crc2.beginPath();
                crc2.moveTo(mousePositionX, mousePositionY);
                crc2.lineTo(mousePositionX + 100, mousePositionY + 200);
                crc2.lineTo(mousePositionX + 150, mousePositionY + 20);
                crc2.closePath();
                crc2.fillStyle = color;
                crc2.fill();
                crc2.save();
        */

        //drawing circle
        crc2.beginPath();
        crc2.arc(mousePositionX, mousePositionY, size, 0, Math.PI * 2);
        crc2.fillStyle = color;
        crc2.fill();
        crc2.closePath();
        crc2.save();


        //drawing square
        crc2.beginPath();
        crc2.fillRect(mousePositionX - 8, mousePositionY - 8, size, size);
        crc2.fillStyle = color;
        crc2.fill();
        crc2.closePath();
        crc2.save();
    }

}
