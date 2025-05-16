/* Segment: 1 Variable Declarations and Scope in JavaScript */

const accountId = 121; // Constant: cannot be reassigned
let emailId = "hello@gmail.com"; // Block-scoped, preferred for reassignment
var phoneNumber = "1234509876"; // Function-scoped, not preferred due to hoisting issues
accountCity = "Ahmedabad"; // Implicit global variable (not recommended)

// Updating variable values (except const)
emailId = "hii@gmail.com";
phoneNumber = "23456789";
accountCity = "Gandhinagar";

// Printing the values
console.log(accountId);       // Output: 121
console.log(emailId);         // Output: hii@gmail.com
console.log(phoneNumber);     // Output: 23456789
console.log(accountCity);     // Output: Gandhinagar

/*
Tips & Notes:
- Always use `const` for values that should not change.
- Use `let` for variables that can change and are block-scoped.
- Avoid using `var` as it is function-scoped and can lead to unexpected behavior.
- Never declare variables implicitly (like accountCity above) as it can lead to global scope pollution.
*/