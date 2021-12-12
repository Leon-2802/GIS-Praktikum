const dateInput: HTMLInputElement = <HTMLInputElement> document.getElementById("dateInput");
const sendBtn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("send");
const answerArea: HTMLElement = document.getElementById("answer");

const url: string = "http://127.0.0.1:3000";
const path: string = "/convertDate";

sendBtn.addEventListener("click", (evt: Event) => {
  evt.preventDefault();
  sendDateToServer();
});


async function requestDateWithGet(url: RequestInfo): Promise<string> {
  let response: Response = await fetch(url);
  let date: string = await response.text();
  
  return date;
}

async function sendDateToServer(): Promise<void> {
  let inputValue: string = JSON.stringify(dateInput.value);
  let serverResponse: string = await requestDateWithGet(url + path + `?date=${inputValue}`); //innerhalb von ${} kann ein Wert übergeben werden
  attachDateToDOM(serverResponse);
}

function attachDateToDOM(serverResponse: string): void { 
  let newDate: HTMLElement = document.createElement("p");
  newDate.className = "serverResponse";
  newDate.textContent = serverResponse;

  answerArea.appendChild(newDate);
}