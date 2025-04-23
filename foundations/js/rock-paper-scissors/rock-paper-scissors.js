// This is part of The Odin Project Foundations Curriculum, where the student starts to learn JS, and the DOM
// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors & https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors

// Goal: rock paper scissors game
// Interface: the DOM
// Players: player vs. computer

// FUTURE TO-DO:
// improve UI:
// - when a P or C choice wins highlight the card
// - change alert to a modal display
// Make an option to play against another player locally
// Make it responsive for mobile devices

// query selectors
const choiceButtons = document.querySelectorAll('.choices');
const playerChoiceDisplay = document.querySelector('.player-choice');
const computerChoiceDisplay = document.querySelector('.computer-choice');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const resultsInfo = document.querySelector('.results-info');
const choiceInfo = document.querySelector('.choice-info');

// variables to restore the game to original state
const playerChoiceDisplayOriginal = playerChoiceDisplay.textContent;
const computerChoiceDisplayOriginal = computerChoiceDisplay.textContent;
const playerScoreDisplayOriginal = playerScoreDisplay.textContent;
const computerScoreDisplayOriginal = computerScoreDisplay.textContent;
const resultsInfoOriginal = resultsInfo.textContent;
const choiceInfoOriginal = choiceInfo.textContent;

// logic variables
let playerScore = 0;
let computerScore = 0;
let i = 0;

choiceButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		playRound(btn);
	});
});

// will return false until 5 points are reached.
function gameOver() {
	if (playerScore > computerScore) {
		alert(`Game Over! PLAYER wins ${playerScore} against ${computerScore}`);
	} else {
		alert(`Game Over! COMPUTER wins ${computerScore} against ${playerScore}`);
	}
	restartGame();
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
		// player wins
		playerScore++;
		playerScoreDisplay.textContent = `Score: ${playerScore}`;
		resultsInfo.textContent = 'Player scores!';
		choiceInfo.textContent = `${player.toUpperCase()} beats ${computer.toUpperCase()}`;
	} else {
		// computer wins
		computerScore++;
		computerScoreDisplay.textContent = `Score: ${computerScore}`;
		resultsInfo.textContent = 'Computer scores!';
		choiceInfo.textContent = `${computer.toUpperCase()} beats ${player.toUpperCase()}`;
	}

	// check if game over after all updates are visible for the players
	if (playerScore === 5 || computerScore === 5) {
		// delay to make all updates visible
		setTimeout(() => gameOver(), 100);
	}
}

function restartGame() {
	// restore to original state
	playerChoiceDisplay.textContent = playerChoiceDisplayOriginal;
	computerChoiceDisplay.textContent = computerChoiceDisplayOriginal;
	playerScoreDisplay.textContent = playerScoreDisplayOriginal;
	computerScoreDisplay.textContent = computerScoreDisplayOriginal;
	resultsInfo.textContent = resultsInfoOriginal;
	choiceInfo.textContent = choiceInfoOriginal;
	playerScore = 0;
	computerScore = 0;
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
	let choice;
	const choicesArray = ['rock', 'paper', 'scissors'];
	// rounded down number between 0 (inclusive) and 3 (exclusive) = [0, 1, 2]
	const index = Math.floor(Math.random() * 3);

	choice = choicesArray[index];
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
