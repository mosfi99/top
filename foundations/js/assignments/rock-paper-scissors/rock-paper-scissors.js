// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

// This is part of The Odin Project Foundations Curriculum, where the student starts to learn JS,
// and as arrays have not being covered yet, it will be solve without the use of them.

// Goal: rock paper scissors game
// Interface: the browser terminal
// Players: human vs. computer

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
	return choice;
}

function getHumanChoice() {
	const choice = prompt(`Your turn: Rock, Paper or Scissors?`);
	return choice;
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	let i = 0;

	function playRound() {
		const computer = getComputerChoice();
		const human = getHumanChoice().toLowerCase();

		if (computer === human) {
			console.log(`It's a tie`);
			logScores();
		} else if (
			(human === 'rock' && computer === 'scissors') ||
			(human === 'paper' && computer === 'rock') ||
			(human === 'scissors' && computer === 'paper')
		) {
			console.log(
				`Human wins, ${human.toUpperCase()} beats ${computer.toUpperCase()}!`
			);
			humanScore++;
			logScores();
		} else {
			console.log(
				`Computer wins, ${computer.toUpperCase()} beats ${human.toUpperCase()}!`
			);
			computerScore++;
			logScores();
		}
	}

	function logScores() {
		console.log(`Human score: ${humanScore}`);
		console.log(`Computer score: ${computerScore}`);
		console.log(`	`);
	}

	while (i < 5) {
		++i;
		console.log(`Turn ${i}/5`);
		playRound();
	}

	if (i === 5) {
		if (humanScore === computerScore) {
			console.log(`Game over. It's a tie.`);
			logScores();
		} else if (humanScore > computerScore) {
			console.log(
				`Game over. HUMAN wins ${humanScore} against ${computerScore}`
			);
		} else {
			console.log(
				`Game over. COMPUTER wins ${computerScore} against ${humanScore}`
			);
		}
	}
}

playGame();
