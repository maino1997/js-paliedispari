


const inputWord = prompt("inserisci una parola");

function isPal  (userWord){
    let reversedWord = "";
      
    for (let i = userWord.length - 1; i >= 0; i--){
    reversedWord += userWord[i];
    console.log(userWord[i]);
    }
    
    if(reversedWord === userWord){
            return true;
        }
        return false;
    }
        
    const isPalindrome = isPal(inputWord);
    console.log(isPalindrome);
    
    if (isPalindrome){
        console.log("la parola è palindroma");
    } else{
        console.log("la parola non è palindroma");
    }
        
                
                