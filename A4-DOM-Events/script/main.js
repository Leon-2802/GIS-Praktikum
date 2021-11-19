var main;
(function (main) {
    var table = document.getElementById("table");
    var artistInput = (document.getElementById("artist"));
    var priceInput = (document.getElementById("price"));
    var dateInput = (document.getElementById("date"));
    var submit = (document.getElementById("submit"));
    submit.addEventListener("click", function () {
        createEvent();
        setTimeout(function () {
            clearInput();
        }, 100);
    });
    function createEvent() {
        var tableRow = document.createElement("tr");
        var artist = document.createElement("td");
        artist.textContent = artistInput.value;
        var price = document.createElement("td");
        price.textContent = priceInput.value;
        var date = document.createElement("td");
        var dateTime = dateInput.value;
        date.textContent = dateTime.substring(0, 10);
        var time = document.createElement("td");
        time.textContent = dateTime.substring(11, 16);
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
})(main || (main = {}));
//# sourceMappingURL=main.js.map