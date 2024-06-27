document.addEventListener("DOMContentLoaded", function () {
    var contextMenuElement = document.getElementById("box1");
    contextMenuElement.addEventListener("contextmenu", function (event) {
        alert("Context menu was triggered!");
        event.preventDefault();
    });

    var inputElement = document.getElementById("input1");

    inputElement.addEventListener("focus", function () {
        inputElement.style.border = "2px solid green";
        console.log("Input element has gained focus");
    });

    inputElement.addEventListener("blur", function () {
        inputElement.style.border = "1px solid #ccc";
        console.log("Input element has lost focus");
    });

    var box2Element = document.getElementById("box2");

    box2Element.addEventListener("click", function () {
        inputElement.focus();
    });

    var box3Element = document.getElementById("box3");

    box3Element.addEventListener("mouseenter", function () {
        box3Element.style.backgroundColor = "lightgreen";
    });

    box3Element.addEventListener("mouseleave", function () {
        box3Element.style.backgroundColor = "lightblue";
    });

    var myForm = document.getElementById("myForm");

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var username = myForm.elements["username"].value;
        alert("Form submitted with username: " + username);
        console.log("Form submitted with username:", username);
    });
});

