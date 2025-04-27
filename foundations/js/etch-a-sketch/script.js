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
// 1. when mouse is pressed set the color for current square element,
// 2. then drag to the next elements and continue setting the color
// 3. when releasing mouse stop setting the color.
// Note: need to prevent default drag behavior.
function draw(squares) {
	let isDrawing = false; // track whether the mouse button is pressed

	// prevent drag
	container.addEventListener('mousedown', (e) => e.preventDefault());

	squares.forEach((sqr) => {
		// 1. set color only for current square
		sqr.addEventListener('mousedown', () => {
			isDrawing = true;
			sqr.style.backgroundColor = setColor();
		});

		// 2. while pressing, continue setting the color for next square
		sqr.addEventListener('mouseover', () => {
			if (isDrawing) sqr.style.backgroundColor = setColor();
		});
	});

	// stop setting color
	document.addEventListener('mouseup', () => (isDrawing = false));
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
