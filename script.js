var script;
(function (script) {
    var table = document.getElementById("Tabelle");
    var tagesausflugInput = (document.getElementById("Tagesausflug"));
    var preisInput = (document.getElementById("Preis"));
    var datumInput = (document.getElementById("Datum"));
    var submit = (document.getElementById("submit"));
    var clear = (document.getElementById("clear"));
    var rows = [];
    var loadRows = [];
    var savedRows;
    window.addEventListener("load", function () {
        loadTable();
    });
    clear.addEventListener("click", function () {
        localStorage.clear();
    });
    submit.addEventListener("click", function () {
        createEvent(tagesausflugInput.value, preisInput.value, datumInput.value.substring(0, 10), datumInput.value.substring(11, 16), true);
        setTimeout(function () {
            clearInput();
        }, 100);
    });
    function createEvent(tagesausflugText, preisText, datumText, tageszeitText, save) {
        var tabellenEintrag = document.createElement("tr");
        var tagesausflug = document.createElement("td");
        tagesausflug.textContent = tagesausflugText;
        var preis = document.createElement("td");
        preis.textContent = preisText;
        var datum = document.createElement("td");
        datum.textContent = datumText;
        var tageszeit = document.createElement("td");
        tageszeit.textContent = tageszeitText;
        var löschZeile = document.createElement("td");
        var löschButton = document.createElement("i");
        löschButton.className = "fa fa-trash";
        table.appendChild(tabellenEintrag);
        tabellenEintrag.appendChild(tagesausflug);
        tabellenEintrag.appendChild(datum);
        tabellenEintrag.appendChild(tageszeit);
        tabellenEintrag.appendChild(preis);
        tabellenEintrag.appendChild(löschButton);
        löschZeile.appendChild(löschButton);
        if (save) {
            var saveRow = {
                tagesausflug: tabellenEintrag.textContent,
                preis: preis.textContent,
                datum: datum.textContent,
                tageszeit: tageszeit.textContent
            };
            rows.push(saveRow);
            savedRows = JSON.stringify(rows);
            console.log(savedRows);
            localStorage.setItem("savedRows", savedRows);
        }
        löschButton.addEventListener("click", function () {
            table.removeChild(tabellenEintrag);
        });
    }
    function clearInput() {
        tagesausflugInput.value = "";
        preisInput.value = "";
        datumInput.value = "";
    }
    function loadTable() {
        if (localStorage.length < 1)
            return;
        loadRows = JSON.parse(localStorage.getItem("savedRows"));
        console.log(loadRows);
        for (var i = 0; i < loadRows.length; i++) {
            createEvent(loadRows[i].tagesausflug, loadRows[i].preis, loadRows[i].datum, loadRows[i].tageszeit, false);
        }
        rows = loadRows;
        loadRows = [];
    }
})(script || (script = {}));
//# sourceMappingURL=script.js.map