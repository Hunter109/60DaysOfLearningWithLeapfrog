const question = [
    {
        question: "Who is the President of Nepal?",
        options: ["KP Oli", "Sher Bahadur Deuba", "Ram Chandra Poudel", "Bidhya Devi Bhandari"],
        answer: "Ram Chandra Poudel"
    },
    {
        question: "Who is the Prime Minister of Nepal?",
        options: ["KP Oli", "Sher Bahadur Deuba", "Prachanda", "Madhav Kumar Nepal"],
        answer: "Prachanda"
    },
    {
        question: "Who is the Home Minister of Nepal?",
        options: ["Ram Bahadur Thapa", "Bishnu Poudel", "Janardan Sharma", "Rabi Lamichhane"],
        answer: "Rabi Lamichhane"
    }
];

const quizContainer = document.getElementById('quiz');
const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('nextBtn');
const resultContainer = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const currentquestion = question[currentQuestion];
    questionContainer.textContent = currentquestion.question;

    optionsContainer.innerHTML = '';
    currentquestion.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.classList.add('btn');
        optionElement.addEventListener('click', () => selectAnswer(option, index));
        optionsContainer.appendChild(optionElement);
    });

    disableNextButton();
}

// Select an answer
function selectAnswer(selectedOption, index) {
    const currentquestion = question[currentQuestion];
    const correctOption = currentquestion.answer;

    if (selectedOption === correctOption) {
        score++;
        optionsContainer.children[index].classList.add('correct');
    } else {
        optionsContainer.children[index].classList.add('wrong');
        optionsContainer.querySelector(`button:nth-child(${currentquestion.options.indexOf(correctOption) + 1})`).classList.add('correct');
    }

    const options = optionsContainer.querySelectorAll('.btn');
    options.forEach(option => {
        option.disabled = true;
    });

    enableNextButton();
}

function enableNextButton() {
    nextButton.disabled = false;
}

function disableNextButton() {
    nextButton.disabled = true;
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < question.length) {
        loadQuiz();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.style.display = 'none';
    resultContainer.textContent = `Your score: ${score} out of ${question.length}`;
    resultContainer.style.display = 'block';
}

loadQuiz();
