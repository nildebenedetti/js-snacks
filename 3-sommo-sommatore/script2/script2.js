// 3 - Dato un array di numeri, scrivi il codice 
// che effettua la somma di tutti i valori. 
// BONUS: fai generare l'array all'utente tramite prompt. 
// nel momento in cui l'utente scrive "SOMMA" restituisci 
// in console o tramite alert la somma di tutti i valori inseriti dall'utente.

// const bolliniCoop = [5, 8, 9, 2, 5, 10]; // creo array con bollini sparsi per le tasche delle giacche

// BONUS
const bolliniCoop =[]; // dichiaro array vuoto per pusharci risposte dell' User
let contoBollini = 0; // dichiaro variabile che conterra' somma bollini

// ora tocca a user frugare

const primaFrugata = Number(prompt('Dai una bella ravanata nella tasca della giacca. Quanti bollini Coop hai trovato?','7'));
bolliniCoop.push(primaFrugata);

console.log(`Lo sapevo, ecco ${primaFrugata} bollini.`)

const secondaFrugata = Number(prompt('Ora vedi un po nella borsa. Quanti bollini Coop hai trovato?','3'));
bolliniCoop.push(secondaFrugata);
console.log(`Un classico, ecco ${secondaFrugata} bollini.`)

const terzaFrugata = Number(prompt('Ora vediamo cosa trovi nei jeans di tuo fratello. Quanti bollini Coop hai trovato?','2'));
bolliniCoop.push(terzaFrugata);
console.log(`Pure lui li chiede quindi... ecco ${terzaFrugata} bollini.`)

const quartaFrugata = Number(prompt('Per sicurezza, controlla la cuccia del cane. Quanti bollini Coop hai trovato?','8'));
bolliniCoop.push(quartaFrugata);
console.log(`Ma in che senso???? Ecco ${quartaFrugata} bollini. O___O`)



// creo un ciclo for che ad ogni giro somma ad ogni giro i bolllini ritrovati

for (let i = 0; i < bolliniCoop.length; i++) {
    currentCounter = bolliniCoop[i];
    contoBollini = contoBollini + currentCounter;
}
console.log(`Pazzesco! Frugando nelle tasche della tua famiglia, hai raccattato ${contoBollini} della Coop!`);
