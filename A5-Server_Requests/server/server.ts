import * as http from "http";

//Server:

const hostname: string = "127.0.0.1"; //Adresse des localhost
const port: number = 3000;

const server: http.Server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {
      /* Die Serverkonfogurationsfunktion besitzt zwei Parameter: Einmal request für alle eingehenden Anfragen und 
      das Response-Objekt für alle ausgehenden Server-Antworten
      */

      response.statusCode = 200; //200 = alles ist in Ordnung

      response.setHeader("Content-Type", "text/plain"); //Rückgabetyp der Responses
      response.setHeader("Access-Control-Allow-Origin", "*"); //Dieser Header definiert, ob der Response-Header mit dem Herkunftsort der Anfrage geteilt werden kann
      // "*" heißt der Header kann mit jedem geteilt werden. Das ist wichtig um später mögliche CORS-Fehlermeldungen zu vermeiden

      let url: URL = new URL(request.url || "", `http://${request.headers.host}`); //URL-Objekt für das Routing, holt aus der Anfrage von der Client-Seite die URL des Host aus dem Header
      switch (url.pathname) { 
        case "/":
          response.write("Server erreichbar");
          break;
        case "/convertDate":
          let sentDate: string = url.searchParams.get("date") || ""; // || "" ist da um, falls "date" nicht vorhanden ist, einen leeren String zurückzugeben anstatt null
          response.end(convertAndPrintDate(sentDate)); //Die Server Response, die an den client zurück geht
          break;
        default:
          response.statusCode = 404; //Fehlermessage, falls Server nicht gefunden
      }  
      response.end(); //Hier wird die Server-Antwort abgeschlossen und abgesendet
    }
);

function convertAndPrintDate(date: string): string {
  return "Day: " + date.substring(9, 11) + ", " + "Month: " + date.substring(6, 8) + ", " + "Year: " + date.substring(1, 5);
}
  
//Server muss wissen über welchen Hostnamen und Port er laufen soll:
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//Starten mit: node ./A5-Server_Requests/server/server.js