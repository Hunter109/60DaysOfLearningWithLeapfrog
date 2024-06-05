// string method in js 

// trim() method is use to remove blank space at the start and end of the string 
let company = "    Leapfrog  ";
let result = company.trim();
console.log(result);

// toUpperCase(), toLowerCase() method is use to convert string into uppercase and lowercase 
let country = "Nepal";
console.log(country.toLowerCase());
console.log(country.toUpperCase());

//indexOf() method return the first indexof occurrence of some value in string . or give -1 if not found 
console.log(country.indexOf("N"));

//slice() method return a part of the original string as new string
console.log(country.slice(1, 3));
console.log(country.slice(0));

// replace and repeat method 
console.log(country.replace("Nepal", "utsav"))
console.log(country.repeat(3));