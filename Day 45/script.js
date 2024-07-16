document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const result = document.getElementById('result');
    const resetBtn = document.getElementById('reset');
    const gameContainer = document.getElementById('game');

    const outcomes = ['rock', 'paper', 'scissors'];

    choices.forEach(choice => {
        choice.addEventListener('click', (e) => {
            playGame(e.currentTarget.id);
        });
    });

    resetBtn.addEventListener('click', resetGame);

    function playGame(playerChoice) {
        const computerChoice = outcomes[Math.floor(Math.random() * outcomes.length)];
        const winner = getWinner(playerChoice, computerChoice);

        displayResult(playerChoice, computerChoice, winner);
    }

    function getWinner(player, computer) {
        if (player === computer) {
            return 'It\'s a draw!';
        }
        if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'scissors' && computer === 'paper') ||
            (player === 'paper' && computer === 'rock')
        ) {
            return 'You win!';
        }
        return 'You lose!';
    }

    function displayResult(player, computer, winner) {
        const playerChoiceEl = document.getElementById(player);
        playerChoiceEl.classList.add('animate-bounce-custom');

        setTimeout(() => {
            playerChoiceEl.classList.remove('animate-bounce-custom');
        }, 1000);

        result.innerHTML = `You chose: ${player}<br>Computer chose: ${computer}<br>${winner}`;
    }

    function resetGame() {
        result.innerHTML = '';
    }
});
