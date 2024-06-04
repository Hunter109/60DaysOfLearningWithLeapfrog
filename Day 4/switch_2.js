// 3. Weather Forecaster:
//     a program that takes a string representing the weather condition (e.g., "sunny", "cloudy", "rainy", "snowy") and prints a message based on the condition. For example, if the condition is "sunny", print "Don't forget your sunscreen!"

let condition = prompt("enter the condition of the weather");

switch (condition) {
    case "sunny":
        console.log("Don't forget your sunscreen");
        break;
    case "cloudy":
        console.log("Don't forget your umbrella!");
        break;
    case "rainy":
        console.log("Take your raincoat with you!");
        break;
    case "snowy":
        console.log("Bundle up warmly!");
        break;
    default:
        console.log("invalid weather condition input");
}
