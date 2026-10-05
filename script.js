const questions = [
    {
        question: "What am I most likely to do when I'm stressed?",
        options: [
            "Talk to everyone about it",
            "Go completely quiet",
            "Distract myself with my phone or something else",
            "Make a detailed plan immediately"
        ],
        answer: 2
    },

    {
        question: "What kind of outing would make me happiest?",
        options: [
            "A huge crowded party",
            "A peaceful café and wandering somewhere new",
            "A formal dinner at an expensive restaurant",
            "A huge concert"
        ],
        answer: 1
    },

    {
        question: "What's my favourite type of food?",
        options: [
            "Chinese",
            "Bengali / Indian",
            "Italian",
            "Fast food"
        ],
        answer: 1
    },

    {
        question: "What's my favourite season?",
        options: [
            "Spring",
            "Summer",
            "Autumn",
            "Winter"
        ],
        answer: 2
    },

    {
        question: "If I could instantly have ONE thing right now, what would I choose?",
        options: [
            "Financial independence",
            "A dream vacation",
            "A perfect wardrobe",
            "A completely stress-free life"
        ],
        answer: 0
    },

    {
        question: "What am I like when I first get to know someone?",
        options: [
            "Very talkative immediately",
            "Quiet at first, then chaotic when comfortable",
            "Super confident and outgoing",
            "I start teasing them immediately"
        ],
        answer: 1
    },

    {
        question: "What kind of weather do I actually prefer?",
        options: [
            "Bright and very sunny",
            "Heavy rain and thunderstorms",
            "Cool and breezy, neither sunny nor rainy",
            "Very cold and foggy"
        ],
        answer: 2
    },

    {
        question: "If I get a completely free day, what would I most likely choose?",
        options: [
            "Go to a huge party",
            "Spend the whole day shopping",
            "Cook something and enjoy a slow day",
            "Go on a long trip"
        ],
        answer: 2
    },

    {
        question: "Which kind of gift would mean the most to me?",
        options: [
            "Something very expensive",
            "Something handmade and personal",
            "A luxury handbag",
            "A gift card"
        ],
        answer: 1
    },

    {
        question: "What do I call people I'm really close and comfortable with?",
        options: [
            "Bro",
            "Tattu / Battu / Cutu-type nicknames",
            "Their full name",
            "Sir / Madam 😭"
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
        "Question " + (currentQuestion + 1) + "/10: " + current.question;

    options.innerHTML = "";
    result.textContent = "";

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

        result.textContent = "Correct! You actually know me 👀❤️";

    } else {

        result.textContent = "Wrong! Excuse me?? 😭";

    }


    const buttons = options.querySelectorAll("button");

    buttons.forEach(function(button) {

        button.disabled = true;

    });


    setTimeout(function() {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            showFinalScore();

        }

    }, 1000);

}


function showFinalScore() {

    question.textContent = "Game Over 💕";

    options.innerHTML = "";


    if (score >= 9) {

        result.textContent =
            "You scored " + score + "/10 ❤️ " +
            "Okayyy, you REALLY know me 👀";

    } else if (score >= 7) {

        result.textContent =
            "You scored " + score + "/10 💗 " +
            "Not bad... you've been paying attention 😌";

    } else if (score >= 4) {

        result.textContent =
            "You scored " + score + "/10 😭 " +
            "We need to have a serious conversation.";

    } else {

        result.textContent =
            "You scored " + score + "/10 💀 " +
            "WHO EVEN ARE YOU??";

    }


    const restartButton = document.createElement("button");

    restartButton.textContent = "Play Again 🔄";


    restartButton.addEventListener("click", function() {

        currentQuestion = 0;
        score = 0;

        showQuestion();

    });


    options.appendChild(restartButton);

        }
