function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000); //  2 second delay
    });
}

// Async function using await to handle the promise
async function getData() {
    console.log("Fetching data...");

    const result = await fetchData();

    console.log(result);
    console.log("Operation completed.");
}

// Call the async function
getData();
