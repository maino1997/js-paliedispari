const winnerBtn = document.getElementById("disc-winner");
const displayElement = document.getElementById("result-display");

winnerBtn.addEventListener('click' , function (){
    const userChoice = document.getElementById("user-number").value;
    const userNumber = parseInt(document.getElementById("user-choice").value);

    
    function rndNum(min , max){
        max ++;
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
    console.log(`Il numero del pc è ${pcRandom}`);
    
    const sommaNumeri = sum(userNumber , pcRandom);
    console.log(`la somma è ${sommaNumeri}`);
    
    const pariDispari = isOdd(sommaNumeri);
    console.log(pariDispari);
    
    if(userChoice === pariDispari){
        displayElement.innerText = "Ha vinto l'utente";
    } else{
        displayElement.innerText = "Ha vinto il computer";
    }
});

