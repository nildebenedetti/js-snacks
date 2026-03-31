// 3 - Dato un array di numeri, scrivi il codice 
// che effettua la somma di tutti i valori. 
// BONUS: fai generare l'array all'utente tramite prompt. 
// nel momento in cui l'utente scrive "SOMMA" restituisci 
// in console o tramite alert la somma di tutti i valori inseriti dall'utente.

// const bolliniCoop = [5, 8, 9, 2, 5, 10]; // creo array con bollini sparsi per le tasche delle giacche

// BONUS
const bolliniCoop =[]; // dichiaro array vuoto per pusharci risposte dell' User

// ora tocca a user frugare

const primaFrugata = prompt('Dai una bella ravanata nella tasca della giacca. Quanti bollini Coop hai trovato?','7');
bolliniCoop.push(primaFrugata);

console.log(`Lo sapevo, ecco ${primaFrugata} bollini.`)

const secondaFrugata = prompt('Ora vedi un po nella borsa. Quanti bollini Coop hai trovato?','3');
bolliniCoop.push(secondaFrugata);
console.log(`Un classico, ecco ${primaFrugata} bollini.`)



let contoBollini = 0; // dichiaro variabile che conterra' somma bollini


// creo un ciclo for che ad ogni giro somma ad ogni giro i bolllini ritrovati

for (let i = 0; i < bolliniCoop.length; i++) {
    currentCounter = bolliniCoop[i];
    contoBollini = contoBollini + currentCounter;
}
console.log(`Pazzesco! Frugando nelle tasche della tua famiglia, hai raccattato ${contoBollini} della Coop!`);

