var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var client;
(function (client) {
    //HTML-Elemente:
    var table = document.getElementById("table");
    var artistInput = (document.getElementById("artist"));
    var priceInput = (document.getElementById("price"));
    var dateInput = (document.getElementById("date"));
    var submit = (document.getElementById("submit"));
    //Server-Stuff:
    var _url = "http://localhost:3000/";
    var portSingle = "concertEvent";
    var portAll = "concertEvents";
    var eventsFromServer = [];
    window.addEventListener("load", function () {
        getEventsFromServer();
    });
    submit.addEventListener("click", onSubmitEvent);
    function getEventsFromServer() {
        return __awaiter(this, void 0, void 0, function () {
            var response, text, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(_url + portAll)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        text = _a.sent();
                        eventsFromServer = JSON.parse(text);
                        console.log(eventsFromServer);
                        //Events in Tabelle laden:
                        for (i = 0; i < eventsFromServer.length; i++) {
                            createEvent(eventsFromServer[i].artist, eventsFromServer[i].price, eventsFromServer[i].date, eventsFromServer[i].time);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    function onSubmitEvent(event) {
        return __awaiter(this, void 0, void 0, function () {
            var concertEvent;
            return __generator(this, function (_a) {
                event.preventDefault();
                concertEvent = {
                    index: eventsFromServer.length - 1,
                    artist: artistInput.value,
                    date: dateInput.value.substring(0, 10),
                    time: dateInput.value.substring(11, 16),
                    price: priceInput.value
                };
                eventsFromServer.push(concertEvent);
                console.log(concertEvent);
                createEvent(concertEvent.artist, concertEvent.price, concertEvent.date, concertEvent.time);
                sendJSONStringWithPost(_url + portSingle, JSON.stringify(concertEvent));
                setTimeout(function () {
                    clearInput();
                }, 100);
                return [2 /*return*/];
            });
        });
    }
    function sendJSONStringWithPost(url, jsonString) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url, {
                            method: "POST",
                            body: jsonString
                        })];
                    case 1:
                        _a.sent();
                        console.log("event sent");
                        return [2 /*return*/];
                }
            });
        });
    }
    //Events in Tabelle packen (bei Submit oder Neu-Laden der Seite):
    function createEvent(artistText, priceText, dateText, timeText) {
        var tableRow = document.createElement("tr");
        var artist = document.createElement("td");
        artist.textContent = artistText;
        var price = document.createElement("td");
        price.textContent = priceText;
        var date = document.createElement("td");
        date.textContent = dateText;
        var time = document.createElement("td");
        time.textContent = timeText;
        var trashContainer = document.createElement("td");
        var trash = document.createElement("i");
        trash.className = "fa fa-trash";
        table.appendChild(tableRow);
        tableRow.appendChild(artist);
        tableRow.appendChild(date);
        tableRow.appendChild(time);
        tableRow.appendChild(price);
        tableRow.appendChild(trashContainer);
        trashContainer.appendChild(trash);
        trash.addEventListener("click", function () {
            table.removeChild(tableRow);
        });
    }
    function clearInput() {
        artistInput.value = "";
        priceInput.value = "";
        dateInput.value = "";
    }
})(client || (client = {}));
//# sourceMappingURL=client.js.map