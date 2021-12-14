"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
//Server:
var hostname = "127.0.0.1"; //Adresse des localhost
var port = 3000;
var server = http.createServer(function (request, response) {
    /* Die Serverkonfogurationsfunktion besitzt zwei Parameter: Einmal request für alle eingehenden Anfragen und
    das Response-Objekt für alle ausgehenden Server-Antworten
    */
    response.statusCode = 200; //200 = alles ist in Ordnung
    response.setHeader("Content-Type", "text/plain"); //Rückgabetyp der Responses
    response.setHeader("Access-Control-Allow-Origin", "*"); //Dieser Header definiert, ob der Response-Header mit dem Herkunftsort der Anfrage geteilt werden kann
    // "*" heißt der Header kann mit jedem geteilt werden. Das ist wichtig um später mögliche CORS-Fehlermeldungen zu vermeiden
    var url = new URL(request.url || "", "http://" + request.headers.host); //URL-Objekt für das Routing, holt aus der Anfrage von der Client-Seite die URL des Host aus dem Header
    switch (url.pathname) {
        case "/":
            response.write("Server erreichbar");
            break;
        case "/convertDate":
            var sentDate = url.searchParams.get("date") || ""; // || "" ist da um, falls "date" nicht vorhanden ist, einen leeren String zurückzugeben anstatt null
            response.end(convertAndPrintDate(sentDate)); //Die Server Response, die an den client zurück geht
            break;
        default:
            response.statusCode = 404; //Fehlermessage, falls Server nicht gefunden
    }
    response.end(); //Hier wird die Server-Antwort abgeschlossen und abgesendet
});
function convertAndPrintDate(date) {
    return "Day: " + date.substring(9, 11) + ", " + "Month: " + date.substring(6, 8) + ", " + "Year: " + date.substring(1, 5);
}
//Server muss wissen über welchen Hostnamen und Port er laufen soll:
server.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
//Starten mit: node ./A5-Server_Requests/server/server.js
//# sourceMappingURL=server.js.map