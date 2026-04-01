// Dati due array, realizza uno script che mostri 
// in console gli elementi comuni ai due array.

// dichiaro i due array da confrontare
const amicaUno = ['simpatica', 'brava a cucinare', 'sa cantare', 'crede negli oroscopi', 'usa il Dyson per i capelli', 'parla il tedesco'];
const amicaDue = ['permalosa', 'ama il cioccolato', 'crede negli oroscopi', 'va in palestra', 'sa cantare', 'brava a cucinare'];



function friendMatcher (firstFriend, secondFriend) {
    // dichiaro array vuoto per pushare feature in comune
    const commonFeatures = [];
    // ciclo for per far scorrere il primo array
    for (let i = 0; i < firstFriend.length; i++) {
        // variabile di supporto per identificare la feature del giro
        const currentFeature = firstFriend[i];
        if (secondFriend.includes(currentFeature) === true) {
            commonFeatures.push(currentFeature);
        }
    }
    return commonFeatures;
}

const aspettiInComune = friendMatcher(amicaUno,amicaDue);
console.log(aspettiInComune);

