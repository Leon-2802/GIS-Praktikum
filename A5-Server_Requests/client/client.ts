const dateInput: HTMLInputElement = <HTMLInputElement> document.getElementById("dateInput");
const sendBtn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("send");
const answerArea: HTMLElement = document.getElementById("answer");

const url: string = "http://127.0.0.1:3000";
const path: string = "/convertDate"; //Wichtig um die richtige Aktion im Switch-Case der Server-Funktion auszulösen

sendBtn.addEventListener("click", (evt: Event) => {
  evt.preventDefault();
  sendDateToServer();
});

//Async ist eine Funktion die asynchron außerhalb des üblichen Kontrollflusses verläuft, so wird die Seite nicht blockiert, da der JS-Code weiter ausgeführt werden kann
//async functions dürfen einen await ausdruck enthalten, welcher die asynchrone Funktion anhält. Zudem sind sie vom Typ Promise, ein Objekt, dass ein asynchrones Ereignis verwaltet
async function requestDateWithGet(url: RequestInfo): Promise<string> { //Promise bewertet während dem Anhalten durch await ob ein unbehandelter Fehler auftaucht (-> rejected), oder ob die Funktion korrekt verlief und weiterlaufen kann (->resolved)
  let response: Response = await fetch(url); //fetch...?
  let date: string = await response.text();
  
  return date;
}

async function sendDateToServer(): Promise<void> {
  let inputValue: string = JSON.stringify(dateInput.value);
  let serverResponse: string = await requestDateWithGet(url + path + `?date=${inputValue}`); //innerhalb von ${} kann ein Wert übergeben werden
  attachDateToDOM(serverResponse); //serverResponse ist der in der convertAndPrintDate()-Methode in server.js erstellte String -> Dieser wird nun in den DOM gepackt
}

function attachDateToDOM(serverResponse: string): void { 
  let newDate: HTMLElement = document.createElement("p");
  newDate.className = "serverResponse";
  newDate.textContent = serverResponse;

  answerArea.appendChild(newDate);
}