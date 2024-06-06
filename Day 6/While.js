//  program that generates random numbers between 1 and 10 until a particular number, say 7, is generated using a while loop.

let i = 1;
while (i < 10) {
    console.log(i);
    if (i == 7) {
        console.log("the number is 7");
        break;
    }
    i++;
}