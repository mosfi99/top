// This is part of The Odin Project Foundations Curriculum, where the student starts to learn JS, and the DOM
// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors & https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors

// Goal: rock paper scissors game
// Interface: the DOM
// Players: player vs. computer

// TO-DO:
// move gameOver logic inside playRound, so that when it reaches 5 the resultDisplay is the game over message

// use arrays for computer choice system

// improve UI to show who won at the end

// FUTURE TO-DO:
// Make an option to play against another player locally

// query selectors
const choiceButtons = document.querySelectorAll('.choices');
const playerChoiceDisplay = document.querySelector('.player-choice');
const computerChoiceDisplay = document.querySelector('.computer-choice');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const resultsInfo = document.querySelector('.results-info');
const choiceInfo = document.querySelector('.choice-info');

// logic variables
let playerScore = 0;
let computerScore = 0;
let i = 0;

choiceButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		// while game is on, game over returns false
		// not + false = true
		// once game over is true
		// not + true = false, the game stops
		if (!gameOver()) playRound(btn);
	});
});

// will return false until 5 points are reached.
function gameOver() {
	if (playerScore === 5 || computerScore === 5) {
		if (playerScore > computerScore) {
			resultsInfo.textContent = `Game Over! PLAYER wins ${playerScore} against ${computerScore}`;
		} else {
			resultsInfo.textContent = `Game Over! COMPUTER wins ${computerScore} against ${playerScore}`;
		}
		return true;
	}
	return false;
}

function getPlayerChoice(btn) {
	let playerChoice = btn.textContent;
	switch (playerChoice) {
		case '✊':
			playerChoice = 'rock';
			break;
		case '✋':
			playerChoice = 'paper';
			break;
		case '✌️':
			playerChoice = 'scissors';
			break;
		default:
			break;
	}
	playerChoiceDisplay.textContent = getSymbol(playerChoice);
	return playerChoice;
}

function getComputerChoice() {
	const num = Math.random().toPrecision(2);
	let choice;

	if (num < 0.33) {
		choice = 'rock';
	} else if (num <= 0.66) {
		choice = 'paper';
	} else {
		choice = 'scissors';
	}
	computerChoiceDisplay.textContent = getSymbol(choice);
	return choice;
}

function getSymbol(choice) {
	let symbol = '';
	switch (choice) {
		case 'rock':
			symbol = '✊';
			break;
		case 'paper':
			symbol = '✋';
			break;
		case 'scissors':
			symbol = '✌️';
			break;
		default:
			break;
	}
	return symbol;
}

function playRound(btn) {
	const computer = getComputerChoice();
	const player = getPlayerChoice(btn);

	if (computer === player) {
		resultsInfo.textContent = `It's a tie`;
		choiceInfo.textContent = `...`;
	} else if (
		(player === 'rock' && computer === 'scissors') ||
		(player === 'paper' && computer === 'rock') ||
		(player === 'scissors' && computer === 'paper')
	) {
		playerScore++;
		playerScoreDisplay.textContent = `Score: ${playerScore}`;
		resultsInfo.textContent = 'Player scores!';
		choiceInfo.textContent = `${player.toUpperCase()} beats ${computer.toUpperCase()}`;
	} else {
		computerScore++;
		computerScoreDisplay.textContent = `Score: ${computerScore}`;
		resultsInfo.textContent = 'Computer scores!';
		choiceInfo.textContent = `${computer.toUpperCase()} beats ${player.toUpperCase()}`;
	}
}
