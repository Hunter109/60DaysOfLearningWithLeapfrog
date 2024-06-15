function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;

}
let btn = document.querySelector("button");
btn.addEventListener("click", colorChange);


function colorChange() {
    let title = document.querySelector("h1");
    title.innerText = randomColor();

    let div = document.querySelector(".cd");
    div.style.backgroundColor = randomColor();
}