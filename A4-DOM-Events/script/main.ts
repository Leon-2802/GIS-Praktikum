namespace main {

    //HTML-Elemente:
    const table: HTMLElement = document.getElementById("table");
    const artistInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("artist"));
    const priceInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("price"));
    const dateInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("date"));
    const submit: HTMLButtonElement = <HTMLButtonElement>(document.getElementById("submit"));
    const clear: HTMLButtonElement = <HTMLButtonElement>(document.getElementById("clear"));

    //Vorlage für Event-Elemente:
    interface TableRow {
        artist: string;
        price: string;
        date: string;
        time: string;
    }

    //Variablen für Speicher-Funktionen:
    let rows: TableRow[] = [];    
    let loadRows: TableRow[] = [];
    let savedRows: string;

    //Bei Laden der Seite:
    window.addEventListener("load", (): void => {
        loadTable();
    });

    //Button-Click Event-Listener:
    submit.addEventListener("click", (): void => {
        createEvent(artistInput.value, priceInput.value, dateInput.value.substring(0, 10), dateInput.value.substring(11, 16), true);
        setTimeout(function(): void {
            clearInput();
        },         100);
    });
    clear.addEventListener("click", (): void => {
        localStorage.clear();
    });

    //Events in Tabelle packen (bei Submit oder Neu-Laden der Seite):
    function createEvent(artistText: string, priceText: string, dateText: string, timeText: string, save: boolean): void {
        let tableRow: HTMLElement = document.createElement("tr");
        let artist: HTMLElement = document.createElement("td");
        artist.textContent = artistText;
        let price: HTMLElement = document.createElement("td");
        price.textContent = priceText;
        let date: HTMLElement = document.createElement("td");
        date.textContent = dateText;
        let time: HTMLElement = document.createElement("td");
        time.textContent = timeText;
        let trashContainer: HTMLElement = document.createElement("td");
        let trash: HTMLElement = document.createElement("i");
        trash.className = "fa fa-trash";

        table.appendChild(tableRow);
        tableRow.appendChild(artist);
        tableRow.appendChild(date);
        tableRow.appendChild(time);
        tableRow.appendChild(price);
        tableRow.appendChild(trashContainer);
        trashContainer.appendChild(trash);

        let storageIndex: number = 0;
        //Event in Localstorage speichern:
        if (save) {
            let saveRow: TableRow = {
                artist: artist.textContent,
                price: price.textContent,
                date: date.textContent,
                time: time.textContent
            };
            rows.push(saveRow);
            storageIndex = rows.length - 1;
    
            updateStorage();
        }

        trash.addEventListener("click", (): void => {
            table.removeChild(tableRow);
            rows = JSON.parse(localStorage.getItem("savedRows"));
            rows.splice(storageIndex, 1);
            updateStorage();
        });
    }

    function clearInput(): void {
        artistInput.value = "";
        priceInput.value = "";
        dateInput.value = "";    
    }

    function loadTable(): void {
        if (localStorage.length < 1)
            return;

        loadRows = JSON.parse(localStorage.getItem("savedRows"));
        for (let i: number = 0; i < loadRows.length; i++) {
            createEvent(loadRows[i].artist, loadRows[i].price, loadRows[i].date, loadRows[i].time, false);
        }
        rows = loadRows;
        loadRows = [];
    }

    function updateStorage(): void {
        savedRows = JSON.stringify(rows);
        localStorage.setItem("savedRows", savedRows);
    }
}