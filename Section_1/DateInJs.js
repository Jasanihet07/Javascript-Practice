/* Segment: 1 - Working with JavaScript Dates */

let myDate = new Date();
console.log(myDate.getDate()); // Output: day of the month (1-31)
console.log(myDate.toDateString()); // Output: readable date string (e.g., Mon Apr 07 2025)
console.log(myDate.toISOString()); // Output: ISO 8601 format (e.g., 2025-04-07T06:41:49.679Z)
console.log(myDate.toLocaleString()); // Output: locale date & time (e.g., 7/4/2025, 12:11:49 pm)
console.log(typeof myDate); // Output: object

/*
Tips & Notes:
- JavaScript stores time starting from January 1, 1970 (Unix Epoch).
- Date objects are based on the number of milliseconds since that epoch.
- Temporal is the modern proposal for handling dates and times (future support).
*/

/* Segment: 2 - Month Indexing and Date Construction */
let myNewDate = new Date(2025, 6, 21); // Month is 0-indexed (6 = July)
console.log(myNewDate.toDateString()); // Output: Mon Jul 21 2025

let myNewDateAndTime = new Date(2025, 6, 21, 5, 4, 6);
console.log(myNewDateAndTime.toLocaleString()); // Output: 21/7/2025, 5:04:06 am

/* Segment: 3 - Working with Timestamps */
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Current time in milliseconds since Jan 1, 1970
console.log(myNewDateAndTime.getTime()); // Milliseconds of specific date
console.log(Date.now()); // Same as above

/* Segment: 4 - Extracting Date Components */
let newDate = new Date();
console.log(newDate.toLocaleDateString()); // e.g., 16/4/2025
console.log(newDate.getMonth() + 1); // Months are 0-indexed, so add 1

// Localized string formats
console.log(newDate.toLocaleString('default', {weekday: 'long'}));   // e.g., Tuesday
console.log(newDate.toLocaleString('default', {weekday: 'short'}));  // e.g., Tue
console.log(newDate.toLocaleString('default', {weekday: 'narrow'})); // e.g., T
console.log(newDate.toLocaleString('default', {month: 'long'}));     // e.g., April
console.log(newDate.toLocaleString('default', {month: 'short'}));    // e.g., Apr
console.log(newDate.toLocaleString('default', {year: '2-digit'}));   // e.g., 25
console.log(newDate.toLocaleString('default', {year: 'numeric'}));   // e.g., 2025

/*
Tips & Notes:
- Always remember month index starts at 0 (January = 0).
- Use toLocaleString options for flexible and localized date formats.
- Date.now() is great for measuring time differences.
*/
