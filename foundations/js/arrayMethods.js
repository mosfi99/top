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

// MAP ==========================================================================

// Convert a single word to have its first letter capitalized
function capitalizeWord(word) {
	return word.split('')[0].toUpperCase() + word.slice(1);
}
// console.log(capitalizeWord('hello')); // Should output: "Hello"
// console.log(capitalizeWord('javascript')); // Should output: "Javascript"

// Use map to double each number in an array
function doubleNumbers(numbers) {
	return numbers.map((num) => num * 2);
}
// console.log(doubleNumbers([1, 2, 3, 4])); // Should output: [2, 4, 6, 8]

// For each element in the array, multiply it by its index position
function multiplyByIndex(numbers) {
	return numbers.map((num, index) => num * index);
}
// console.log(multiplyByIndex([1, 2, 3, 4])); // Should output: [0, 2, 6, 12]

// Make even-indexed elements uppercase, odd-indexed elements lowercase
function alternateCase(words) {
	return words.map((word, index) =>
		index % 2 === 0 ? word.toUpperCase() : word
	);
}
// console.log(alternateCase(['apple', 'banana', 'cherry', 'date']));
// Should output: ["APPLE", "banana", "CHERRY", "date"]

// Create a simplified camelize function that works with just two words
function simpleCamelize(str) {
	return str
		.split('-')
		.map((word, index) =>
			index > 0 ? word[0].toUpperCase() + word.slice(1) : word
		)
		.join('');
}
// console.log(simpleCamelize('background-color-light-red')); // Should output: "backgroundColorLightRed"

// FILTER ========================================================================

// Create a function that filters out only even numbers from an array
function filterEvenNumbers(arr) {
	return arr.filter((num) => num % 2 === 0);
}
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(filterEvenNumbers(numbers)); // Should output: [2, 4, 6, 8]
// console.log(numbers); // Should still be [1, 2, 3, 4, 5, 6, 7, 8] (unchanged)

// Create a function that returns elements greater than a given value
function filterGreaterThan(arr, value) {
	return arr.filter((num) => num > value);
}
// let numbers = [5, 3, 8, 1, 10];
// console.log(filterGreaterThan(numbers, 4)); // Should output: [5, 8, 10]

// Create a function that returns elements less than a given value
function filterLessThan(arr, value) {
	return arr.filter((num) => num < value);
}
// let numbers = [5, 3, 8, 1, 10];
// console.log(filterLessThan(numbers, 5)); // Should output: [3, 1]

// Create a function that filters elements greater than min AND less than max
function filterBetweenExclusive(arr, min, max) {
	// Note: This is exclusive range (not including min and max themselves)
	return arr.filter((num) => num > min && num < max);
}
// let numbers = [5, 3, 8, 1, 10];
// console.log(filterBetweenExclusive(numbers, 2, 9)); // Should output: [5, 3, 8]

// Create a function that filters elements between min and max (inclusive)
function filterBetweenInclusive(arr, min, max) {
	return arr.filter((num) => num >= min && num <= max);
}