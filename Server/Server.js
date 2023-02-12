/*
    * Name: Vivien Peschke
    * Matrikel: 270154
    * Datum: 12.02.2023
    * Quellen: In Zusammenarbeit mit Ann-Kathrin Pfeffer, Cara Brüggendieck und Henning Pils
    */
var Firework;
(function (Firework) {
    Firework.url = "https://webuser.hs-furtwangen.de/~peschkev/Database/index.php";
    Firework.serverRockets = [];
    async function sendData(_formData) {
        let json = {};
        for (let key of _formData.keys())
            if (!json[key]) {
                let values = _formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "rocket");
        if (Firework.rs1 == true) {
            query.set("id", "Rocket1");
        }
        else if (Firework.rs2 == true) {
            query.set("id", "Rocket2");
        }
        else if (Firework.rs3 == true) {
            query.set("id", "Rocket3");
        }
        else if (Firework.rs4 == true) {
            query.set("id", "Rocket4");
        }
        query.set("data", JSON.stringify(json));
        let response = await fetch(Firework.url + "?" + query.toString());
        console.log(response);
        let responseText = await response.text();
        if (responseText.includes("success")) {
            console.log("Item added!");
        }
        else {
            console.log("Error! Try again!");
        }
    }
    Firework.sendData = sendData;
    // tslint:disable-next-line: no-any
    async function getSavedRocket() {
        Firework.serverRockets.splice(0, Firework.serverRockets.length);
        let response = await fetch(Firework.url + "?command=find&collection=rocket");
        let item = await response.text();
        // tslint:disable-next-line: no-any
        let data = JSON.parse(item);
        //key = ID 
        for (let key in data["data"]) {
            Firework.serverRockets.push(data["data"][key]);
            // let test: any = data.data[key];
        }
        console.log(Firework.serverRockets);
        if (Firework.rs1 == true) {
            let rocketOneData = Firework.serverRockets[0];
            console.log(rocketOneData.duration);
            console.log(rocketOneData[0]);
        }
        else if (Firework.rs2 == true) {
            let rocketTwoData = Firework.serverRockets[1];
            console.log(rocketTwoData);
        }
        else if (Firework.rs3 == true) {
            let rocketThreeData = Firework.serverRockets[2];
            console.log(rocketThreeData);
        }
        else if (Firework.rs4 == true) {
            let rocketFourData = Firework.serverRockets[3];
            console.log(rocketFourData);
        }
        return Firework.serverRockets;
    }
    Firework.getSavedRocket = getSavedRocket;
})(Firework || (Firework = {}));
//# sourceMappingURL=Server.js.map