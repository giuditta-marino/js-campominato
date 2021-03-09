// CHIEDO ALL'UTENTE LIVELLO DI DIFFICOLTA'
var livello = parseInt(prompt("Scegli un livello di difficoltà tra 0 e 2:"));


// CREO UN ARRAY PER INSERIRCI DENTRO I NUMERI BOMBA
bombsArray = [];


// CREO UN ARRAY PER INSERIRCI I NUMERI FORNITI DALL'UTENTE
safeArray = [];

// APPLICO LA FUNZIONE CAMBIANDO IL PARAMETRO MAX IN BASE AL LIVELLO SCELTO DALL'UTENTE
switch (livello) {
  case "0":
  bombs = numberRandomInRange(bombsArray, 100);
  console.log(bombsArray);
  var punteggio = game(bombsArray, safeArray, 100, "Inserisci un numero compreso tra 1 e 100 e prova ad evitare le bombe:");

    break;
  case "1":
  bombs = numberRandomInRange(bombsArray, 80);
  console.log(bombsArray);
  var punteggio = game(bombsArray, safeArray, 80, "Inserisci un numero compreso tra 1 e 80 e prova ad evitare le bombe:");

    break;

  case "2":
  bombs = numberRandomInRange(bombsArray, 50);
  console.log(bombsArray);
  var punteggio = game(bombsArray, safeArray, 50, "Inserisci un numero compreso tra 1 e 50 e prova ad evitare le bombe:");

    break;
  default:
    alert('Scrivi un numero tra 0 e 2');
}

// CREO UNA FUNZIONE PER GENERARE UN NUMERO RANDOM ENTRO UN RANGE CHE INSERISCA IL NUMERO DENTRO UN ARRAY SE IL NUMERO NON E' GIA PRESENTE ALL'INTERNO DI ESSO (PER EVITARE I NUMERI DUPLICATI)
function numberRandomInRange(array, max){
  while (array.length < 16) {
     var numberComputer = Math.floor(Math.random() * (max - 1 + 1) + 1);
    if (!(array.includes(numberComputer))) {
      array.push(numberComputer);
    }
  }
  return array;
}


// RICHIAMO LA FUNZIONE
var punteggio = game(bombsArray, safeArray, 100);
document.getElementById('punteggio').innerHTML = "Game over" + "<br>" + "Il tuo punteggio è: " + punteggio;
console.log("game over");
console.log(punteggio);

// CHIEDERE ALL'UTENTE DI INSERIRE UN NUMERO ALLA VOLTA (FINO A UN MASSIMO DI 100 - 16 VOLTE) COMPRESO TRA 1 E 100.
  // CONTROLLO CHE IL NUMERO NON SIA RIPETUTO
    // CONTROLLO CHE IL NUMERO SIA UN NUMERO
      // CONTROLLO SE IL NUMERO E' PRESENTE NELL'ARRAY, SE LO E' FACCIO TERMINARE LA PARTITA, ALTRIMENTI CHIEDO UN ALTRO NUMERO
function game(bombsArray, safeArray, max, promptText){
  while (safeArray.length < max - 16) {
    var numeroUtente = parseInt(prompt(promptText));

    if (!isNaN(numeroUtente) && 1 <= numeroUtente && numeroUtente <= max && !safeArray.includes(numeroUtente)) {
      if (!bombsArray.includes(numeroUtente)) {
          safeArray.push(numeroUtente);
          console.log(numeroUtente);
      } else {
        return safeArray.length;
      }
    } else {
      return safeArray.length;
    }
  }
  return safeArray.length;
}

// CHIEDO ALL'UTENTE LIVELLO DI DIFFICOLTA'
// SE IL LIVELLO DI DIFFICOLTA' E' 0 IL RANGE DI NUMETRI E' TRA 1 E 100, CON LIVELLO 1 TRA 1 E 80, CON LIVELLO 2 TRA 1 E 50;
