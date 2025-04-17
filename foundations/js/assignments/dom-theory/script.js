const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const p = document.createElement('p');
p.style.color = 'red';
p.textContent = "Hey I'm red!";

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";

const div = document.createElement('div');
div.style.cssText = 'border: 1px solid black; background-color: pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const divP = document.createElement('p');
divP.textContent = 'ME TOO!';

div.appendChild(h1);
div.appendChild(divP);
container.appendChild(div);

// Events
// method 2:
// problem: a DOM element can only have one “onclick” property.
const btn2 = document.querySelector('#btn');
btn2.onclick = () => alert('Method 2');

// method 3: best approach
const btn3 = document.querySelector('#btn-method3');
btn3.addEventListener('click', () => {
	alert('Hello World');
});

// events with functions
const btnBaby = document.querySelector('#btn-baby');
function alertFunction() {
	alert('YAY! YOU DID IT!');
}
btnBaby.addEventListener('click', alertFunction);

const btnConsole = document.querySelector('#btn-console');
btnConsole.addEventListener('click', function (e) {
	console.log(e);
	e.target.style.background = 'orange';
});

// Attaching listeners to groups of nodes

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('div > button');

// we use the .forEach method to iterate through each button
buttons.forEach((btn) => {
	// and for each one we add a 'click' listener
	btn.addEventListener('click', () => {
		alert(btn.id);
	});
});
