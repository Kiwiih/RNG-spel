const guessBtn = document.getElementById('guess-btn');
const restartBtn = document.getElementById('restart-btn');
const guessList = document.getElementById('guess-list');

// random siffra mellan 0-100 genereras med math.random
let computerNumber = Math.floor(Math.random() * 101);
console.log(computerNumber);

//Eventlistener så sidan laddas om när man klickar på starta om
restartBtn.addEventListener('click', restart);
function restart() {
    location.reload();
}

let attempts = 1;

guessBtn.addEventListener('click', checkGuess);


    const userInput = document.getElementById('guess');
    

function checkGuess() {
    let userGuess = parseInt(userInput.value);

        // siffran jämförs med datorns siffra, med en if sats
        if (userGuess == computerNumber) {
            displayOutput('Grattis du har gissat rätt!');
            disableGuessing();
        } else if (userGuess < computerNumber) {
            displayOutput('Du har gissat för lågt!'+'Gissning: ' + userGuess );
        } else if (computerNumber < userGuess) {
            displayOutput('Du har gissat för högt! '+'Gissning: ' + userGuess);
        }
        if (attempts >= 10) {
            // Avsluta spelet
            displayOutput('Slut på gissningar!');
            disableGuessing();
        } else {
            userGuess = parseInt(userInput);
             userInput.value = '';  // Clear the input field
             userInput.focus();     // Set focus back to the input field
             
        }gtag('event', 'click', {
        'event_category': 'RNG',
        'event_label': 'RNG Button Clicked'
    });
        attemptsCounter();  
}
 
function displayOutput(message){
    let outputElement = document.createElement('li');
    outputElement.textContent = message;
    guessList.appendChild(outputElement);
}


let remainingGuessesElement = document.getElementById('remaining-guesses');
let remainingGuess = document.createElement('h3');


//Funktion för att räkna gissningar
function attemptsCounter(){
    remainingGuess.textContent = attempts;
    remainingGuessesElement.appendChild(remainingGuess);
    console.log(attempts);
    attempts++;
}

//För att stänga av spelet
function disableGuessing() {
    guessBtn.removeEventListener('click', checkGuess);
    userInput.disabled = true; 
}
