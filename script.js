const questions = [
  {
    question: "Quelle est la période du Hacktoberfest durant l'annee ?",
    options: ["Octobre", "Décembre", "Mai", "Août"],
    correctAnswer: 0,
  },
  {
    question: "Où pouvez-vous contribuer pour participer au Hacktoberfest ?",
    options: ["AWS", "Facebook", "GitHub", "DigitaOcean"],
    correctAnswer: 2,
  },
  {
    question:
      "Combien de contributions sont nécessaires pour valider le Hacktoberfest ?",
    options: ["10", "2", "6", "4"],
    correctAnswer: 3,
  },
  {
    question: "Est-ce ce que GitLab participe au Hacktoberfest ?",
    options: ["Oui", "Non"],
    correctAnswer: 0,
  },
  {
    question: "Quelle societe a cree le hacktoberfest ?",
    options: ["DigitalOcean", "Microsoft", "galsenDev", "xarala"],
    correctAnswer: 0,
  },
  {
    question: "Combien de temps dure l'evenement Hacktoberfest ?",
    options: ["1 ans", "1 mois", "1 week-end"],
    correctAnswer: 1,
  },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");

function loadQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";

  question.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => checkAnswer(index));
    optionsElement.appendChild(li);
  });
}

function checkAnswer(selectedIndex) {
  const question = questions[currentQuestion];

  if (selectedIndex === question.correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionElement.textContent = "Quiz terminé ! Votre score :";
    optionsElement.innerHTML = "";
    scoreElement.textContent = score;
  }
}

loadQuestion();
