const terminal = document.getElementById("terminal");
const input = document.getElementById("commandInput");

const commands = {
    help: "Available commands: help, about, skills, projects, whoami, date, clear",
    about: "Tushant is learning Linux and Web Development.",
    skills: "Linux | HTML | CSS | JavaScript",
    projects: "Linux Practice | Personal Portfolio | GitHub Website",
    whoami: "tushant",
};

function runCommand() {
    const command = input.value.trim().toLowerCase();

    if (command === "clear") {
        terminal.innerHTML = "";
        input.value = "";
        return;
    }

    let output = commands[command];

    if (command === "date") {
        output = new Date().toString();
    }

    if (!output) {
        output = `Command not found: ${command}. Type "help".`;
    }

    terminal.innerHTML += `
        <div class="command">
            tushant@portfolio:~$ ${command}
        </div>
        <div class="output">${output}</div>
    `;

    input.value = "";

    terminal.scrollTop = terminal.scrollHeight;
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        runCommand();
    }
});
