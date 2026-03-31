// # 1
// Dato un array, fai in modo di trovare attraverso un for 
// un valore specificato dall'utente. Restituisci come risposta 
// un alert o console.log che dica se il valore esiste o meno

const animali = ['cane', 'gatto', 'cavallo', 'cammello', 'uccellino'];

const avatarUtente = prompt('scegli il tuo avatar tra uno dei seguenti animali: cane, gatto, cavallo, cammello, uccellino', 'uccellino');
let trovato = false;

// ad ogni giro, cerca currentAnimale in animali

// fai questo fino a quandop trovato = falso
// se. trovato = vero, ESCI



do {
    for (let i = 0; i < animali.length; i++) {
    let currentAnimale = animali[i];

    // se il valore = input utente, top.
    if (currentAnimale === avatarUtente) {
        console.log('Ottima scelta!');
        let trovato = true;
    }

    // se il valore che si trova in posizione i 
    // e'diverso dallínput utente E
    // la posizione i coincide con l'ultimo valore dell'array
    // ALLORA chiedo a utente di fare una scelta valida

    else if (currentAnimale !== avatarUtente && 
        i === animali.length - 1)  {
        console.error('Effettua una scelta valida!');
        
    }

}

} while ( trovato = false); 
