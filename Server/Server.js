/*
    * Name: Vivien Peschke
    * Matrikel: 270154
    * Datum: 12.02.2023
    * Quellen: In Zusammenarbeit mit Ann-Kathrin Pfeffer, Cara Brüggendieck und Henning Pils
    */
var Firework;
(function (Firework) {
    Firework.url = "https://webuser.hs-furtwangen.de/~peschkev//Database/index.php/";
    Firework.serverRockets = [];
    async function sendData(_formData) {
        let json = {};
        for (let key of _formData.keys())
            if (!json[key]) {
                let values = _formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        let query = new URLSearchParams();
        query.set("command", "update");
        query.set("collection", "Rockets");
        if (Firework.rs1 == true) {
            query.set("id", "63e93c8bd886d");
        }
        else if (Firework.rs2 == true) {
            query.set("id", "63e93ca18cd28");
        }
        else if (Firework.rs3 == true) {
            query.set("id", "63e93caf478bd");
        }
        else if (Firework.rs4 == true) {
            query.set("id", "63e93cb8e4603");
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
        let response = await fetch(Firework.url + "?command=find&collection=Rockets");
        let item = await response.text();
        let data = JSON.parse(item);
        //key = ID 
        for (let key in data["data"]) {
            Firework.serverRockets.push(data["data"][key]);
        }
        let lifetime = document.getElementById("lifetime");
        let color = document.getElementById("color");
        let shape = document.getElementById("shape");
        if (Firework.rs1 == true) {
            //zugriff auf Database
            let r1 = Firework.serverRockets[0];
            lifetime.value = r1.lifetime;
            color.value = r1.color;
            shape.value = r1.shape;
        }
        else if (Firework.rs2 == true) {
            let r2 = Firework.serverRockets[1];
            lifetime.value = r2.lifetime;
            color.value = r2.color;
            shape.value = r2.shape;
        }
        else if (Firework.rs3 == true) {
            let r3 = Firework.serverRockets[2];
            lifetime.value = r3.lifetime;
            color.value = r3.color;
            shape.value = r3.shape;
        }
        else if (Firework.rs4 == true) {
            let r4 = Firework.serverRockets[3];
            lifetime.value = r4.lifetime;
            color.value = r4.color;
            shape.value = r4.shape;
        }
        return Firework.serverRockets;
    }
    Firework.getSavedRocket = getSavedRocket;
})(Firework || (Firework = {}));
//# sourceMappingURL=Server.js.map