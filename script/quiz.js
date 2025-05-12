const quizData = [
  {
    question: "What is 5 + 3?",
    options: ["6", "8", "10"],
    correct: "8"
  },
  {
    question: "Which is a prime number?",
    options: ["4", "9", "7"],
    correct: "7"
  },
  {
    question: "What is the square root of 16?",
    options: ["3", "4", "5"],
    correct: "4"
  }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const nextBtn = document.getElementById('nextBtn');
const resultContainer = document.getElementById('result');

function loadQuestion() {
  const q = quizData[currentQuestion];
  quizContainer.innerHTML = `
    <h2>${q.question}</h2>
    ${q.options.map(option => `
      <label>
        <input type="radio" name="answer" value="${option}" />
        ${option}
      </label><br>
    `).join('')}
  `;
}

nextBtn.addEventListener('click', () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return alert("Please select an answer!");

  if (selected.value === quizData[currentQuestion].correct) score++;

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    quizContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    resultContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>You scored ${score} out of ${quizData.length}.</p>
    `;
  }
});

loadQuestion();
