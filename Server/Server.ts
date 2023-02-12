/*
    * Name: Vivien Peschke
    * Matrikel: 270154
    * Datum: 12.02.2023
    * Quellen: In Zusammenarbeit mit Ann-Kathrin Pfeffer, Cara Brüggendieck und Henning Pils
    */


namespace Firework {

    export let url: string = "https://webuser.hs-furtwangen.de/~peschkev//Database/index.php/";
    export let serverRockets: RocketData[] = [];
    export interface RocketData {
        lifetime: string;
        shape: string;
        color: string;
    }

    export async function sendData(_formData: FormData): Promise<void> {

        interface FormDataJSON {
            [key: string]: FormDataEntryValue | FormDataEntryValue[];
        }
        let json: FormDataJSON = {};
        for (let key of _formData.keys())
            if (!json[key]) {
                let values: FormDataEntryValue[] = _formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }

        let query: URLSearchParams = new URLSearchParams();
        query.set("command", "update");
        query.set("collection", "Rockets");

        if (rs1 == true) {
            query.set("id", "63e93c8bd886d");
        } else if (rs2 == true) {
            query.set("id", "63e93ca18cd28");
        } else if (rs3 == true) {
            query.set("id", "63e93caf478bd");
        } else if (rs4 == true) {
            query.set("id", "63e93cb8e4603");
        }

        query.set("data", JSON.stringify(json));

        let response: Response = await fetch(url + "?" + query.toString());
        console.log(response);
        let responseText: string = await response.text();
        if (responseText.includes("success")) {
            console.log("Item added!");
        }
        else {
            console.log("Error! Try again!");
        }
    }



    // tslint:disable-next-line: no-any
    export async function getSavedRocket(): Promise<any> {

        serverRockets.splice(0, serverRockets.length);
        let response: Response = await fetch(url + "?command=find&collection=Rockets");
        let item: string = await response.text();
        let data: any = JSON.parse(item);
        //key = ID 
        for (let key in data["data"]) {
            serverRockets.push(data["data"][key]);
        }

        let lifetime: HTMLInputElement = <HTMLInputElement>document.getElementById("lifetime");
        let color: HTMLInputElement = <HTMLInputElement>document.getElementById("color");
        let shape: HTMLInputElement = <HTMLInputElement>document.getElementById("shape");

        if (rs1 == true) {
            //zugriff auf Database
            let r1: RocketData = serverRockets[0];
            lifetime.value = r1.lifetime;
            color.value = r1.color;
            shape.value = r1.shape;

        } else if (rs2 == true) {
            let r2: RocketData = serverRockets[1];
            lifetime.value = r2.lifetime;
            color.value = r2.color;
            shape.value = r2.shape;

        } else if (rs3 == true) {
            let r3: RocketData = serverRockets[2];
            lifetime.value = r3.lifetime;
            color.value = r3.color;
            shape.value = r3.shape;

        } else if (rs4 == true) {
            let r4: RocketData = serverRockets[3];
            lifetime.value = r4.lifetime;
            color.value = r4.color;
            shape.value = r4.shape;

        }

        return serverRockets;


    }



}