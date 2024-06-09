//  a function that logs a message
const intervalMessage = () => {
    console.log("This message will print in every 2 seconds.");
};

// Call setInterval with the function and an interval of 2000 milliseconds 
const intervalId = setInterval(intervalMessage, 2000);

// Additional code to stop the interval after a certain period
// In this case, stop the interval after 10 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared after 10 seconds.");
}, 10000);
