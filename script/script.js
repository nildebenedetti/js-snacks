

// # 1
// Dato un array, fai in modo di trovare attraverso un for 
// un valore specificato dall'utente. Restituisci come risposta 
// un alert o console.log che dica se il valore esiste o meno

/* SCOMMENTA PER CHECK

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

} while ( trovato = false); */


// # 2
// Dato un array, fai in modo di trovare attraverso un for 
// un valore specificato dall'utente. Restituisci come risposta 
// un alert o console.log che dica l'indice dell'elemento

// dichiaro l array

const canzoniBellissime = ['I Remember You - Skid Row', 'Love of My Life - Queen', 'Going Where the Wind Blows - Mr. Big', 'I Dont Love You - MCR', 'Stay - Rihanna', 'True Colors - Cindy Lauper']

//registro la canzone che l utente vuole ascoltare

const CanzoneUtente = prompt('Dimmi che canzone vuoi, ti indico il tasto del JukeBox!', 'Love of My Life - Queen')

// valore booleano per uscire dal loop
trovato = false;

// fai questo, finche'non hai trovato la canzone!

do {

    // ad ogni giro, cerca la canzoneUtente nei valori di CanzoniBellissime
    for (let i = 0; i < canzoniBellissime.length - 1; i++) {
        // ad ogni giro, current canzone === valore in posizione i
        let currentCanzone = canzoniBellissime[i];
        let tastoJukebox = Number(i + 1); // mai sentita la canzone 0, si parte da 1!

        // se la canzone di questa iterazione e'uguale a quella dell' utente
        if (currentCanzone === CanzoneUtente) {
            // allora gli diciamo di riprodurre la traccia con il suo indice!
            console.log(`Seleziona ${tastoJukebox} e premi play!
                Buon ascolto. :)`);
            trovato = true;

        }
        
        if (trovato === false) {
            
        }

    }
} while (trovato === false)

