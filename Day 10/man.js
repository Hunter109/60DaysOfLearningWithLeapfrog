const numbers = [34, 56, 23, 89, 10, 45, 67, 22, 18, 97, 43, 55, 72, 88, 21, 4, 67, 59, 81, 90];

//  the minimum value in the array
function findMinValue(arr) {
    return Math.min(...arr);
}

//  the maximum value in the array
function findMaxValue(arr) {
    return Math.max(...arr);
}

const minValue = findMinValue(numbers);
const maxValue = findMaxValue(numbers);

console.log("Numbers array:", numbers);
console.log("Minimum value:", minValue);
console.log("Maximum value:", maxValue); 