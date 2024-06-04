// 1.  Day of the Week:
//      a program that takes a number representing a day of the week(1 for Monday, 2 for Tuesday, etc.) and prints the name of the corresponding day.

let number;
number = prompt("enter the number ");

switch (number) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("invalid input");

}