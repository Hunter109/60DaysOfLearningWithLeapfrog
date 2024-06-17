// Function that returns a promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to use the delay
async function simpleAsyncFunction() {
    console.log('Operation started...');

    await delay(2000); // Wait for 2 seconds

    console.log('Operation completed after 2 seconds.');
}

// Call the async function
simpleAsyncFunction();
