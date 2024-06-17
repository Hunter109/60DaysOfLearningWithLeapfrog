function performAsyncOperation(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Operation was successful!");
            } else {
                reject("Operation failed.");
            }
        }, 1000);
    });
}

// Using the promise
performAsyncOperation(true)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

performAsyncOperation(false)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
