var Firework;
(function (Firework) {
    Firework.url = "https://webuser.hs-furtwangen.de/~peschkev/Database/Rockets.json";
    Firework.serverRockets = [];
    //Daten werden dem Server zugeschickt 
    async function sendData(_formData) {
        let json = {};
        for (let key of _formData.keys())
            if (!json[key]) {
                let values = _formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        //erzeugt URL query Befehl für Server
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Rockets");
        //je nach ausgewählter Raktete wird auf eine andere ID zugegriffen und diese geupdatet
        if (Firework.rs1 == true) {
            query.set("id", "63e827320e7d9");
        }
        else if (Firework.rs2 == true) {
            query.set("id", "63e82b5f4908e");
        }
        else if (Firework.rs3 == true) {
            query.set("id", "63e82b6e1db86");
        }
        else if (Firework.rs4 == true) {
            query.set("id", "63e82b767523d");
        }
        query.set("data", JSON.stringify(json));
        //Konsolenbefehl zur Überprüfung der URL
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
    async function handleData() {
        let response = await fetch(Firework.url + "?command=find&collection=Rockets");
        let item = await response.text();
        // tslint:disable-next-line: no-any
        let data = JSON.parse(item);
        //key = ID 
        for (let key in data["data"]) {
            Firework.serverRockets.push(data["data"][key]);
            // tslint:disable-next-line: no-any
            let test = data.data[key];
            console.log(test);
            //console.log(test.thesize);
        }
        if (Firework.rs1 == true) {
            //zugriff auf Database
            let r1 = Firework.serverRockets[0];
            console.log(r1);
        }
        else if (Firework.rs2 == true) {
            //
        }
        else if (Firework.rs3 == true) {
            //
        }
        else if (Firework.rs4 == true) {
            //
        }
        return Firework.serverRockets;
    }
    Firework.handleData = handleData;
    //Beim Klicken auf Speicherstand werden Daten auf Settings übertragen
    function getSavedRocket() {
        Firework.serverRockets.splice(0, Firework.serverRockets.length);
        handleData();
        if (Firework.rs1 == true) {
            //zugriff auf Database
            //type K1 = keyof RocketData[];
        }
        else if (Firework.rs2 == true) {
            //
        }
        else if (Firework.rs3 == true) {
            //
        }
        else if (Firework.rs4 == true) {
            //
        }
    }
    Firework.getSavedRocket = getSavedRocket;
})(Firework || (Firework = {}));
//# sourceMappingURL=Server.js.map