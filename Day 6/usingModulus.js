// printing even number upto 20 using for loop 

console.log("printing odd number upto 20 using i =i+2 increment ");
for (let i = 1; i <= 20; i = i + 2) {
    console.log(i);
}


console.log("\n");
console.log("printing even number using modulus operator ");
for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }

}