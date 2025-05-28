/* Segment:1: if we have multiple parameter being passed to the method but don't know how many (parameters not fixed),
For such cases, we use rest operators or spread operators (...num1)
This returns array of the parameters passed into the method
 */

function calculatePriceOfItemsInCart(...num1) {
    return num1
}

console.log(calculatePriceOfItemsInCart(200, 300, 400));


/* Segment 2: 
What if we have the below scenario?
Then what will happen is that val1 is holding the values of 200, val2 is holding the value of 300, and the rest are returned into an array. */

function calculatePriceOfItemsInCartWithMoreVariables(val1, val2, ...num1) {
    return num1
}

console.log(calculatePriceOfItemsInCart(100, 200, 300, 400, 500));