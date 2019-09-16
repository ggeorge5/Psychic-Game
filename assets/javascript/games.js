const totalNumGuesses = 9;
let wins = 0;
let losses = 0;
let guesses = [];
let winningLetterCharCode = 0;

function refreshUI() {
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guesses-left').innerHTML = totalNumGuesses - guesses.length;
    document.getElementById('guesses').innerHTML = guesses.join(',');
}

function chooseWinningCharacter() {
    const randomNumber = Math.floor(Math.random() * (90 - 65 + 1) + 65);
    winningLetterCharCode = randomNumber;
    console.log(winningLetterCharCode);
}

function checkIfGameIsOver() {
    const guessesLeft = totalNumGuesses - guesses.length;
    const currentGuessCharCode = guesses[guesses.length - 1];


    // if is winning guess, then incrememnt by 1 and reset

    if (winningLetterCharCode === currentGuessCharCode) {
        guesses = [];
        wins ++;
        chooseWinningCharacter();
    }

    if (guessesLeft === 0) {
        guesses = [];
        losses ++;
        chooseWinningCharacter();

    
    }
}

chooseWinningCharacter();
refreshUI();

document.addEventListener('keyup', function (event) {
    guesses.push(event.keyCode);
    
    checkIfGameIsOver();
    
    refreshUI();
});


/**
 GIVEN a game
 WHEN the game is over (by a win or loss)
 THEN the winningCharacter should be rechosen
 */
