var main;
(function (main) {
    //HTML-Elemente:
    var table = document.getElementById("table");
    var artistInput = (document.getElementById("artist"));
    var priceInput = (document.getElementById("price"));
    var dateInput = (document.getElementById("date"));
    var submit = (document.getElementById("submit"));
    var clear = (document.getElementById("clear"));
    //Variablen für Speicher-Funktionen:
    var rows = [];
    var loadRows = [];
    var savedRows;
    //Bei Laden der Seite:
    window.addEventListener("load", function () {
        loadTable();
    });
    //Button-Click Event-Listener:
    submit.addEventListener("click", function () {
        createEvent(artistInput.value, priceInput.value, dateInput.value.substring(0, 10), dateInput.value.substring(11, 16), true, 0);
        setTimeout(function () {
            clearInput();
        }, 100);
    });
    clear.addEventListener("click", function () {
        localStorage.clear();
    });
    //Events in Tabelle packen (bei Submit oder Neu-Laden der Seite):
    function createEvent(artistText, priceText, dateText, timeText, save, index) {
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
        var storageIndex = index;
        //Event in Localstorage speichern:
        if (save) {
            var saveRow = {
                artist: artist.textContent,
                price: price.textContent,
                date: date.textContent,
                time: time.textContent
            };
            rows.push(saveRow);
            storageIndex = rows.length - 1;
            updateStorage();
        }
        trash.addEventListener("click", function () {
            rows = JSON.parse(localStorage.getItem("savedRows"));
            rows.splice(storageIndex, 1);
            updateStorage();
            table.removeChild(tableRow);
        });
    }
    function clearInput() {
        artistInput.value = "";
        priceInput.value = "";
        dateInput.value = "";
    }
    function loadTable() {
        if (localStorage.length < 1)
            return;
        loadRows = JSON.parse(localStorage.getItem("savedRows"));
        for (var i = 0; i < loadRows.length; i++) {
            createEvent(loadRows[i].artist, loadRows[i].price, loadRows[i].date, loadRows[i].time, false, i);
        }
        rows = loadRows;
        loadRows = [];
    }
    function updateStorage() {
        savedRows = JSON.stringify(rows);
        localStorage.setItem("savedRows", savedRows);
    }
})(main || (main = {}));
//# sourceMappingURL=main.js.map