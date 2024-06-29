for (let i = 1; i <= 7; i++) {
    let showContent = document.getElementById(`showContent${i}`);
    let btn = document.getElementById(`day${i}`);

    btn.addEventListener("click", () => {
        alert("click");
        setTimeout(() => {
            showContent.classList.toggle("hidden");
            if (showContent.classList.contains("hidden")) {
                btn.innerText = "View Details";
            } else {
                btn.innerText = "Close Details";
            }
        }, 300);
    });
}
