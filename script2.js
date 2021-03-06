
// Prendo gli elementi dal dom 
const winnerBtn = document.getElementById("disc-winner");
const displayElement1 = document.getElementById("result-display-2");



// Costruisco una funzione per generare un numero random da 1 a 5 in questo caso 
function rndNum(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

// Costruisco una funzione per calcolare la somma tra il numero random e quello dell'utente 
function sum(num1, num2) {
    const somma = num1 + num2;
    return somma;
}

// Costruisco una funzione per verificare se la somma è pari o dispari 
function isOdd(total) {
    let result = "";
    if (total % 2) {
        result = "dispari";
    } else {
        result = "pari";
    }
    return result;
}



// Associo al bottone l'evento click 
winnerBtn.addEventListener('click', function () {

    // Prendo il valore dei campi input dal dom 
    const userChoice = document.getElementById("user-choice").value;
    const userNumber = parseInt(document.getElementById("user-number").value.trim());

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        displayElement1.innerText = "Non hai inserito un numero corretto";
    } else {
        // Invoco le funzioni con i relativi paramentri e stampo il risultato in console 
        const pcRandom = rndNum(1, 5);
        console.log(`Il numero del pc è ${pcRandom}`);

        const sommaNumeri = sum(userNumber, pcRandom);
        console.log(`la somma è ${sommaNumeri}`);

        const pariDispari = isOdd(sommaNumeri);
        console.log(pariDispari);

        // Controllo se ha vinto l'utente con la scelta di prima o il computer 
        if (userChoice === pariDispari) {
            displayElement1.innerText = "Ha vinto l'utente";
        } else {
            displayElement1.innerText = "Ha vinto il computer";
        }
    }
});