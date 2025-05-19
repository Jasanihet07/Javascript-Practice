/* Segment: 1 Working with Course Objects and JSON Responses
   General Note: When a user hits an API, it gets a response from it — both processes involve objects.
   These objects are called JSON.

   Sometimes, instead of a single object, an array of objects is returned in the response.
   Hence, objects and arrays should be prepared together.
*/

// Array of course objects
const courses = [
    {
        id: "c001",
        title: "Introduction to JavaScript",
        instructor: "John Doe",
        duration: "4 weeks",
        level: "Beginner"
    },
    {
        id: "c002",
        title: "Advanced Python Programming",
        instructor: "Jane Smith",
        duration: "6 weeks",
        level: "Advanced"
    },
    {
        id: "c003",
        title: "Web Development Bootcamp",
        instructor: "Mike Johnson",
        duration: "8 weeks",
        level: "Intermediate"
    },
    {
        id: "c004",
        title: "Data Structures and Algorithms",
        instructor: "Emily Davis",
        duration: "5 weeks",
        level: "Intermediate"
    }
];

/* Segment: 2 Accessing Values in Array of Objects */

// Older way of accessing the values in the object using array index
console.log(courses[1].title);  // Output: Advanced Python Programming

// Newer way using destructuring (Corrected usage)
const { title: nameOfCourse } = courses[0]; // Destructuring the first object in the array
console.log(nameOfCourse); // Output: Introduction to JavaScript

/* Segment: 3 Difference between Object and JSON */

// The major difference between an Object and JSON (JavaScript Object Notation)
// is that JSON does not have variable names and is just a textual data format.
// Objects are used in code with names and can include methods.
