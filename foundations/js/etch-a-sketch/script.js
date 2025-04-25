// https://www.theodinproject.com/lessons/foundations-etch-a-sketch#project-solution

const container = document.querySelector('.main-container');

// 16x16 grid of square divs
// need 16 lines, of 16 squares length
for (let i = 0; i < 16; i++) {
	for (let j = 0; j < 16; j++) {
		const square = document.createElement('div');
		square.classList.add('square');
		container.appendChild(square);
	}
}

// paint
const squares = document.querySelectorAll('.square');

squares.forEach((sqr) => {
	sqr.addEventListener('mouseenter', () => {
		sqr.style.backgroundColor = 'white';
	});
});
