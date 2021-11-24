var main;
(function (main) {
    var table = document.getElementById("table");
    var artistInput = (document.getElementById("artist"));
    var priceInput = (document.getElementById("price"));
    var dateInput = (document.getElementById("date"));
    var submit = (document.getElementById("submit"));
    var load = (document.getElementById("load"));
    var clear = (document.getElementById("load"));
    var rows = [];
    var loadRows = [];
    var savedRows;
    window.addEventListener("load", function () {
        loadTable();
    });
    submit.addEventListener("click", function () {
        createEvent(artistInput.value, priceInput.value, dateInput.value.substring(0, 10), dateInput.value.substring(11, 16), true);
        setTimeout(function () {
            clearInput();
        }, 100);
    });
    load.addEventListener("click", function () {
        console.log(loadRows);
        loadTable();
    });
    clear.addEventListener("click", function () {
        localStorage.clear();
    });
    function createEvent(artistText, priceText, dateText, timeText, save) {
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
        if (save) {
            var saveRow = {
                artist: artist.textContent,
                price: price.textContent,
                date: date.textContent,
                time: time.textContent
            };
            rows.push(saveRow);
            savedRows = JSON.stringify(rows);
            console.log(savedRows);
            localStorage.setItem("savedRows", savedRows);
        }
        trash.addEventListener("click", function () {
            table.removeChild(tableRow);
        });
    }
    function clearInput() {
        artistInput.value = "";
        priceInput.value = "";
        dateInput.value = "";
    }
    function loadTable() {
        loadRows = JSON.parse(localStorage.getItem("savedRows"));
        console.log(loadRows);
        for (var i = 0; i < loadRows.length; i++) {
            createEvent(loadRows[i].artist, loadRows[i].price, loadRows[i].date, loadRows[i].time, false);
        }
        rows = loadRows;
        loadRows = [];
    }
})(main || (main = {}));
//# sourceMappingURL=main.js.map