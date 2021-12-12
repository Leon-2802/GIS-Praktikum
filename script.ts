namespace script {


  const table: HTMLElement = document.getElementById("Tabelle");
  const tagesausflugInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("Tagesausflug"));
  const preisInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("Preis"));
  const datumInput: HTMLInputElement = <HTMLInputElement>(document.getElementById("Datum"));
  const submit: HTMLButtonElement = <HTMLButtonElement>(document.getElementById("submit"));
  const clear: HTMLButtonElement = <HTMLButtonElement>(document.getElementById("clear"));

  interface TabellenEintrag {
        tagesausflug: string;
        preis: string;
        datum: string;
        tageszeit: string;
    }

  let rows: TabellenEintrag[] = [];    
  let loadRows: TabellenEintrag[] = [];
  let savedRows: string;


  window.addEventListener("load", (): void => {
        loadTable();
    });


  clear.addEventListener("click", (): void => {
      localStorage.clear();
  });

  submit.addEventListener("click", (): void => {
    createEvent(tagesausflugInput.value, preisInput.value, datumInput.value.substring(0, 10), datumInput.value.substring(11, 16), true);
    setTimeout(function(): void {
        clearInput();
    },         100);
  });
   
    function createEvent(tagesausflugText: string, preisText: string, datumText: string, tageszeitText: string, save: boolean): void {
        let tabellenEintrag: HTMLElement = document.createElement("tr");
        let tagesausflug: HTMLElement = document.createElement("td");
        tagesausflug.textContent = tagesausflugText;
        let preis: HTMLElement = document.createElement("td");
        preis.textContent = preisText;
        let datum: HTMLElement = document.createElement("td");
        datum.textContent = datumText;
        let tageszeit: HTMLElement = document.createElement("td");
        tageszeit.textContent = tageszeitText;
        let löschZeile: HTMLElement = document.createElement("td");
        let löschButton: HTMLElement = document.createElement("i");
        löschButton.className = "fa fa-trash";
  
        table.appendChild(tabellenEintrag);
        tabellenEintrag.appendChild(tagesausflug);
        tabellenEintrag.appendChild(datum);
        tabellenEintrag.appendChild(tageszeit);
        tabellenEintrag.appendChild(preis);
        tabellenEintrag.appendChild(löschButton);
        löschZeile.appendChild(löschButton);
  
        
        if (save) {
            let saveRow: TabellenEintrag = {
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
  
        löschButton.addEventListener("click", (): void => {
            table.removeChild(tabellenEintrag);
        });  

}

  function clearInput(): void {
      tagesausflugInput.value = "";
      preisInput.value = "";
      datumInput.value = "";    
  }


  function loadTable(): void {
      if (localStorage.length < 1)
          return;

      loadRows = JSON.parse(localStorage.getItem("savedRows"));
      console.log(loadRows);
      for (let i: number = 0; i < loadRows.length; i++) {
          createEvent(loadRows[i].tagesausflug, loadRows[i].preis, loadRows[i].datum, loadRows[i].tageszeit, false);
      }
      rows = loadRows;
      loadRows = [];
  }
}