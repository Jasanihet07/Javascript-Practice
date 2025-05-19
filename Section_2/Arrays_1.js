// ----Segment 1: Arrays and Mixed Data Types----
// Arrays in JavaScript can store multiple items (mixed data types) in a single variable.
// Arrays are 0-indexed, meaning the first element starts at index 0.

const myTempArray = [1, 2, 3, true, "Hello"];
console.log(myTempArray); // [ 1, 2, 3, true, "Hello" ]

const myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [ 1, 2, 3, 4, 5 ]
console.log(typeof myArray); // object

/*
Tips:
- Arrays in JavaScript can store different data types in the same array.
- Arrays are considered objects in JavaScript, so `typeof` will return "object" for arrays.
*/

// ----Segment 2: Nested Arrays----
// Arrays with nested arrays
const myFirstName = ["Het", "Savan", "Jayesh"];
const mySecondName = ["Jasani", "Jani", "Sarvaiya"];
myFirstName.push(mySecondName);
console.log(myFirstName); // [ "Het", "Savan", "Jayesh", ["Jasani", "Jani", "Sarvaiya"] ]

console.log(myFirstName[3]); // ["Jasani", "Jani", "Sarvaiya"]
console.log(myFirstName[3][2]); // "Sarvaiya"
console.log(myFirstName[0] + " " + myFirstName[3][0]); // "Het Jasani"

/*
Tips:
- When pushing an array inside another array, the array is treated as a single entity (nested array).
- You can access nested elements by referencing their indices in the nested arrays.
*/

// ----Segment 3: Shallow Copy----
// Shallow Copy example:
const original = [{name: "John"}];
const shallow = [...original]; // or original.slice()
shallow[0].name = "Doe";
console.log(original[0].name); // "Doe" – original also changed!

/*
Tips:
- Shallow copy means the references to the objects inside the array are shared. If you modify a nested object, it affects both the original and the shallow copy.
- Use `spread syntax` or `.slice()` for creating shallow copies.
*/

// ----Segment 4: Deep Copy----
// Deep Copy example:
const deep = JSON.parse(JSON.stringify(original));
deep[0].name = "Doe";
console.log(original[0].name); // "John" – original is safe!

/*
Tips:
- Deep copy creates a completely new copy, including the objects inside the array. Modifying the deep copy does not affect the original.
- Use `JSON.parse(JSON.stringify())` for deep copying, but be aware that this method won't copy methods or functions (just data).
*/

// ----Segment 5: Array Methods (Push, Pop, Unshift, Shift)---- 

const myArrayOne = [0, 1, 2, 3, 4, 5];
console.log(myArrayOne); // [ 0, 1, 2, 3, 4, 5 ]
myArrayOne.push(7);
myArrayOne.push(8);
console.log(myArrayOne); // [ 0, 1, 2, 3, 4, 5, 7, 8 ]
myArrayOne.pop();
console.log(myArrayOne); // [ 0, 1, 2, 3, 4, 5, 7 ]
myArrayOne.unshift(9);  // Adds the element to the start of the array
console.log(myArrayOne); // [ 9, 0, 1, 2, 3, 4, 5, 7 ]
myArrayOne.shift(); // Removes the first element of the array
myArrayOne.shift(); // Removes the second element of the array
console.log(myArrayOne); // [ 2, 3, 4, 5, 7 ]

/*
Tips:
- `.push()` adds an element to the end of the array, and `.pop()` removes the last element.
- `.unshift()` adds an element to the beginning, and `.shift()` removes the first element.
*/

// ----Segment 6: Converting Arrays to Strings---- 

const myArrayTwo = myArrayOne.join(); // Converts the array to a string with commas separating elements
console.log(myArrayOne); // [ 2, 3, 4, 5, 7 ]
console.log(myArrayTwo); // "2,3,4,5,7"

/*
Tips:
- `.join()` converts an array into a string. You can specify a separator, but if none is provided, a comma is used by default.
*/

// ----Segment 7: Array Slice Method----

// slice: Returns a shallow copy of a portion of the array
const myArrayThree = myArrayOne.slice(1, 3);
console.log("Original Array ", myArrayOne); // Original Array [ 2, 3, 4, 5, 7 ]
console.log("Sliced Array ", myArrayThree); // Sliced Array [ 3, 4 ]

/*
Tips:
- `.slice(start, end)` returns a shallow copy of a part of the array (not modifying the original array).
- The `start` index is included, but the `end` index is not included in the result.
*/

// ----Segment 8: Array Splice Method----

// splice: Changes the content of an array by removing or adding elements
const myArrayFive = [0, 1, 2, 3, 4, 5];
const myArrayFour = myArrayFive.splice(1, 3); // Removes 3 elements starting from index 1
console.log("Original Array ", myArrayFive); // Original Array [ 0, 4, 5 ]
console.log("Spliced Array ", myArrayFour); // Spliced Array [ 1, 2, 3 ]

/*
Tips:
- `.splice(start, deleteCount, item1, item2, ...)` modifies the original array by removing elements and optionally adding new ones.
- `.splice()` can be used to delete elements or insert new elements at a specified position.
*/
