// ----Segment 1: Merging Arrays Using Push (Nested Arrays)----

// Merging Marvel and DC hero arrays
const marvelHeroes = ["spiderman", "thor", "hulk", "ironman"];
const dcHeroes = ["batman", "superman", "arrow", "flash"];

// Pushing the entire dcHeroes array into marvelHeroes creates a nested array
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes); // ["spiderman", "thor", "hulk", "ironman", ["batman", "superman", "arrow", "flash"]]

// To access elements in the nested array, we use multiple indices: first the index of the parent array and then the index of the nested array
console.log(marvelHeroes[4][2]); // Output: "arrow"

/*
Tips:
- Pushing an array into another array creates a nested array (array inside an array).
- Access nested elements using multiple indices for each level of nesting.
*/

// ----Segment 2: Array Concatenation Using concat()----

// Concatenating two arrays using the concat() method
const array1 = [42, 17, 89, 3, 56, 28, 77];
const array2 = ["apple", "zebra", "cloud", "blue", "echo"];

// const newArray = array1.concat(array2);
// console.log("array 1", array1); // Output: [42, 17, 89, 3, 56, 28, 77]
// console.log("array 2", array2); // Output: ["apple", "zebra", "cloud", "blue", "echo"]
// console.log("Concat array", newArray); // Output: [42, 17, 89, 3, 56, 28, 77, "apple", "zebra", "cloud", "blue", "echo"]

/*
Tips:
- `.concat()` is used to merge two arrays into a new array. It does not modify the original arrays.
- The concatenated array includes all elements of both arrays in sequence.
*/

// ----Segment 3: Array Spread Operator (Spread Syntax)----

// Using the spread operator to merge two arrays
const myNewSpreadArray = [...array1, ...array2];
console.log("Spread Array is", myNewSpreadArray);
// Output: [42, 17, 89, 3, 56, 28, 77, "apple", "zebra", "cloud", "blue", "echo"]

/*
Tips:
- The spread operator `...` allows you to merge multiple arrays easily into a new array.
- Unlike `.concat()`, the spread operator can be applied to more than two arrays at once.
*/

// ----Segment 4: Flattening Nested Arrays----

// Flattening a deeply nested array using the flat() method
const hackingArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [1, 2, [3, 4]]]];
console.log(hackingArray.flat(2));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, [3, 4]]

/*
Tips:
- `.flat(depth)` flattens an array up to a specified depth. By default, `flat()` flattens one level deep.
- You can specify the depth of flattening (e.g., `flat(2)` will flatten two levels deep).
*/
