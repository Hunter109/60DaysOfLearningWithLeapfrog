let childDiv = document.createElement("div");
childDiv.innerText = "this is my online name";
let childDiv2 = document.createElement("div");
childDiv2.innerText = "this is list of my name";

let parent = document.getElementsByClassName("nav-links")[0];
parent.append(childDiv2);
parent.prepend(childDiv);

// add class to newly added div 
childDiv.classList.add("div2");

// Function to generate a random RGB color
function dynamicColor() {
    let clr1 = Math.floor(0 + Math.random() * 255);
    let clr2 = Math.floor(0 + Math.random() * 255);
    let clr3 = Math.floor(0 + Math.random() * 255);
    return `rgb(${clr1},${clr2},${clr3})`;
}

// Select all elements with the class name 'box'
let box = document.querySelectorAll(".box");

Array.from(box).forEach((e) => {
    e.style.backgroundColor = dynamicColor();
});

// Select the first h2 element
let h2 = document.querySelector("h2");
// Set a random color to the text of the h2 element
h2.style.color = dynamicColor();
