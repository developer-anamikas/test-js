let randomNumber=parseInt(Math.random() * 100) + 1

console.log(randomNumber)

const submit =document.querySelector('#subt')
const userInput =document.querySelector('#guessField')
const guessSlot =document.querySelector('.guesses')
const remaining =document.querySelector('.lastResult')
const lowOrHi =document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        console.log(parseInt(userInput.value))

        validateGuess(guess)
    })

    function validateGuess(guess){
        
        if(isNaN(guess)|| guess<1 || guess>100){
            alert('Please enter a valid number')
        }
        else{
            prevGuess.push(guess)
            if(numGuess===11){
                displayGuess(guess);
                displayMessage(`Game Over! The number was ${randomNumber}`);
                endGame()
            }
            else{
                displayGuess(guess);
                checkGuess(guess);
            }
        }
        

    }

    function displayGuess(guess){
        userInput.value=''
         guessSlot.innerHTML += `${guess}, `;
        numGuess++;
        remaining.innerHTML=`${11-numGuess}`
    }
    function displayMessage(message){
        lowOrHi.innerHTML=`<h1>${message}</h1>`
    }

    function checkGuess(guess){
        if(guess===randomNumber){
            displayMessage(`Congratulations! You guessed the number in ${numGuess-1} attempts`)
            endGame()
        }
        else if(guess<randomNumber){
            displayMessage('Your guess is too low')
        }   
        else{
            displayMessage("Your guess is too high")
        }
    }

    function endGame(){
        userInput.value=''
        userInput.setAttribute('disabled', '')
        p.classList.add('button')    // https://chatgpt.com/s/t_6ac203bef1d081919124716f96da0953
        p.innerHTML='Start New Game'
        startOver.appendChild(p);
        playGame=false;
        newGame();
    }
    function newGame(){
        const startOverButton=document.querySelector('.button')
        startOverButton.addEventListener('click',function(){
            randomNumber=parseInt(Math.random() * 100) + 1
            prevGuess=[]
            numGuess=1
            guessSlot.innerHTML=''
            remaining.innerHTML=`${11-numGuess}`
            lowOrHi.innerHTML=''
            userInput.removeAttribute('disabled')
            console.log(startOverButton)
            startOver.removeChild(p)
            playGame=true
        })
    }
    
}
