const questions = [
    {
        question: "Qual é a tradução de 'book'?",
        options: ["Livro", "Caderno", "Mesa", "Caneta"],
        answer: "Livro"
    },
    {
        question: "Complete a frase: 'I have a ... car.'",
        options: ["red", "blue", "happy", "quick"],
        answer: "red"
    },
    {
        question: "Qual é a tradução de 'dog'?",
        options: ["Gato", "Cachorro", "Pássaro", "Peixe"],
        answer: "Cachorro"
    },
    {
        question: "Qual destas frases está correta em inglês?",
        options: [
            "She can sings well.",
            "She can sing well.",
            "She can sing good.",
            "She can sing wellly."
        ],
        answer: "She can sing well."
    },
    {
        question: "Qual é a tradução de 'thank you'?",
        options: ["Por favor", "Desculpe", "Obrigado", "Bom dia"],
        answer: "Obrigado"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('quiz-container');
    const question = questions[currentQuestionIndex];
    
    questionContainer.innerHTML = `
        <div class="question">${question.question}</div>
        ${question.options.map(option => `
            <label class="option">
                <input type="radio" name="option" value="${option}"> ${option}
            </label>
        `).join('')}
    `;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }
    }
}

document.getElementById('next-button').addEventListener('click', () => {
    checkAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz-container').innerHTML = `
            <h2>Quiz terminado!</h2>
            <p>Sua pontuação final é ${score}/${questions.length}</p>
            <button onclick="restartQuiz()">Jogar novamente</button>
        `;
        document.getElementById('next-button').style.display = 'none';
    }
});

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('next-button').style.display = 'inline-block';
    document.getElementById('score').innerText = 'Pontuação: 0';
    loadQuestion();
}

loadQuestion();

