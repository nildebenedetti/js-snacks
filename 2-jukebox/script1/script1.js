// # 2
// Dato un array, fai in modo di trovare attraverso un for 
// un valore specificato dall'utente. Restituisci come risposta 
// un alert o console.log che dica l'indice dell'elemento

// dichiaro l array

const canzoniBellissime = ['I Remember You - Skid Row', 'Love of My Life - Queen', 'Going Where the Wind Blows - Mr. Big', 'I Dont Love You - MCR', 'Stay - Rihanna', 'True Colors - Cindy Lauper']

//registro la canzone che l utente vuole ascoltare

const CanzoneUtente = prompt('Dimmi che canzone vuoi, ti indico il tasto del JukeBox!', 'Love of My Life - Queen')

// valore booleano per uscire dal loop
let trovato = false;


    // ad ogni giro, cerca la canzoneUtente nei valori di CanzoniBellissime
    for (let i = 0; i < canzoniBellissime.length; i++) {
        // ad ogni giro, current canzone === valore in posizione i
        let currentCanzone = canzoniBellissime[i];
        let tastoJukebox = Number(i + 1); // mai sentita la canzone 0, si parte da 1!

        // se la canzone di questa iterazione e'uguale a quella dell' utente
        if (currentCanzone === CanzoneUtente) {
            // allora gli diciamo di riprodurre la traccia con il suo indice!
            console.log(`Seleziona ${tastoJukebox} e premi play!
                Buon ascolto. :)`);
            trovato = true;
            break;
        }
    }
    if (!trovato) {
        console.error('Brano non valido!');
    }


