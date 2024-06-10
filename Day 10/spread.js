//  an array of numbers
const numbers = [5, 12, 8, 21, 19, 7, 3, 15];

// Using the spread operator to convert the array into individual arguments
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

// Log the results
console.log(`The minimum number is: ${minNumber}`);
console.log(`The maximum number is: ${maxNumber}`);

