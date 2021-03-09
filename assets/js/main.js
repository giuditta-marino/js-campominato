// CREO UN ARRAY PER INSERIRCI DENTRO I NUMERI BOMBA
bombsArray = [];

// APPLICO LA FUNZIONE INSERENDO NEI PARAMETRI IL MIO ARRAY E IL NUMERO MAX DEL RANGE
bombs = numberRandomInRange(bombsArray, 100);
console.log(bombsArray);

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


// CREO UN ARRAY PER INSERIRCI I NUMERI FORNITI DALL'UTENTE
safeArray = [];

// RICHIAMO LA FUNZIONE
var punteggio = game(bombsArray, safeArray, 100);
console.log("game over");
console.log(punteggio);
console.log(safeArray);

// CHIEDERE ALL'UTENTE DI INSERIRE UN NUMERO ALLA VOLTA (FINO A UN MASSIMO DI 100 - 16 VOLTE) COMPRESO TRA 1 E 100.
  // CONTROLLO CHE IL NUMERO NON SIA RIPETUTO
    // CONTROLLO CHE IL NUMERO SIA UN NUMERO
      // CONTROLLO SE IL NUMERO E' PRESENTE NELL'ARRAY, SE LO E' FACCIO TERMINARE LA PARTITA, ALTRIMENTI CHIEDO UN ALTRO NUMERO

function game(bombsArray, safeArray, max){
  while (safeArray.length < max - 16) {
    var numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 100 e prova ad evitare le bombe:"));

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
