// -- [Aufgabe 1]

/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age: number = 20;

/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName: string = `Leon`;

function func1(age: number): number {
  return 2021 - age;
}

let output: string = func2(firstName);

function func3(meal?: string): string {
  console.log(`Ich esse gerne ${meal || "Pizza"}.`);
  return func1(age) > 1995
    ? `Ich gehöre zur Generation Z`
    : `Ich gehöre zur Generation Y`;
}

console.log(output);

function func2(name: string): string {
  console.log(`Ich heiße ${name}.`);
  return func3();
}

/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich heiße Leon.
   Ich esse gerne Pizza.
   Ich gehöre zur Generation Z
 */

// -- [Aufgabe 2]

let events: any[][] = [
  ["Mark Knopfler", 10.1],
  ["Pink Floyd", 15.9],
  ["Metallica", 20.1],
  ["Michael Bublé", 11.1],
  ["Dire Straits", 12.2],
  ["Mariah Carey", 1.1],
  ["Cat Stevens", 27.9],
  ["Mark Forster", 2.1],
  ["Helene Fischer", 3.1],
  ["Bee Gees", 100.2]
];

// -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN

// Lösung a) ...
console.log(events.length);

// Lösung b) ...
for (let i:number = 0; i < events.length; i++) {
  console.log(events[i][0]);
  console.log(events[i][1]);
}

// Lösung c) ...
function lösungc(array:any[][]): number {
  let result:number = 0;
    for(let i:number = 1; i < array.length; i++) {
      let one: number = events[i][1];
      if(one > result) 
        result = one; 
    }
    return result;
} 
console.log(lösungc(events));

// Lösung d) ...
function lösungd(name: string): boolean {
  for (let i: number = 0; i < events.length; i++) {
    if (name == events[i][0])
      return true;
  }
  return false;
}
console.log(lösungd("Mark Knopfler"));

// Lösung e) ...
function factorial(n: number): void {
  let result: number = 1;
  while (n > 0) {
    result *= n;
    n--;
  }
  console.log(result);
}
factorial(5);

// Lösung f) ...
function lösungf(): void {
  for (let i: number = 1; i < 33; i++) {
    console.log(i * 3);
  }
  console.log(33);
}
lösungf();

// Lösung g) ...
class ConcertEvent {

  private interpret: string;
  private price: number;

  constructor(interpret: string, price: number) {
    this.interpret = interpret;
    this.price = price;
  }

  show():void {
    console.log(this.interpret);
    console.log(this.price);
  }

}

// Lösung h) ...
let concertArray: ConcertEvent[] = [
  new ConcertEvent("Mark Knopfler", 10.1),
  new ConcertEvent("Pink Floyd", 15.9),
  new ConcertEvent("Metallica", 20.1),
  new ConcertEvent("Michael Bublé", 11.1),
  new ConcertEvent("Dire Straits", 12.2),
  new ConcertEvent("Mariah Carey", 1.1),
  new ConcertEvent("Cat Stevens", 27.9),
  new ConcertEvent("Mark Forster", 2.1),
  new ConcertEvent("Helene Fischer", 3.1),
  new ConcertEvent("Bee Gees", 100.2)
];

for(let i:number = 0; i < concertArray.length; i++) {
  concertArray[i].show();
}