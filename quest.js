/*Criando questões e Respostas*/
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
    },
      {
        question: "Qual é a tradução de 'house'?",
        options: ["Casa", "Apartamento", "Edifício", "Rua"],
        answer: "Casa"
      },
      {
        question: "Qual é a tradução de 'apple'?",
        options: ["Maçã", "Banana", "Laranja", "Pera"],
        answer: "Maçã"
      },
      {
        question: "Qual é a tradução de 'hello'?",
        options: ["Olá", "Tchau", "Bom dia", "Boa noite"],
        answer: "Olá"
      },
      {
        question: "Qual é a tradução de 'water'?",
        options: ["Água", "Leite", "Suco", "Chá"],
        answer: "Água"
      },
      {
        question: "Qual é a tradução de 'school'?",
        options: ["Escola", "Universidade", "Biblioteca", "Hospital"],
        answer: "Escola"
      },
      {
        question: "Qual é a tradução de 'friend'?",
        options: ["Amigo", "Família", "Professor", "Colega"],
        answer: "Amigo"
      },
      {
        question: "Qual é a tradução de 'music'?",
        options: ["Música", "Dança", "Teatro", "Cinema"],
        answer: "Música"
      },
      {
        question: "Qual é a tradução de 'computer'?",
        options: ["Computador", "Telefone", "Tablet", "Impressora"],
        answer: "Computador"
      },
      {
        question: "Qual é a tradução de 'city'?",
        options: ["Cidade", "Paisagem", "Praia", "Montanha"],
        answer: "Cidade"
      },
      {
        question: "Qual é a tradução de 'food'?",
        options: ["Comida", "Bebida", "Doce", "Salgado"],
        answer: "Comida"
      },
      {
        question: "Qual é a tradução de 'car'?",
        options: ["Carro", "Moto", "Bicicleta", "Avião"],
        answer: "Carro"
      },
      {
        question: "Qual é a tradução de 'park'?",
        options: ["Parque", "Jardim", "Praça", "Rua"],
        answer: "Parque"
      },
      {
        question: "Qual é a tradução de 'hotel'?",
        options: ["Hotel", "Restaurante", "Cinema", "Teatro"],
        answer: "Hotel"
      },
      {
        question: "Qual é a tradução de 'beach'?",
        options: ["Praia", "Montanha", "Cidade", "Floresta"],
        answer: "Praia"
      },
      {
        question: "Qual é a tradução de 'phone'?",
        options: ["Telefone", "Computador", "Tablet", "Impressora"],
        answer: "Telefone"
      },
      {
        question: "Qual é a tradução de 'game'?",
        options: ["Jogo", "Filme", "Música", "Desenho"],
        answer: "Jogo"
      },
      {
        question: "Qual é a tradução de 'library'?",
        options: ["Biblioteca", "Escola", "Universidade", "Museu"],
        answer: "Biblioteca"
      },
      {
        question: "Qual é a tradução de 'doctor'?",
        options: ["Doutor", "Enfermeiro", "Paciente", "Hospital"],
        answer: "Doutor"
      },
      {
        question: "Qual é a tradução de 'airport'?",
        options: ["Aeroporto", "Estação", "Porto", "Rodoviária"],
        answer: "Aeroporto"
      }
];
//Fim Questions//


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
        `).sort(() => Math.random() - 0.5).join('')}
    `;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
            document.getElementById("score").textContent = "Pontuação: " + score
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
//
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('next-button').style.display = 'inline-block';
    document.getElementById('score').innerText = 'Pontuação: 0';
    loadQuestion();
}

loadQuestion();

