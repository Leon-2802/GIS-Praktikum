import * as http from "http";
import * as mongo from "mongodb";

const hostname: string = "127.0.0.1"; // localhost
const port: number = 3000;
const mongoUrl: string = "mongodb://localhost:27017"; // für lokale MongoDB
let mongoClient: mongo.MongoClient = new mongo.MongoClient(mongoUrl);

// tslint:disable-next-line:typedef
async function dbFind (
    // tslint:disable-next-line:no-any
    db: string, collection: string, requestObject: any, response: http.ServerResponse) {
  // tslint:disable-next-line:no-any
  let result: any = await mongoClient
    .db(db)
    .collection(collection)
    .find(requestObject)
    .toArray();
  // console.log(result, requestObject); // bei Fehlern zum Testen
  response.setHeader("Content-Type", "application/json");
  response.write(JSON.stringify(result));
}

const server: http.Server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {

    response.statusCode = 200;
    response.setHeader("Access-Control-Allow-Origin", "*"); // bei CORS Fehler

    let url: URL = new URL(request.url || "", `http://${request.headers.host}`);

    switch (url.pathname) {
      case "/concertEvent": {
        await mongoClient.connect();
        switch (request.method) {
          case "GET":
            await dbFind(
              "budapest",
              "events",
              {
                index: Number(url.searchParams.get("index")) // von String zu Zahl konvertieren
              },
              response
            );
            break;
          case "POST":
            let jsonString: string = "";
            request.on("data", data => {
              jsonString += data;
            });
            request.on("end", async () => {
              mongoClient
                .db("budapest")
                .collection("events")
                .insertOne(JSON.parse(jsonString));
            });
            break;
        }
        break;
      }
      case "/concertEvents": {
        await mongoClient.connect();
        switch (request.method) {
          case "GET":
            await dbFind("budapest", "events", {}, response);
            break;
        }
        break;
      }
      default:
        response.statusCode = 404;
    }
    response.end();
  }
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Starten mit: node ./A6-Formulare+Webapp/script/server/server.js
//Verbindung checken: http://localhost:3000/concertEvents