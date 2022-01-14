const palBtn = document.getElementById("disc-pal");
const displayElement = document.getElementById("result-display");

palBtn.addEventListener('click' , function (){
    const inputWord = document.getElementById("user-word").value;
    
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
            displayElement.innerText = "La parola è Palindroma";
        } else{
            displayElement.innerText = "La parola non è Palindroma";
        }         
                    

});
                