
// Prendo gli elementi dal dom 
const palBtn = document.getElementById("disc-pal");
const displayElement = document.getElementById("result-display-1");




// Costruisco una funzione per montare la parola al contrario e confrontarla con l'originale
function isPal  (userWord){
    let reversedWord = "";
      
    // Faccio passare tutti i caratteri della stringa dell'utente al contrario e li metto nella parola reverse 
    for (let i = userWord.length - 1; i >= 0; i--){
    reversedWord += userWord[i];
    console.log(userWord[i]);
    }
    
    // Controllo se la parola al contrario è uguale alla parola originale 
    if(reversedWord === userWord){
            return true;
        }
        return false;
}




// Collego il tutto all'evento click sul bottone 
palBtn.addEventListener('click' , function (){

    // Prendo il valore dall'input 
    const inputWord = document.getElementById("user-word").value.trim();

       
        if(parseInt(inputWord) == inputWord || inputWord.length == 0){
            displayElement.innerText = "La parola che hai inserito non è valida";
        } else {
        
            
            // Invoco la funzione per avere il risultato booleano 
            const isPalindrome = isPal(inputWord);
            console.log(isPalindrome);
            
            // Stampo in pagina il risultato
            if (isPalindrome){
                displayElement.innerText = "La parola è Palindroma";
            } else{
                displayElement.innerText = "La parola non è Palindroma";
            }
    }

});
                