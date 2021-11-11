// -- [Aufgabe 1]
/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
var age = 20;
/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
var firstName = "Leon";
function func1(age) {
    return 2021 - age;
}
var output = func2(firstName);
function func3(meal) {
    console.log("Ich esse gerne " + (meal || "Pizza") + ".");
    return func1(age) > 1995
        ? "Ich geh\u00F6re zur Generation Z"
        : "Ich geh\u00F6re zur Generation Y";
}
console.log(output);
function func2(name) {
    console.log("Ich hei\u00DFe " + name + ".");
    return func3();
}
/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich heiße Leon.
   Ich esse gerne Pizza.
   Ich gehöre zur Generation Z
 */
// -- [Aufgabe 2]
var events = [
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
for (var i = 0; i < events.length; i++) {
    console.log(events[i][0]);
    console.log(events[i][1]);
}
// Lösung c) ...
function lösungc(array) {
    var result = 0;
    for (var i = 1; i < array.length; i++) {
        var currentNumber = array[i][1];
        if (currentNumber > result)
            result = currentNumber;
    }
    return result;
}
console.log(lösungc(events));
// Lösung d) ...
function lösungd(name) {
    for (var i = 0; i < events.length; i++) {
        if (name == events[i][0])
            return true;
    }
    return false;
}
console.log(lösungd("Mark Knopfler"));
// Lösung e) ...
function factorial(n) {
    var result = 1;
    while (n > 0) {
        result *= n;
        n--;
    }
    console.log(result);
}
factorial(5);
// Lösung f) ...
function lösungf() {
    var anzahl = 0;
    for (var i = 100; i > 0; i--) {
        if ((i % 3) == 0) {
            console.log(i);
            anzahl++;
        }
    }
    console.log(anzahl);
}
lösungf();
// Lösung g) ...
var ConcertEvent = /** @class */ (function () {
    function ConcertEvent(interpret, price) {
        this.interpret = interpret;
        this.price = price;
    }
    ConcertEvent.prototype.show = function () {
        console.log(this.interpret);
        console.log(this.price);
    };
    return ConcertEvent;
}());
// Lösung h) ...
var concertArray = [
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
for (var i = 0; i < concertArray.length; i++) {
    concertArray[i].show();
}
//# sourceMappingURL=script_vorlage1.js.map