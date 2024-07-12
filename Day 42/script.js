let score = 0;
let wickets = 0;

const updateScoreboard = () => {
    document.getElementById('score').textContent = score;
    document.getElementById('wickets').textContent = wickets;
};

document.querySelectorAll('.ball-item').forEach(item => {
    item.addEventListener('click', () => {
        const ballScore = parseInt(item.getAttribute('data-score'));
        score += ballScore;
        updateScoreboard();
    });
});

document.querySelectorAll('.extra-item').forEach(item => {
    item.addEventListener('click', () => {
        const extraScore = parseInt(item.getAttribute('data-score'));
        const extraType = item.textContent;

        if (extraType === "Wicket") {
            wickets += 1;
        } else {
            score += extraScore;
        }

        updateScoreboard();
    });
});
