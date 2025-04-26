// https://www.theodinproject.com/lessons/foundations-etch-a-sketch#project-solution

// CONSTS
const GRID_WIDTH = 500;
const DEFAULT_SQUARES = 25;

// DOM elements
const container = document.querySelector('.grid-container');
const rangeInput = document.querySelector('#rangeSquares');
const rangeValueDisplay = document.querySelectorAll('.range-value');

// GRID functions
// n*n grid of square divs
// need n lines, of n squares length
function createGrid(size) {
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			const square = document.createElement('div');

			square.classList.add('square');
			square.style.width = `${GRID_WIDTH / size}px`;
			square.style.height = `${GRID_WIDTH / size}px`;

			rangeValueDisplay.forEach((value) => (value.textContent = size));
			container.appendChild(square);
		}
	}
}

// EVENTS listeners
// range input to set new grid every time input changes
rangeInput.addEventListener('input', () => {
	let currentSize = rangeInput.value;
	container.textContent = '';
	createGrid(currentSize);
	draw();
});

// draw
function draw() {
	const squares = document.querySelectorAll('.square');
	squares.forEach((sqr) => {
		sqr.addEventListener('mouseenter', () => {
			sqr.style.backgroundColor = 'white';
		});
	});
}

function init() {
	createGrid(DEFAULT_SQUARES);
	draw();
}

// init
init();
