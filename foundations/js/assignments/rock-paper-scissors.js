// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

// This is part of The Odin Project Foundations Curriculum, where the student starts to learn JS,
// and as arrays have not being covered yet, it will be solve without the use of them.

// Goal: rock paper scissors game
// Interface: the browser terminal
// Players: human vs. computer

let humanScore = 0;
let computerScore = 0;

function getRandomNum() {
	return parseFloat(Math.random().toPrecision(2));
}

function getComputerChoice() {
	const num = getRandomNum();
	let choice;

	if (num < 0.33) {
		choice = 'rock';
	} else if (num >= 0.33 && num <= 0.66) {
		choice = 'paper';
	} else {
		choice = 'scissors';
	}
	return choice;
}

function getHumanChoice() {
	const choice = prompt(`Your turn:
  Rock, Paper or Scissors?`);
	return choice;
}

function playRound(computerChoice, humanChoice) {
	const computer = computerChoice;
	const human = humanChoice.toLowerCase();

	if (computer === human) {
		console.log(`It's a tie`);
	} else if (
		(human === 'rock' && computer === 'scissors') ||
		(human === 'paper' && computer === 'rock') ||
		(human === 'scissors' && computer === 'paper')
	) {
		console.log(
			`Human wins, ${human.toUpperCase()} beats ${computer.toUpperCase()}!`
		);
	} else {
		console.log(
			`Computer wins, ${computer.toUpperCase()} beats ${human.toUpperCase()}!`
		);
	}
}
