const userChoice = prompt("scegli pari o dispari");
const userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));

function rndNum(max , min){
    return Math.floor(Math.random() *  (max - min)) + min;
}

function sum(num1 , num2){
    const somma = num1 + num2;
    return somma;
}

function isOdd(total){
    let result = "";
    if(total % 2){
        result = "dispari";
    }else {
        result = "pari";
    }
    return result;
    
}    

const pcRandom = rndNum(1 , 5);
console.log(pcRandom);

const sommaNumeri = sum(userNumber , pcRandom);
console.log(sommaNumeri);

const pariDispari = isOdd(sommaNumeri);
console.log(pariDispari);

if(userChoice === pariDispari){
    console.log("Ha vinto l'utente");
} else{
    console.log("Ha vinto il computer");
}

