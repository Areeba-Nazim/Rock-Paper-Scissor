let choices = document.querySelectorAll(".choice");
let winner = document.querySelector("#winner-box h2");
let userScore = document.querySelector("#user p:first-child"); 
let compScore = document.querySelector("#computer p:first-child");
let winnerBox = document.querySelector("#winner-box");
let user = 0; 
let comp = 0; 

const showWinner = (userWin) => {
    if (userWin) {
        user++;
        winner.innerHTML = `You Won!`;
        winnerBox.style.backgroundColor = "#38b000";
    } else {
        comp++;
        winner.innerHTML = `You Lose`;
        winnerBox.style.backgroundColor = "#d00000";
    }
    updateScores();
};

const drawGame = () => {
    winner.innerHTML = `Game was draw`;
    winnerBox.style.backgroundColor = "#000";
};

const updateScores = () => {
    userScore.innerHTML = user;
    compScore.innerHTML = comp;
};

const compChoicegen = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const playGame = (userChoice) => {
    const compChoice = compChoicegen();

    if (compChoice === userChoice) {
        drawGame();
    } else {
        let userWin;

        if (userChoice === "rock") {
            userWin = compChoice === "scissor";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else {
            // scissor
            userWin = compChoice === "paper";
        }

        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

