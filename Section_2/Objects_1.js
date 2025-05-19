/*
 Object can be defined in two ways: one via literals and the other via constructors.
 Also, they can be singleton.
 Constructor method in the method Object.create is used.
 
 Below is the object literals method that can be used to create Objects.
*/

const myNewSymbol = Symbol("LALA");
const randomUser = {
    "user name": "skywalker42",
    email: "skywalker42@example.com",
    [myNewSymbol]: "I am the Value of the Symbol",
    age: 31,
    isActive: true,
    hobbies: ["photography", "chess", "hiking"],
    address: {
        city: "Neo Tokyo",
        zipCode: "90001",
        country: "Japan"
    }
};

/* Segment: 1 Accessing values in the object and way of printing a symbol and checking its typeof. */
// console.log(randomUser.address);
// console.log(randomUser["user name"]);

// console.log(randomUser[myNewSymbol]); 
// console.log(typeof myNewSymbol);// Symbol


/* Segment: 2 Setting values externally into the object. */
// randomUser.email= "hello@gmail.com";


/* Segment: 3 Freeze method in an object.
   Object freeze method is used to make the object immutable. */
// Object.freeze(randomUser);
// console.log(randomUser);


/* Segment : 4
 Function in JavaScript you can add the function into the object like it is defined below. */
// randomUser.greeting = function(){
//     console.log("Hello and Good morning to the user.");
// }

// // Hello and Good morning to the user.
// console.log(randomUser.greeting()); 

// //  [Function (anonymous)] is given as the function is not executed properly.
// console.log(randomUser.greeting); 


/*
 Segment: 5 String Interpolation
 The concept of using back tick `` is called string interpolation
 where you have the fixed part of the string, and then you want
 to have a dynamic value passing to it, then you use it.
*/

// randomUser.greeting = function(){
//     console.log(`Hello and Good morning ${this["user name"]}`);
// }

// console.log(randomUser.greeting());


/*
Segment: 6 Important Tips.
 Here in the usage of reference we have used "this" as it is of the same object,
 or else you have to define the name of the object and then its property to access it.
 Also, make sure that the object is not frozen,
 or else it will not be able to change its values.
*/
