import * as http from "http";

//Server:

const hostname: string = "127.0.0.1";
const port: number = 3000;

const server: http.Server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {

      response.statusCode = 200; //200 = alles ist in Ordnung

      response.setHeader("Content-Type", "text/plain");
      response.setHeader("Access-Control-Allow-Origin", "*"); // bei CORS Fehler

      let url: URL = new URL(request.url || "", `http://${request.headers.host}`);
      switch (url.pathname) { 
        case "/":
          response.write("Server erreichbar");
          break;
        case "/convertDate":
          let sentDate: string = url.searchParams.get("date") || ""; // || "" ist da um, falls "date" nicht vorhanden ist, einen leeren String zurückzugeben, anstatt null
          response.end(convertAndPrintDate(sentDate)); //Die Server Response, die an den client zurück geht
          break;
        default:
          response.statusCode = 404; //Fehlermessage, falls Server nicht gefunden
      }  
      response.end();
    }
);

function convertAndPrintDate(date: string): string {
  return "Day: " + date.substring(9, 11) + ", " + "Month: " + date.substring(6, 8) + ", " + "Year: " + date.substring(1, 5);
}
  
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//Starten mit: node ./A5-Server_Requests/server/server.js