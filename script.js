const lessons = [
    {
        title: "Introduction to Linux",
        text: "Learn what Linux is, how it works and why Linux is widely used in servers and cloud computing."
    },
    {
        title: "Linux File System",
        text: "Learn about /etc, /home, /var, /usr and other important Linux directories."
    },
    {
        title: "Basic Commands",
        text: "Learn pwd, ls, cd, mkdir, touch, cp, mv, rm and cat."
    },
    {
        title: "Users & Groups",
        text: "Learn how Linux users and groups work and how administrators manage accounts."
    },
    {
        title: "File Permissions",
        text: "Learn read, write and execute permissions with chmod and chown."
    },
    {
        title: "Processes",
        text: "Learn ps, top, kill and how Linux manages running processes."
    },
    {
        title: "Networking",
        text: "Learn IP addresses, interfaces, routes and basic Linux networking commands."
    },
    {
        title: "System Administration",
        text: "Learn services, logs, storage and system monitoring."
    }
];

let currentLesson = 0;

let completed =
    JSON.parse(localStorage.getItem("tushantProgress")) || [];

const lessonButtons = document.querySelectorAll(".lesson");
const title = document.getElementById("lessonTitle");
const description = document.getElementById("lessonDescription");
const progressFill = document.getElementById("progressFill");
const progressPercent = document.getElementById("progressPercent");
const completeBtn = document.getElementById("completeBtn");
const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");


function showLesson(index) {

    currentLesson = index;

    title.textContent = lessons[index].title;
    description.textContent = lessons[index].text;

    lessonButtons.forEach(button => {
        button.classList.remove("active");
    });

    lessonButtons[index].classList.add("active");

    updateProgress();
}


function updateProgress() {

    const percent =
        Math.round(
            (completed.length / lessons.length) * 100
        );

    progressFill.style.width = percent + "%";
    progressPercent.textContent = percent + "%";

    if (completed.includes(currentLesson)) {
        completeBtn.textContent = "✓ Completed";
    } else {
        completeBtn.textContent = "Complete Lesson ✓";
    }
}


lessonButtons.forEach((button, index) => {

    button.addEventListener("click", () => {
        showLesson(index);
    });

});


completeBtn.addEventListener("click", () => {

    if (!completed.includes(currentLesson)) {

        completed.push(currentLesson);

        localStorage.setItem(
            "tushantProgress",
            JSON.stringify(completed)
        );
    }

    updateProgress();

});


nextBtn.addEventListener("click", () => {

    if (currentLesson < lessons.length - 1) {
        showLesson(currentLesson + 1);
    }

});


previousBtn.addEventListener("click", () => {

    if (currentLesson > 0) {
        showLesson(currentLesson - 1);
    }

});


updateProgress();
