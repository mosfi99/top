// https://www.theodinproject.com/lessons/foundations-etch-a-sketch#project-solution

// CONSTS
const GRID_WIDTH = 500;
const DEFAULT_SQUARES = 25;

// DOM elements
const container = document.querySelector('.grid-container');
const rangeInput = document.querySelector('#rangeSquares');
const rangeValueDisplay = document.querySelectorAll('.range-value');
const colorPicker = document.querySelector('#color');

// GRID functions
// n*n grid of square divs
// need n lines, of n squares length
function createGrid(size) {
	updateRangeDisplay(size);

	// array of square elements to iterate later on draw(squares)
	const squares = [];

	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			const square = document.createElement('div');

			square.classList.add('square');
			square.style.width = `${GRID_WIDTH / size}px`;
			square.style.height = `${GRID_WIDTH / size}px`;

			squares.push(square);
			container.appendChild(square);
		}
	}
	return squares;
}

function updateRangeDisplay(size) {
	// update the text on top of the range input to show the current value
	rangeValueDisplay.forEach((value) => (value.textContent = size));
}

// draw
function draw(squares) {
	squares.forEach((sqr) => {
		sqr.addEventListener('mouseover', () => {
			sqr.style.backgroundColor = setColor();
		});
	});
}

// choose color
function setColor() {
	return colorPicker.value;
}

// EVENTS listeners
// range input to set new grid every time input changes
rangeInput.addEventListener('input', () => {
	const currentSize = rangeInput.value;
	container.textContent = '';
	const squares = createGrid(currentSize);
	draw(squares);
});

function init() {
	const squares = createGrid(DEFAULT_SQUARES);
	draw(squares);
}

// init
init();
