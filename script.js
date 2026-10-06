
/* =========================
   GAME ONE
========================= */

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


/* =========================
   ELEMENTS
========================= */

const welcome =
    document.getElementById("welcome");

const quiz =
    document.getElementById("quiz");

const startButton =
    document.getElementById("startButton");

const question =
    document.getElementById("question");

const options =
    document.getElementById("options");

const result =
    document.getElementById("result");

const progressBar =
    document.getElementById("progressBar");


/* =========================
   START GAME
========================= */

startButton.addEventListener("click", function() {

    welcome.style.display = "none";

    quiz.style.display = "block";

    currentQuestion = 0;

    score = 0;

    showQuestion();

    quiz.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {

    const current =
        questions[currentQuestion];


    question.textContent =
        "Question " +
        (currentQuestion + 1) +
        "/10: " +
        current.question;


    progressBar.style.width =
        ((currentQuestion + 1) / 10 * 100) + "%";


    options.innerHTML = "";

    result.textContent = "";


    current.options.forEach(function(option, index) {

        const button =
            document.createElement("button");


        button.textContent =
            option;


        button.onclick = function() {

            checkAnswer(index);

        };


        options.appendChild(button);

    });

}


/* =========================
   CHECK ANSWER
========================= */

function checkAnswer(selectedAnswer) {

    const buttons =
        options.querySelectorAll("button");


    buttons.forEach(function(button) {

        button.disabled = true;

    });


    if (
        selectedAnswer ===
        questions[currentQuestion].answer
    ) {

        score++;

        result.textContent =
            "Correct! You actually know me 👀❤️";

    } else {

        result.textContent =
            "Wrong! Excuse me?? 😭";

    }


    setTimeout(function() {

        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            showQuestion();

        } else {

            showScore();

        }

    }, 900);

}


/* =========================
   SCORE
========================= */

function showScore() {

    question.textContent =
        "Game Over 💕";

    progressBar.style.width =
        "100%";

    options.innerHTML = "";


    if (score >= 9) {

        result.textContent =
            "You scored " +
            score +
            "/10 ❤️ You REALLY know me.";

    } else if (score >= 7) {

        result.textContent =
            "You scored " +
            score +
            "/10 💗 Not bad...";

    } else if (score >= 4) {

        result.textContent =
            "You scored " +
            score +
            "/10 😭 We need to talk.";

    } else {

        result.textContent =
            "You scored " +
            score +
            "/10 💀 WHO EVEN ARE YOU??";

    }


    const next =
        document.createElement("button");


    next.textContent =
        "Next Game →";


    next.onclick = function() {

        quiz.style.display = "none";

        secondGame.style.display = "block";

        currentPick = 0;

        showPickQuestion();

        secondGame.scrollIntoView({
            behavior: "smooth"
        });

    };


    options.appendChild(next);

}


/* =========================
   GAME TWO
========================= */

const secondGame =
    document.getElementById("secondGame");

const pickQuestion =
    document.getElementById("pickQuestion");

const pickOptions =
    document.getElementById("pickOptions");

const pickResult =
    document.getElementById("pickResult");


const pickQuestions = [

    {
        question: "Where would I rather go with you?",

        options: [
            "Paris",
            "Disneyland",
            "A random peaceful place to explore together",
            "A huge shopping mall"
        ],

        answer: 2
    },

    {
        question: "Which gift would secretly make me happiest?",

        options: [
            "Something handmade",
            "An expensive watch",
            "Cash",
            "A random decoration"
        ],

        answer: 0
    },

    {
        question: "What kind of moment would I choose?",

        options: [
            "A super crowded party",
            "A peaceful bike ride with good weather",
            "A formal event",
            "A loud concert"
        ],

        answer: 1
    },

    {
        question: "What's more important to me?",

        options: [
            "Showing off",
            "Peace and genuine connection",
            "Having the most expensive things",
            "Being popular"
        ],

        answer: 1
    }

];


let currentPick = 0;


/* =========================
   SHOW GAME TWO
========================= */

function showPickQuestion() {

    const current =
        pickQuestions[currentPick];


    pickQuestion.textContent =
        current.question;


    pickOptions.innerHTML = "";

    pickResult.textContent = "";


    current.options.forEach(function(option, index) {

        const button =
            document.createElement("button");


        button.textContent =
            option;


        button.onclick = function() {

            checkPick(index);

        };


        pickOptions.appendChild(button);

    });

}


/* =========================
   CHECK GAME TWO
========================= */

function checkPick(selected) {

    const current =
        pickQuestions[currentPick];


    const buttons =
        pickOptions.querySelectorAll("button");


    buttons.forEach(function(button) {

        button.disabled = true;

    });


    if (selected === current.answer) {

        pickResult.textContent =
            "Correct again 👀❤️";

    } else {

        pickResult.textContent =
            "Hmmmm... interesting choice 😭";

    }

setTimeout(function() {

        currentPick++;


        if (
            currentPick <
            pickQuestions.length
        ) {

            showPickQuestion();

        } else {

            finishGameTwo();

        }

    }, 900);

}


/* =========================
   FINISH GAME TWO
========================= */

function finishGameTwo() {

    pickQuestion.textContent =
        "Okay, you're done 😌";


    pickOptions.innerHTML = "";


    pickResult.textContent =
        "You've unlocked something important...";


    const songButton =
        document.createElement("button");


    songButton.textContent =
        "Our Song 🎵";


    songButton.onclick = function() {

        secondGame.style.display = "none";

        songSection.style.display = "block";

        songSection.scrollIntoView({
            behavior: "smooth"
        });

    };


    pickOptions.appendChild(songButton);

}


/* =========================
   SONG
========================= */

const songSection =
    document.getElementById("songSection");

const final =
    document.getElementById("final");

const finalButton =
    document.getElementById("finalButton");


finalButton.onclick = function() {

    songSection.style.display = "none";

    final.style.display = "block";


    document.getElementById("finalMessage").innerHTML =
        "Maybe this website is just a tiny thing...<br><br>" +

        "but I wanted to make something that feels like us. " +

        "A little chaotic, a little cute, and hopefully something " +

        "that makes you smile. ❤️<br><br>" +

        "Thank you for being part of my story.";


    final.scrollIntoView({
        behavior: "smooth"
    });

};


/* =========================
   RESTART
========================= */

const restartButton =
    document.getElementById("restartButton");


restartButton.onclick = function() {

    currentQuestion = 0;

    score = 0;

    currentPick = 0;


    final.style.display = "none";

    songSection.style.display = "none";

    secondGame.style.display = "none";

    quiz.style.display = "none";

    welcome.style.display = "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};
    
