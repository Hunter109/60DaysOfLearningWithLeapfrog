const element = document.getElementById("myElement");

// We can only set one attribute using setAttribute, but we commonly use classList to 
// add, remove, or toggle classes. Using classList, we can add one or many classes to a single element.

// Add a class
element.classList.add("highlight");
console.log(element.className);

// Remove a class
element.classList.remove("example");
console.log(element.className);

// Toggle a class
element.classList.toggle("bold");
console.log(element.className);

// Toggle the class again
element.classList.toggle("bold");
console.log(element.className);
