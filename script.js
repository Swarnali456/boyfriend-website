const questions = [
    {
        question: "What's my ideal kind of day?",
        options: [
            "Staying home peacefully",
            "Going out and exploring",
            "Doing something chaotic",
            "A little bit of everything"
        ],
        answer: 3
    },
    {
        question: "What would I choose first?",
        options: [
            "Coffee",
            "A long nap",
            "Shopping",
            "Adventure"
        ],
        answer: 0
    },
    {
        question: "What's my vibe?",
        options: [
            "Soft and peaceful",
            "Chaotic and funny",
            "Quiet at first, crazy later",
            "All of these"
        ],
        answer: 3
    },
    {
        question: "Pick my perfect plan:",
        options: [
            "Bike ride",
            "Movie night",
            "Exploring somewhere new",
            "Whatever feels fun"
        ],
        answer: 3
    },
    {
        question: "What do I value most?",
        options: [
            "Money",
            "Communication",
            "Peace",
            "Being understood"
        ],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const startButton = document.getElementById("startButton");
const game = document.getElementById("game");
const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");

startButton.addEventListener("click", function() {

    startButton.style.display = "none";
    game.style.display = "block";

    showQuestion();

});

function showQuestion() {

    const current = questions[currentQuestion];

    question.textContent =
        "Question " + (currentQuestion + 1) + "/5: " + current.question;

    options.innerHTML = "";

    current.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.textContent = option;

        button.addEventListener("click", function() {
            checkAnswer(index);
        });

        options.appendChild(button);

    });
}

function checkAnswer(selectedAnswer) {

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        question.textContent = "Game Over 💕";

        options.innerHTML = "";

        result.textContent =
            "Your score: " + score + "/5 ❤️";

    }
    }
