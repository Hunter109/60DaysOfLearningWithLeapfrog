// using try catch keyword to catch the error and for the proper flow of the program
//arrow function in the javascript

try {
    const multiplication = () => {
        let num = 8;
        console.log(`multiplication of 8 using arrow function`);
        for (let i = 1; i <= 10; i++) {
            console.log(`8 * ${i} = ${num * i}`)
        }
    }

    multiplication();
}
catch (error) {
    console.log(error)
}