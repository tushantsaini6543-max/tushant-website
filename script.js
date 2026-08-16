let xp = 0;
let completed = 0;

const questions = [
    {
        question: "Which command shows the current directory?",
        options: ["pwd", "ls", "cd", "mkdir"],
        answer: "pwd"
    },
    {
        question: "Which command lists files?",
        options: ["cd", "ls", "pwd", "rm"],
        answer: "ls"
    },
    {
        question: "Which command creates a directory?",
        options: ["cat", "mkdir", "touch", "pwd"],
        answer: "mkdir"
    },
    {
        question: "Which command creates an empty file?",
        options: ["touch", "cd", "ls", "mv"],
        answer: "touch"
    }
];

let currentQuestion = 0;

function showSection(section) {

    document.querySelectorAll(".section").forEach(function(item) {
        item.classList.add("hidden");
    });

    document.getElementById(section).classList.remove("hidden");
}

function answer(selected) {

    const question = questions[currentQuestion];
    const result = document.getElementById("result");

    if (selected === question.answer) {

        result.textContent = "✅ Correct! +10 XP";

        xp += 10;
        completed++;

    } else {

        result.textContent =
            "❌ Wrong! Correct answer: " + question.answer;
    }

    updateDashboard();

    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }

    const question = questions[currentQuestion];

    document.getElementById("question").textContent =
        question.question;

    const buttons =
        document.querySelectorAll(".quiz-card button");

    buttons.forEach(function(button, index) {

        button.textContent =
            question.options[index];

        button.onclick = function() {
            answer(question.options[index]);
        };

    });

    document.getElementById("result").textContent = "";
}

function updateDashboard() {

    document.getElementById("xp").textContent = xp;

    document.getElementById("completed").textContent =
        completed;

    const level =
        Math.floor(xp / 30) + 1;

    document.getElementById("level").textContent =
        level;

    const progress =
        Math.min(xp, 100);

    document.getElementById("progressBar").style.width =
        progress + "%";
}
