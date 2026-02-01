/* take human input, computer generated random choice
 * play round by processing the winner
 * based on round winner update scores
 * do this for 5 rounds, declare result */

playGame();

function playGame() {
    let numOfRounds = 5;
    let humanChoice = '', computerChoice = '';
    let roundWinner = '';
    let humanScore = 0, computerScore = 0;
    for (let i = 1; i <= numOfRounds; i++) {
        console.log(`Round ${i}: Ready?`);
        alert(`Round ${i}: Ready?`);

        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        console.log(`You Chose ${humanChoice.toUpperCase()}\nComputer Chose ${computerChoice.toUpperCase()}`);

        roundWinner = playRound(humanChoice, computerChoice);

        /* update scores */
        if (roundWinner === 'human') {
            humanScore += 1;
            console.log(`You Win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`);
            let message1 = `You Chose ${humanChoice.toUpperCase()}\nComputer Chose ${computerChoice.toUpperCase()}\n`;
            let message2 = `You Win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}\n`;
            let message3 = `Round ${i}:\nYour Score: ${humanScore}\nComputer Score: ${computerScore}\n`;
            alert(`${message1}\n${message2}\n${message3}`);
        }
        else if (roundWinner === 'computer') {
            computerScore += 1;
            console.log(`You Lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
            let message1 = `You Chose ${humanChoice.toUpperCase()}\nComputer Chose ${computerChoice.toUpperCase()}\n`;
            let message2 = `You Lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}\n`;
            let message3 = `Round ${i}:\nYour Score: ${humanScore}\nComputer Score: ${computerScore}\n`;
            alert(`${message1}\n${message2}\n${message3}`);
        }
        else if (roundWinner === '') {
            humanScore += 1;
            computerScore += 1;
            console.log(`Tie! since, both chose ${humanChoice.toUpperCase()}`);
            let message1 = `You Chose ${humanChoice.toUpperCase()}\nComputer Chose ${computerChoice.toUpperCase()}\n`;
            let message2 = `Tie! since, both chose ${humanChoice.toUpperCase()}\n`;
            let message3 = `Round ${i}:\nYour Score: ${humanScore}\nComputer Score: ${computerScore}\n`;
            alert(`${message1}\n${message2}\n${message3}`);
        }
        console.log(`Round ${i}:\nYour Score: ${humanScore}\nComputer Score: ${computerScore}\n`);
    }
    /* overall winner announcement */
    if (humanScore > computerScore) {
        console.log(`You Win! by ${humanScore - computerScore} Rounds!`);
        alert(`You Win! by ${humanScore - computerScore} Rounds!`);
    }
    else if (computerScore > humanScore) {
        console.log(`You Lose! by ${computerScore - humanScore} Rounds!`);
        alert(`You Lose! by ${computerScore - humanScore} Rounds!`);  
    }
    else {
        console.log(`Tie!`);
        alert(`Tie!`);
    }
}

function playRound(humanChoice, computerChoice) {

    

    if (humanChoice === computerChoice) {
        return '';
    }

    let winner = '';
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        winner = 'computer';
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        winner = 'human';
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissor') {
        winner = 'computer';
    }
    else if (humanChoice === 'scissor' && computerChoice === 'paper') {
        winner = 'human';
    }
    else if (humanChoice === 'scissor' && computerChoice === 'rock') {
        winner = 'computer';
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissor') {
        winner = 'human';
    }

    return winner;
}

function getHumanChoice() {
    /* ask the user for input until it is valid */
    let userInput = '';
    let invalidInput = true;
    do {
        userInput = prompt('Enter Rock or Paper or Scissor: ');
        userInput = userInput.toLowerCase();
        invalidInput = (userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissor');
        if (invalidInput) {
            console.log('Invalid Input! Try again');
            alert('Invalid Input! Try again');
        }
    } while (invalidInput);
    return userInput;
}

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    let computerChoice = '';
    if (randomInt == 0) {
        computerChoice = 'rock';
    }
    else if (randomInt == 1) {
        computerChoice = 'paper';
    }
    else if (randomInt == 2) {
        computerChoice = 'scissor';
    }
    return computerChoice;
}