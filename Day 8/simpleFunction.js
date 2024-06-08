// function in js 
//  a function  that takes a name as an argument and returns a greeting message.
function greet(name) {
    console.log(`hello ${name} how are you ?`);
}
greet("hunter");

greet("4nonymous");

//  a function that takes a number as input and returns `true` if the number is even and `false` otherwise.
function isEven(number) {
    if (number % 2 == 0) {
        console.log("true");
    }
    else {
        console.log("flase");
    }
}
function isEVenTenary(number) {
    number % 2 == 0 ? (console.log("true")) : (console.log("false"));
}
isEven(8);
isEVenTenary(9);

//  a function  that calculates and returns the area of a rectangle given its length and width as arguments.
function calculateArea(length, width) {
    let area = length * width;
    console.log(area);
}
calculateArea(8, 10);
