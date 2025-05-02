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
// MODIFY ARRAY, DO NOT CREATE A NEW ONE ========================================

// Create a function that doubles each number in the array in-place
function doubleNumbersInPlace(arr) {
	// for (let i = 0; i < arr.length; i++) {
	// 	arr[i] *= 2;
	// }
	arr.forEach((num, index) => (arr[index] = num * 2));
}
// let numbers = [1, 2, 3, 4];
// doubleNumbersInPlace(numbers);
// console.log(numbers); // Should output: [2, 4, 6, 8]

// Create a function that removes the last element from an array in-place
function removeLastElement(arr) {
	arr.splice(arr.length - 1);
}
// let fruits = ['apple', 'banana', 'cherry', 'date'];
// removeLastElement(fruits);
// console.log(fruits); // Should output: ["apple", "banana", "cherry"]

// Create a function that removes elements at specified indices array
function removeAtIndices(arr, indices) {
	// Hint: Start removing from the end to avoid shifting issues
	indices
		.sort()
		.reverse()
		.forEach((i) => arr.splice(i, 1));
}
// let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
// removeAtIndices(letters, [1, 4, 3]); // Remove elements at indices 1 and 3
// console.log(letters); // Should output: ["a", "c", "f"]

// Create a function that removes all even numbers from an array in-place
function removeEvenNumbers(arr) {
	arr.forEach((value, index) => {
		value % 2 === 0 ? arr.splice(index, 1) : arr;
	});
}
// let numbers = [1, 2, 3, 4, 5, 6];
// removeEvenNumbers(numbers);
// console.log(numbers); // Should output: [1, 3, 5]

// Create a function that removes all numbers greater than a value
function removeGreaterThan(arr, value) {
	// Your code here - remove all elements > value
	arr.forEach((element, index) => {
		element > value ? arr.splice(index, 1) : arr;
	});
}

// let numbers = [5, 3, 8, 1, 10, 2];
// removeGreaterThan(numbers, 5);
// console.log(numbers); // Should output: [5, 3, 1, 2]

// Create a function that removes all numbers less than a value (using a backward loop)
function removeLessThan(arr, value) {
	// Your code here - remove all elements < value
	// Hint: Looping backward avoids the shifting problem
	for (let i = arr.length - 1; i >= 0; i--) {
		arr[i] < value ? arr.splice(i, 1) : arr;
	}
}

// let numbers = [1, 5, 3, 8, 1, 2, 2];
// removeLessThan(numbers, 3);
// console.log(numbers); // Should output: [5, 3, 8]

// Create a function that removes values outside an exclusive range (not including min and max)
function removeOutsideRangeExclusive(arr, min, max) {
	// Your code here - remove elements that are ≤ min OR ≥ max
	for (let i = arr.length - 1; i >= 0; i--) {
		arr[i] <= min || arr[i] >= max ? arr.splice(i, 1) : arr;
	}
}
// let numbers = [5, 3, 8, 1, 10, 2];
// removeOutsideRangeExclusive(numbers, 2, 8);
// console.log(numbers); // Should output: [5, 3] (keeps values between 2 and 8, exclusive)

// Write a function filterRangeInPlace(arr, min, max) that gets an array arr and removes from it all values except:
// those that are between a and b.
// The test is:
//  min ≤ arr[i] ≤ max.

function filterRangeInPlace(arr, min, max) {
	for (let i = arr.length - 1; i >= 0; i--) {
		arr[i] >= min && arr[i] <= max ? arr : arr.splice(i, 1);
	}
}
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr); // [3, 1]
