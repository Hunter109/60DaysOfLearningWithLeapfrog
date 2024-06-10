// function in array 
let arr = [10, 100, 30, 40, 50, 60];
// for each method 
arr.forEach((e) => {
    console.log(e);
})

// map method 
let student = [
    {
        name: "utsav",
        mark: 97
    }, {
        name: "wagle",
        mark: 80
    }
];
let double = student.map((e) => {
    return e.mark / 100;
})
console.log(double)