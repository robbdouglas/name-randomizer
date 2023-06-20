// Liste der Namen
var namen = ["Kai", "Robb", "Anna", "Melle", "Melisa"];
// Array für bereits gezogene Namen
var gezogeneNamen = [];

// Würfel-Button
var wuerfelnButton = document.getElementById("wuerfeln-btn");
// Zurücksetzen-Button
var zuruecksetzenButton = document.getElementById("zuruecksetzen-btn");
// Ausgabefelder für den zuletzt und aktuell gezogenen Namen
var zuletztGezogenFeld = document.getElementById("zuletzt-gezogen");
var aktuellGezogenFeld = document.getElementById("aktuell-gezogen");

// Funktion zum Würfeln
function wuerfeln() {
  if (namen.length === 0) {
    // Alle Namen wurden bereits gezogen
    zuletztGezogenFeld.textContent = "Zuletzt gezogen: " + gezogeneNamen[gezogeneNamen.length - 1];
    aktuellGezogenFeld.textContent = "Jeder war mal dran, bitte zurücksetzen!";
    return;
  }
  
  var zufallsIndex = Math.floor(Math.random() * namen.length);
  var aktuellGezogen = namen.splice(zufallsIndex, 1)[0];
  
  gezogeneNamen.push(aktuellGezogen);
  
  zuletztGezogenFeld.textContent = "Zuletzt gezogen: " + (gezogeneNamen.length > 1 ? gezogeneNamen[gezogeneNamen.length - 2] : "");
  aktuellGezogenFeld.textContent = "Aktuell gezogen: " + aktuellGezogen;
}

// Funktion zum Zurücksetzen
function zuruecksetzen() {
  namen = gezogeneNamen.concat(namen);
  gezogeneNamen = [];
  zuletztGezogenFeld.textContent = "Zuletzt gezogen: ";
  aktuellGezogenFeld.textContent = "Aktuell gezogen: ";
}

// Eventlistener für den Würfeln-Button
wuerfelnButton.addEventListener("click", wuerfeln);

// Eventlistener für den Zurücksetzen-Button
zuruecksetzenButton.addEventListener("click", zuruecksetzen);
