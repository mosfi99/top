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

// const array = [1, 2, 3, 4, 5, 6];

function sum(array) {
	return array
		.filter((e) => e % 2 === 0)
		.map((e) => e * 3)
		.reduce((pre, next) => pre + next, 0); // * initial value (0)
}
// * if the array has no even numbers, reduce will throw an error (since it’s called on an empty array), solution: provide an initial value.

// const myArray = sum(array);
// console.log(myArray); // 36

// Convert a single word to have its first letter capitalized
function capitalizeWord(word) {
	return word[0].toUpperCase() + word.slice(1);
}
// console.log(capitalizeWord('hello')); // Should output: "Hello"
// console.log(capitalizeWord('javascript')); // Should output: "Javascript"

// MAP ======================================================================
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
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] % 2 === 0) arr.splice(i, 1);
	}
}
// let numbers = [1, 2, 3, 4, 5, 6];
// removeEvenNumbers(numbers);
// console.log(numbers); // Should output: [1, 3, 5]

// Create a function that removes all numbers greater or equal than a value
function removeGreaterThan(arr, value) {
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] >= value) arr.splice(i, 1);
	}
}
// let numbers = [5, 3, 20, 8, 1, 10, 10, 7, 2];
// removeGreaterThan(numbers, 5);
// console.log(numbers); // Should output: [3, 1, 2]

// Create a function that removes all numbers less than a value (using a backward loop)
function removeLessThan(arr, value) {
	// Your code here - remove all elements < value
	// Hint: Looping backward avoids the shifting problem
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] < value) arr.splice(i, 1);
	}
}
// let numbers = [1, 5, 3, 8, 1, 2, 2];
// removeLessThan(numbers, 3);
// console.log(numbers); // Should output: [5, 3, 8]

// Create a function that removes values outside an exclusive range (not including min and max)
function filterExclusive(arr, min, max) {
	// Your code here - remove elements that are ≤ min OR ≥ max
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] < min || arr[i] > max) {
			arr.splice(i, 1);
		}
	}
}
// let numbers = [5, 3, 8, 1, 10, 2];
// filterExclusive(numbers, 2, 8);
// console.log(numbers); // Should output: [5, 3] (keeps values between 2 and 8, exclusive)

// Write a function filterRangeInPlace(arr, min, max) that gets an array arr and removes from it all values except those that are between min and max.
// Remove if outside [min, max]
function filterInclusive(arr, min, max) {
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] < min || arr[i] > max) {
			arr.splice(i, 1);
		}
	}
}
// let arr = [5, 3, 8, 1];
// filterInclusive(arr, 1, 4);
// console.log(arr); // [3, 1]

// SORT =============================================

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => a - b); // increasing order
// arr.sort((a, b) => b - a); // decreasing order

// arr.sort().reverse(); // IS NOT THE BEST SORTING METHOD.
// console.log(arr); // 8, 5, 2, 1, -10

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// let arr = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
	let myArr = arr.slice(); // create a copy of the original array
	return myArr.sort((a, b) => a.localeCompare(b)); // a.localeCompare(b) is the string comparison method
}

// let sorted = copySorted(arr);
// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (no changes)

// OBJECTS =============================================

// Map to names
// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 28 };

// let users = [john, pete, mary];
// let names = users.map((value) => value.name);
// console.log(names); // John, Pete, Mary

// Map to objects
// let john = { name: 'John', surname: 'Smith', id: 1 };
// let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
// let mary = { name: 'Mary', surname: 'Key', id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((value) => {
// 	return { fullName: `${value.name} ${value.surname}`, id: value.id };
// });

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // John Smith
// console.log(usersMapped);
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]

// Sort users by age
// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 28 };

// let arr = [pete, john, mary];

function sortByAge(users) {
	users.sort((a, b) => a.age - b.age);
}
// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

// Shuffle an array
// Fisher-Yates shuffle algorithm: useful for a game
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const random = Math.floor(Math.random() * (i + 1));
		// destructuring assignment
		[array[i], array[random]] = [array[random], array[i]];
	}
}

