/*
 Function is simply wrapping up the code segment into a package called a function.
 It is usually done so that the aspect of code reusability is achieved.
 Repeated code segments can be put into a function and the function can be called whenever required.
 So, the function is a block of code that performs a specific task.
 It is executed when "something" invokes it (calls it).
 A JavaScript function is defined with the function keyword, followed by a name, 
 followed by parentheses ().
 The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...).
 The code to be executed by the function is placed inside curly brackets: {}.

 So, when a function is defined, the passed values are called arguments
 and the values which are passed to the function at its definition are called parameters.
*/

/* 
Segment 1: How to write a function 
The basic structure of a function is as follows:
function function_name(parameters, parameters, parameters) {
      function body
}
To call the function, you use the function name with arguments passed into the parentheses:
function_name(arguments, arguments, arguments);
*/

// Function Definition Example:
function sayMyName() {
    console.log("Het");
    console.log("Jasani");
}

// Function Invocation
sayMyName();  // Output: Het, Jasani


/* 
Segment 2: Function practice and its behavior
- Functions in JavaScript are not strictly typed, meaning they can accept any datatype as input.
- Functions that do not return a value will return `undefined` by default.
- It's important to use `return` to store the result from a function for further use.
*/

// Example: Adding two numbers without using `return` (result will not be stored)
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

// addTwoNumbers(3, 5);  // Output: 8
// addTwoNumbers(3, "5");  // Output: 35 (String concatenation)
// addTwoNumbers(3, null);  // Output: 3 (null is treated as 0)


// ** Important Tip **
// Functions that do not return a value will result in `undefined` when stored in a variable.


// Example of how to store the result properly by using `return`:
function addTwoNumbersAndReturn(number1, number2) {
    return number1 + number2;  // Returning the result
}

// const result = addTwoNumbersAndReturn(3, 5);
// console.log("Result is: ", result);  // Output: 8


/* 
Segment 3: Passing arguments and using parameters in functions
You can pass arguments to functions in various ways, and functions can return different values based on the arguments passed.
*/

// // Example: Greeting a user
// function userGreeting(userName) {
//     return `Dear ${userName}, hello, hope you have a nice day....`;
// }

// const result = userGreeting("Het Jasani");  // Type: 1 (normal way)
// const result1 = userGreeting("");  // Type: 2 (empty string)
// const result2 = userGreeting();  // Type: 3 (undefined)

// console.log(result);  // Output: "Dear Het Jasani, hello, hope you have a nice day...."
// console.log(result1);  // Output: "Dear , hello, hope you have a nice day...."
// console.log(result2);  // Output: "Dear undefined, hello, hope you have a nice day...."


/*
Sub-method Type 1: Checking if a parameter is `undefined` before using it
If a parameter is missing or undefined, you can handle this case in the function body.
*/

// Example: Handling missing arguments by checking for `undefined`:
function userGreetingWithCheck(userName) {
    if (userName === undefined) {
        return "Please enter a valid user.";
    }
    return `Dear ${userName}, hello, hope you have a nice day....`;
}

// const result3 = userGreetingWithCheck("Het Jasani");
// const result4 = userGreetingWithCheck();

// console.log(result3);  // Output: "Dear Het Jasani, hello, hope you have a nice day...."
// console.log(result4);  // Output: "Please enter a valid user."


/*
Sub-method Type 2: Handling empty or false values (like empty strings, null, 0)
If you want to check for any falsy value (empty string, null, 0), you can use a simple conditional check.
*/

// Example: Handling any falsy value:
function userGreetingWithFalsyCheck(userName) {
    if (!userName) {
        return "Please enter a valid user.";
    }
    return `Dear ${userName}, hello, hope you have a nice day....`;
}

// const result5 = userGreetingWithFalsyCheck("Het Jasani");
// const result6 = userGreetingWithFalsyCheck();

// console.log(result5);  // Output: "Dear Het Jasani, hello, hope you have a nice day…"
// console.log(result6);  // Output: "Please enter a valid user."


/*
Sub-method Type 3: Default parameters in functions
In JavaScript, you can set default values for parameters. If a parameter is not passed, it will take the default value.
*/

// Example: Setting a default parameter:
function userGreetingWithDefault(userName = "Temp user") {
    return `Dear ${userName}, hello and welcome to our platform.`;
}

// console.log(userGreetingWithDefault());  // Output: "Dear Temp user, hello and welcome to our platform."
// console.log(userGreetingWithDefault("Het Jasani"));  // Output: "Dear Het Jasani, hello and welcome to our platform."
