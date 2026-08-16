* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #0b1120;
    color: white;
}

header {
    text-align: center;
    padding: 60px 20px;
    background: #111827;
}

header h1 {
    font-size: 45px;
    margin-bottom: 10px;
}

header p {
    color: #94a3b8;
    font-size: 18px;
}

nav {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 20px;
    background: #020617;
}

nav button {
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: white;
    cursor: pointer;
}

nav button:hover {
    background: #1d4ed8;
}

.section {
    max-width: 1000px;
    margin: auto;
    padding: 60px 20px;
    text-align: center;
}

.hidden {
    display: none;
}

.stats {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.card {
    width: 220px;
    padding: 30px;
    background: #1e293b;
    border-radius: 15px;
}

.card p {
    font-size: 35px;
    color: #60a5fa;
}

.progress {
    max-width: 600px;
    height: 25px;
    margin: 20px auto;
    background: #1e293b;
    border-radius: 20px;
    overflow: hidden;
}

#progressBar {
    width: 0%;
    height: 100%;
    background: #22c55e;
    transition: 0.5s;
}

.command-list {
    display: grid;
    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));

    gap: 20px;
}

.command-card {
    padding: 25px;
    background: #1e293b;
    border-radius: 12px;
}

.command-card h3 {
    color: #60a5fa;
    font-family: monospace;
    font-size: 25px;
}

.quiz-card {
    max-width: 650px;
    margin: auto;
    padding: 40px;
    background: #1e293b;
    border-radius: 15px;
}

.quiz-card button {
    margin: 8px;
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: white;
    cursor: pointer;
}

.quiz-card button:hover {
    background: #1d4ed8;
}

#result {
    margin-top: 25px;
    font-size: 20px;
}

footer {
    text-align: center;
    padding: 30px;
    background: #020617;
    color: #94a3b8;
}

@media (max-width: 600px) {

    header h1 {
        font-size: 32px;
    }

    nav {
        flex-wrap: wrap;
    }

    .section {
        padding: 40px 15px;
    }
}
