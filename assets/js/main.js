// CREO UN ARRAY PER INSERIRCI DENTRO I NUMERI BOMBA
bombsArray = [];

// APPLICO LA FUNZIONE INSERENDO NEI PARAMETRI IL MIO ARRAY E IL NUMERO MAX DEL RANGE
bombs = numberRandomInRange(bombsArray, 100);
console.log(bombsArray);

// CREO UNA FUNZIONE PER GENERARE UN NUMERO RANDOM ENTRO UN RANGE CHE INSERISCA IL NUMERO DENTRO UN ARRAY SE IL NUMERO NON E' GIA PRESENTE ALL'INTERNO DI ESSO (PER EVITARE I NUMERI DUPLICATI)
function numberRandomInRange(array, max){
  while (array.length < 16) {
     var numberComputer = Math.floor(Math.random() * (max - 1 + 1) + 1);
     console.log(numberComputer);
    if (!(array.includes(numberComputer))) {
      array.push(numberComputer);
    }
  }
  return array;
}
