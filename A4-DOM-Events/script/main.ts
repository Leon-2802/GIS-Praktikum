namespace main {

    const table: HTMLElement = document.getElementById("table");
    const artistInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("artist"));
    const priceInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("price"));
    const dateInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("date"));
    const submit: HTMLElement = (document.getElementById("submit"));

    submit.addEventListener("click", (): void => {
        createEvent();
        setTimeout(function(): void {
            clearInput();
        }, 100);
    });

    function createEvent(): void {
        let tableRow: HTMLElement = document.createElement("tr");
        let artist: HTMLElement = document.createElement("td");
        artist.textContent = artistInput.value;
        let price: HTMLElement = document.createElement("td");
        price.textContent = priceInput.value;
        let date: HTMLElement = document.createElement("td");
        let dateTime: string = dateInput.value;
        date.textContent = dateTime.substring(0, 10);
        let time: HTMLElement = document.createElement("td");
        time.textContent = dateTime.substring(11, 16);
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

        trash.addEventListener("click", (): void => {
            table.removeChild(tableRow);
        });
    }

    function clearInput(): void {
        artistInput.value = "";
        priceInput.value = "";
        dateInput.value = "";    
    }
}