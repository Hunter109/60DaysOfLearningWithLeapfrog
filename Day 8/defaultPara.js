// in function we can also add defualt parameter which can be overright 

function sum(a, b, c = 9) {
    console.log(a + b + c);
}

// if we pass only two paramter function will work normaly and take c default value 9 
sum(1, 2);

// if we pass three paramter tha default value of c in function is oversight
sum(1, 2, 3);


function fac(num) {
    if (num === 0 || num === 1) {
        return 1; // Base case: factorial of 0 and 1 is 1
    } else {
        return num * fac(num - 1); // Recursive case: multiply num by factorial of (num - 1)
    }
}

let factorial = fac(10);
console.log(factorial);