// let arr = [1, 2, 3];
// shuffle(arr);
// console.log(arr);
// shuffle(arr);
// console.log(arr);
// shuffle(arr);
// console.log(arr);

// Get average age
// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 29 };
// let arr = [john, pete, mary];

function getAverageAge(array) {
	let total = 0;
	array.forEach((person) => (total += person.age));
	return total / array.length;
}
// use reduce to get averages!! or a sum, product, or any accumulated result
function getAverageAge(users) {
	return users.reduce((total, user) => total + user.age, 0) / users.length;
}
// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// Filter unique array members

// The solution is only good for small arrays.
// includes(str) compares each element against str, if there are 100 elements in result and no one matches str, then it will walk the whole result and do exactly 100 comparisons.

function unique(arr) {
	let uniques = [];
	for (let str of arr) {
		if (!uniques.includes(str)) {
			uniques.push(str);
		}
	}
	return uniques;
}

let strings = [
	'Hare',
	'Krishna',
	'Hare',
	'Krishna',
	'Krishna',
	'Krishna',
	'Hare',
	'Hare',
	':-O',
];
// console.log(unique(strings)); // Hare, Krishna, :-O

// Create keyed object from array
// let users = [
// 	{ id: 'john', name: 'John Smith', age: 20 },
// 	{ id: 'ann', name: 'Ann Smith', age: 24 },
// 	{ id: 'pete', name: 'Pete Peterson', age: 31 },
// ];

function groupById(arr) {
	return arr.reduce((obj, value) => {
		obj[value.id] = value;
		return obj;
	}, {});
}

// let usersById = groupById(users);
// console.log(usersById);
/*
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// more practice on arrays, objects, and the map, reduce, and filter methods :D

// Group users by age
let users1 = [
	{ id: 'john', name: 'John Smith', age: 20 },
	{ id: 'ann', name: 'Ann Smith', age: 24 },
	{ id: 'pete', name: 'Pete Peterson', age: 31 },
	{ id: 'monica', name: 'Monica Lee', age: 31 },
];

function groupByAge(users) {
	return users.reduce((obj, user) => {
		obj[user.age] ? obj[user.age].push(user) : (obj[user.age] = [user]);
		return obj;
	}, {});
}
// let usersByAge = groupByAge(users1);
// console.log(usersByAge);

// Filter and map product data
let products = [
	{ id: 1, name: 'Laptop', price: 1200 },
	{ id: 2, name: 'Mouse', price: 25 },
	{ id: 3, name: 'Keyboard', price: 75 },
	{ id: 4, name: 'Monitor', price: 300 },
];

// returns an array of product names whose price is less than or equal to maxPrice.
function getAffordableProductNames(products, maxPrice) {
	// const affordable = products.filter((p) => p.price <= maxPrice);
	// return affordable.map((p) => p.name);
	// or all in one line:
	return products.filter((p) => p.price <= maxPrice).map((p) => p.name);
}

// FILTER FIRST, THEN OTHERS
// First we filter, and then we map, otherwise map already removes the price and other properties
// and when filter looks for price, it is not defined.

// let result = getAffordableProductNames(products, 100);
// console.log(result); // ["Mouse", "Keyboard"]

// Count users by first letter of name
let users2 = [
	{ id: 'john', name: 'John Smith', age: 20 },
	{ id: 'jane', name: 'Jane Doe', age: 22 },
	{ id: 'alice', name: 'Alice Johnson', age: 24 },
	{ id: 'bob', name: 'Bob Brown', age: 20 },
	{ id: 'jim', name: 'Jim Beam', age: 30 },
];

function countUsersByInitial(users) {
	return users.reduce((obj, u) => {
		const letter = u.name[0];
		obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
		// if (!obj[letter]) {
		// 	obj[letter] = 1;
		// } else obj[letter] += 1;
		return obj;
	}, {});
}

// let result = countUsersByInitial(users2);
// console.log(result);
// {
//   J: 3,
//   A: 1,
//   B: 1
// }
