/* Segment: 1 Strict Mode and Type Checking */

"use strict"; // This treats all the code as per the newer version of JavaScript

// alert("hello"); // This will give an error in Node.js because `alert` is a browser-specific function

let studentName = "Het Jasani";
console.log(typeof studentName); // Outputs: string

console.log(typeof null); // Output: object

/*
Tips & Notes:
- Always use "use strict" at the beginning of your scripts. It helps catch common coding bugs and prevents the use of undeclared variables.
- `typeof` is a useful operator to determine the type of variable. It returns a string indicating the type.
- `typeof null` returns "object" — this is a known quirk in JavaScript due to historical reasons and is not actually a real object.
- Avoid using browser-specific functions like `alert()` when working in Node.js environments.
*/
