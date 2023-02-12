/*
    * Name: Vivien Peschke
    * Matrikel: 270154
    * Datum: 12.02.2023
    * Quellen: In Zusammenarbeit mit Ann-Kathrin Pfeffer, Cara Brüggendieck und Henning Pils
    */


namespace Firework {

    export let url: string = "https://webuser.hs-furtwangen.de/~peschkev/Database/index.php";
    export let serverRockets: RocketData[] = [];
    export interface RocketData {
        duration: number;
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
        query.set("command", "insert");
        query.set("collection", "rocket");

        if (rs1 == true) {
            query.set("id", "Rocket1");
        } else if (rs2 == true) {
            query.set("id", "Rocket2");
        } else if (rs3 == true) {
            query.set("id", "Rocket3");
        } else if (rs4 == true) {
            query.set("id", "Rocket4");
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


        let response: Response = await fetch(url + "?command=find&collection=rocket");
        let item: string = await response.text();
        // tslint:disable-next-line: no-any
        let data: any = JSON.parse(item);
        //key = ID 
        for (let key in data["data"]) {
            serverRockets.push(data["data"][key]);

            // let test: any = data.data[key];
        }
        console.log(serverRockets);

        if (rs1 == true) {
            let rocketOneData: RocketData = serverRockets[0];
            console.log(rocketOneData.duration);
            console.log(rocketOneData[0]);

        } else if (rs2 == true) {
            let rocketTwoData: RocketData = serverRockets[1];
            console.log(rocketTwoData);

        } else if (rs3 == true) {
            let rocketThreeData: RocketData = serverRockets[2];
            console.log(rocketThreeData);

        } else if (rs4 == true) {
            let rocketFourData: RocketData = serverRockets[3];
            console.log(rocketFourData);

        }

        return serverRockets;



    }



}