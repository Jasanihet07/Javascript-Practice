/* Segment: 2 Data Type Conversion */

let score = true;
console.log(score); // true
console.log(typeof score); // boolean
console.log(typeof (score)); // boolean

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 1

let someNumber = 33;
let someString = String(someNumber);
console.log(someString); // "33"
console.log(typeof someString); // string

/* Segment : 3 Basic Operations */

let value = 3;
let negValue = -value;
console.log(negValue); // -3

/* Segment: 4 String Operations and Concatenation (Important for Interviews) */

let str1 = "Het";
let str2 = " Jasani";
let str3 = str1 + str2;
console.log(str3); // Het Jasani

console.log(1 + 2); // 3
console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log(1 + 2 + "3"); // 33
console.log(1 + "2" + "3"); // 123
console.log(1 + "2" + 3); // 123
console.log("1" + 2 + 3); // 123
console.log("1" + "2" + 3); // 123
console.log("1" + "2" + 3 + 4); // 1234
console.log("1" + 2 + 3 + "4"); // 1234

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

/* Segment : 5 Prefix and Postfix Operators */

let gameCounter = "100";
console.log(gameCounter); // 100
++gameCounter; // prefix
console.log(gameCounter); // 101
gameCounter++; // postfix
console.log(gameCounter); // 101 (internally incremented to 102 after this statement)

let x = 3;
const y = x++; // first assigned, then incremented
console.log("x : " + x + " and y : " + y); // x:4 and y:3

let a = 3;
const b = ++a; // incremented first, then assigned
console.log("a : " + a + " and b : " + b); // a:4 and b:4

/* Segment : 6 Comparison Operators */

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null == 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true

/* Segment: 7 Stack vs. Heap Memory Concepts */

let myName = "Het Jasani";
let myAnotherName = "Jasani Het";
let otherName = myAnotherName;
otherName = "Guyzz Chai Pelo";

console.log(myName); // Het Jasani
console.log(myAnotherName); // Jasani Het
console.log(otherName); // Guyzz Chai Pelo

let userOne = {
    email: "hello@gmail.com",
    age: "21",
    gender: "Female"
};

let userTwo = userOne;
userTwo.age = "2";
userTwo.email = "hii@gmail.com";

console.log(userOne.age); // 2
console.log(userTwo.age); // 2
console.log(userOne.email); // hii@gmail.com
console.log(userTwo.email); // hii@gmail.com

/* Segment: 8 String Interpolation */

const name = "Het ";
const surname = "Jasani ";
console.log(`My name is ${name}and surname is ${surname}`);

/*
Tips:
- Always understand how type coercion and conversions work in JavaScript.
- Prefer template literals (backticks) over string concatenation for cleaner syntax and easier readability.
- Avoid comparing different data types unless you explicitly convert them.
- Use "strict equality" (===) when possible to avoid unexpected type conversions.
*/
