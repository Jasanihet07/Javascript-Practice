/* Below are the two ways of defining the objects
   Both are internally the same and have no difference
*/

// // Segment: 1 Singleton Object
// const userName = new Object();
// console.log(userName);

// // Segment: 2 Non singleton object
// const anotherUserName ={};
// console.log(anotherUserName);


/* Segment: 3 Setting the values in the object with key and values. */
// const userName = new Object();
// userName.firstName = "Alice";
// userName.lastName = "Johnson";
// userName.age = 30;
// userName.email = "alice.johnson@example.com";
// userName.isActive = true;
// console.log(userName);

/* Segment: 4 How to define an object inside the object.
This segment also shows how to access and print the values inside the nested objects  */

// const nestedObject = {
//     userid : 12345,
//     UserActive: true,
//     userDetails : {
//         firstName: "Het" ,
//         lastName : "Jasani",
//         age : 23,
//         email : "het@gmail.com",
//         address : {
//             blockNo : 77777,
//             street : "Cross road",
//             city :"Ahmedabad",
//             state : "Gujarat",
//             pincode : 23450
//         }
//     }
// }
// console.log("Full object", nestedObject);
// console.log("User details",nestedObject.userDetails);
// console.log("User address inside userDetails",nestedObject.userDetails.address);


/* Methods in objects */
/* Segment: 5 Merge Method
 when we merge the object in object we can see that it creates a 
 new object and then pushes both the objects as if it is stored in an array */

// const obj1 = {a : 1, b : 2};
// const obj2 = {a : 1, b : 2};
// const obj3 = {obj1,obj2};
// console.log(obj3); // { obj1: { a: 1, b: 2 }, obj2: { a: 1, b: 2 } }


/* Segment: 6 Assign Method
 assignedObjects = Object.assign(target object, source object);
 When we use "assign", it merges two or more objects.
 It works by merging all the properties from the source to the target
 and returns the modified target object.
 
 Like in the below example, obj2 is merged into obj1
 and obj1 is returned.

 So make sure to use an empty object as the target to ensure
 that the result is returned in a new, empty object without modifying existing ones.
*/

// const assignedObjects= Object.assign(obj1,obj2);  // OK but not the best practices
// console.log(assignedObjects);

// const assignedObjects1= Object.assign({},obj1,obj2); // Correct way
// console.log(assignedObjects1);


/* Segment: 7 Creating a nested object and accessing the values inside them on the different index values.
Consider you want to access the email of the second user in the Arrays which has lots of objects in it.
So below is the way of doing it. */
// const users = [
//     {
//         userName:"user1",
//         isActive: true
//     },   {
//         userName:"user2",
//         isActive: false
//     },   {
//         userName:"user3",
//         isActive: true
//     },   {
//         userName:"user4",
//         isActive: true
//     },   {
//         userName:"user5",
//         isActive: false
//     }
// ];

//  console.log(users[1].userName);
//  console.log(users[1].isActive);


/* Segment: 8 Ways to get all the keys/values/entries in the object. */

// Below is the way of getting all the keys in the object where the data is being stored in a Key Value pair.
// console.log("The Set of Keys is: ",Object.keys(users));

// Below is the way of getting all the value in the object where the data is being stored in a Key Value pair.
// console.log("The Set of Users is: ",Object.values(users));

// Below is the way of getting all the entries in the object where the data is being stored in Key Value pair returns arrays.
// console.log("The Set of Entries is: ", Object.entries(users));
