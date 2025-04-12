// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

// This is part of The Odin Project Foundations Curriculum, where the student starts to learn JS,
// and as arrays have not being covered yet, it will be solve without the use of them.

// Goal: rock paper scissors game
// Interface: the browser terminal
// Players: user vs. computer

let humanScore = 0;
let computerScore = 0;

function getRandomNum() {
	return parseFloat(Math.random().toPrecision(2));
}

function getComputerChoice() {
	const num = getRandomNum();
	let choice;

	if (num < 0.33) {
		choice = 'Rock';
	} else if (num >= 0.33 && num <= 0.66) {
		choice = 'Paper';
	} else {
		choice = 'Scissors';
	}
	return choice;
}

function getHumanChoice() {
	const choice = prompt(`Your turn:
  Rock, Paper or Scissors?`);
	return choice;
}
