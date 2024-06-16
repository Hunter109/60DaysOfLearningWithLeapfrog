document.addEventListener("DOMContentLoaded", () => {
    let inputData = document.querySelector("input");
    let addData = document.querySelector("button");
    let ul = document.querySelector("ul");

    addData.addEventListener("click", function () {
        let inputValue = inputData.value.trim();
        if (inputValue === "") {
            alert("Task cannot be empty!");
            return;
        }
        let newList = document.createElement("li");
        newList.innerText = inputValue;
        inputData.value = "";

        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("delete");

        newList.appendChild(delBtn);
        ul.appendChild(newList);
    });

    ul.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete")) {
            let targetParent = event.target.parentElement;
            targetParent.remove();
        } else if (event.target.nodeName === "LI") {
            event.target.classList.toggle("completed");
        }
    });
});
