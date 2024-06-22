const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");
    if (isOpen) {
        toggleBtnIcon.classList.remove("fa-bars");
        toggleBtnIcon.classList.add("fa-xmark");
    } else {
        toggleBtnIcon.classList.remove("fa-xmark");
        toggleBtnIcon.classList.add("fa-bars");
    }
};


function redirectToNextPage() {
    window.location.href = "./allcourse.html";
}





