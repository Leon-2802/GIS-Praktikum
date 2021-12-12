"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
//Server:
var hostname = "127.0.0.1";
var port = 3000;
var server = http.createServer(function (request, response) {
    response.statusCode = 200; //200 = alles ist in Ordnung
    response.setHeader("Content-Type", "text/plain");
    response.setHeader("Access-Control-Allow-Origin", "*"); // bei CORS Fehler
    var url = new URL(request.url || "", "http://" + request.headers.host);
    switch (url.pathname) {
        case "/":
            response.write("Server erreichbar");
            break;
        case "/convertDate":
            var sentDate = url.searchParams.get("date") || ""; // || "" ist da um, falls "date" nicht vorhanden ist, einen leeren String zurückzugeben, anstatt null
            response.end(convertAndPrintDate(sentDate)); //Die Server Response, die an den client zurück geht
            break;
        default:
            response.statusCode = 404; //Fehlermessage, falls Server nicht gefunden
    }
    response.end();
});
function convertAndPrintDate(date) {
    return "Day: " + date.substring(9, 11) + ", " + "Month: " + date.substring(6, 8) + ", " + "Year: " + date.substring(1, 5);
}
server.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
//Starten mit: node ./A5-Server_Requests/server/server.js
//# sourceMappingURL=server.js.map