// Task:
// Write this function but using, map, filter and reduce
function sumOfTripledEvens(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		// Step 1: If the element is an even number
		if (array[i] % 2 === 0) {
			// Step 2: Multiply this number by three
			const tripleEvenNumber = array[i] * 3;
			// Step 3: Add the new number to the total
			sum += tripleEvenNumber;
		}
	}
	return sum;
}

const array = [1, 2, 3, 4, 5, 6];

function sum(array) {
	return array
		.filter((e) => e % 2 === 0)
		.map((e) => e * 3)
		.reduce((pre, next) => pre + next);
}

const myArray = sum(array);
// console.log(myArray); // 36
