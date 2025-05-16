// Segment: 1 Number Types and Operations

// Working with different types of numbers and their methods

const score = 400;
console.log(score);  // Output: 400
console.log(typeof score);  // Output: number

const balance = new Number(100);  // Using a Number object to create a number
console.log(balance);  // Output: [Number: 100]
console.log(typeof balance);  // Output: object
console.log(balance.toString().length);  // Output: 3 (100 has 3 digits)
console.log(balance.toFixed(2));  // Output: 100.00

/*
Tips:
- Avoid using the `new Number()` constructor unless you need to explicitly create a Number object. 
  Primitive numbers (like `const num = 100;`) are typically better for performance and clarity.
- `toString()` converts a number to its string representation, and `length` returns the number of characters in that string.
- `toFixed(2)` ensures that the number has exactly two decimal places.
*/

// Segment: 2 Precision and Number Formatting

const otherNumber = 123.4567;
const anotherNumber = 123.789;
const oneMoreNumber = 126.500;

console.log(otherNumber.toPrecision(5));  // Output: "123.46" (rounds to 5 significant digits)
console.log(otherNumber.toPrecision(3));  // Output: "123" (floor truncation)
console.log(anotherNumber.toPrecision(3));  // Output: "124" (rounds up)
console.log(oneMoreNumber.toPrecision(3));  // Output: "127" (rounds up from .5)

/*
Tips:
- `toPrecision()` formats a number to a specified number of significant digits, which is useful when you need to control precision.
- The number may be rounded or truncated depending on the precision specified.
*/

// Segment: 3 Formatting Large Numbers

const firstNumber = 1000000000;
console.log(firstNumber.toLocaleString("en-US"));  // Output: "1,000,000,000"
console.log(firstNumber.toLocaleString("en-IN"));  // Output: "1,00,00,00,000"

/*
Tips:
- `toLocaleString()` formats a number according to the local conventions (like commas for grouping thousands).
- The first argument of `toLocaleString()` is the locale (like `"en-US"` for U.S. English or `"en-IN"` for Indian number formatting).
*/

// Segment: 4 Math Library and Operations

console.log(Math);  // Output: Math object
console.log(Math.abs(-23));  // Output: 23 (absolute value)
console.log(Math.round(5.6789));  // Output: 6 (rounds to nearest integer)
console.log(Math.round(5.3456));  // Output: 5
console.log(Math.floor(3.456));  // Output: 3 (rounds down)
console.log(Math.ceil(6.01234));  // Output: 7 (rounds up)
console.log(Math.min(2, 3, 4, 5, 6));  // Output: 2 (minimum value)
console.log(Math.max(9, 8, 7, 6, 5));  // Output: 9 (maximum value)
console.log(Math.random());  // Output: random number between 0 and 1
console.log(Math.random() * 10);  // Output: random number between 0 and 10
console.log((Math.random() * 10) + 1);  // Output: random number between 1 and 10

// Generating a random number between a specified range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // Output: random number between 10 and 20

/*
Tips:
- `Math.abs()` returns the absolute value of a number.
- `Math.round()` rounds a number to the nearest integer.
- `Math.floor()` rounds a number down to the nearest integer.
- `Math.ceil()` rounds a number up to the nearest integer.
- `Math.random()` generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
- To generate a random number within a specific range, use `Math.floor()` in combination with `Math.random()` and adjust the range values.
*/

