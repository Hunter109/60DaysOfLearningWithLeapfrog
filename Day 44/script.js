let score = 0;
let wicket_count = 0;
let overs = 0;
let ball_count = 0;
let inningsCount = 1;
let innings1Score = 0;
let innings2Score = 0;
const MAX_OVERS = 10;

function scoreTrack(para, para1, para2) {
    const scoreCard = document.getElementById('scoreCard');
    scoreCard.textContent = `Score: ${para} / ${para1} (${para2})`;
}

function updateScore(message) {
    const scoresDiv = document.getElementById('scores_div');
    scoresDiv.textContent = message;
}

function innings(count) {
    updateScore(count);
    const btn = document.createElement("button");
    btn.textContent = "Start New Innings";
    btn.className = "btn bg-red";
    btn.onclick = function () {
        startNewInnings();
    };
    document.getElementById('scores_div').appendChild(btn);

    disableAllButtons();
}

function disableAllButtons() {
    const buttons = document.querySelectorAll('.run-button');
    buttons.forEach(button => {
        button.disabled = true;
        button.classList.add('disabled');
    });
}

function enableAllButtons() {
    const buttons = document.querySelectorAll('.run-button');
    buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove('disabled');
    });
}

function startNewInnings() {
    const scoresDiv = document.getElementById('scores_div');
    scoresDiv.textContent = "";
    if (inningsCount === 1) {
        innings1Score = score;
        inningsCount++;
    } else if (inningsCount === 2) {
        innings2Score = score;
        compareScores();
        return;
    }

    score = 0;
    wicket_count = 0;
    overs = 0;
    ball_count = 0;
    updateScore("New innings started");
    scoreTrack(score, wicket_count, `${overs}.${ball_count}`);
    enableAllButtons();
}

function compareScores() {
    let resultMessage = '';
    if (innings1Score > innings2Score) {
        resultMessage = 'Innings 1 wins!';
    } else if (innings2Score > innings1Score) {
        resultMessage = 'Innings 2 wins!';
    } else {
        resultMessage = 'It\'s a tie!';
    }
    updateScore(resultMessage);
    disableAllButtons();
}

function checkSecondInningsScore() {
    if (inningsCount === 2 && score > innings1Score) {
        innings2Score = score;
        compareScores();
        disableAllButtons();
    }
}

function endInningsIfRequired() {
    if (wicket_count >= 10 || overs >= MAX_OVERS) {
        innings('Innings has been ended.');
        return true;
    }
    return false;
}

function run_one() {
    if (!endInningsIfRequired()) {
        updateScore('You scored 1 run');
        score++;
        updateOverBall();
        checkSecondInningsScore();
    }
}

function run_two() {
    if (!endInningsIfRequired()) {
        updateScore('You scored 2 runs');
        score += 2;
        updateOverBall();
        checkSecondInningsScore();
    }
}

function run_three() {
    if (!endInningsIfRequired()) {
        updateScore('You scored 3 runs');
        score += 3;
        updateOverBall();
        checkSecondInningsScore();
    }
}

function run_four() {
    if (!endInningsIfRequired()) {
        updateScore('You hit a 4!');
        score += 4;
        updateOverBall();
        checkSecondInningsScore();
    }
}

function run_six() {
    if (!endInningsIfRequired()) {
        updateScore('You hit a 6!');
        score += 6;
        updateOverBall();
        checkSecondInningsScore();
    }
}

function wicket() {
    if (!endInningsIfRequired()) {
        updateScore('You are out! Wicket');
        wicket_count++;
        updateOverBall();
        checkSecondInningsScore();
    }
}

function dot() {
    if (!endInningsIfRequired()) {
        updateScore('Dot ball');
        updateOverBall();
        checkSecondInningsScore();
    }
}

function wide() {
    if (!endInningsIfRequired()) {
        updateScore('Wide ball');
        score++;
        scoreTrack(score, wicket_count, `${overs}.${ball_count}`);
        checkSecondInningsScore();
    }
}

function no_ball() {
    if (!endInningsIfRequired()) {
        updateScore('No ball');
        score++;
        scoreTrack(score, wicket_count, `${overs}.${ball_count}`);
        checkSecondInningsScore();
    }
}

function updateOverBall() {
    ball_count++;
    if (ball_count >= 6) {
        overs++;
        ball_count = 0;
    }
    scoreTrack(score, wicket_count, `${overs}.${ball_count}`);
    endInningsIfRequired();
}
