const categories = {
    1: ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍉", "🍉","🏏", "🏏", "⚾", "⚾", "🏆", "🏆", "🥇", "🥇"], // (Level 1-5)
    6: ["🐶", "🐶", "🐱", "🐱", "🐰", "🐰", "🦊", "🦊","🎥", "🎥", "🌟", "🌟", "👩‍🎤", "👩‍🎤", "💃", "💃"], // (Level 6-10)
    11:["👨‍🎤", "👨‍🎤", "🎬", "🎬", "🎭", "🎭", "📽", "📽","🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍉", "🍉"], // (Level 11-15)
    16:["🏏", "🏏", "⚾", "⚾", "🏆", "🏆", "🥇", "🥇","👨‍🎤", "👨‍🎤", "🎬", "🎬", "🎭", "🎭", "📽", "📽"], // (Level 16-20)
    21:["🎥", "🎥", "🌟", "🌟", "👩‍🎤", "👩‍🎤", "💃", "💃","🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍉", "🍉",] // (Level 21-25)
};

let currentLevel = 1;
let movesLeft;
let score = 0;
let firstCard, secondCard, lockBoard;
const MAX_MOVES = 20;

const gameBoard = document.getElementById("game-board");
const movesDisplay = document.getElementById("moves");
const levelDisplay = document.getElementById("level");
const scoreDisplay = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function startGame() {
    let levelCategory = Object.keys(categories).reverse().find(lvl => currentLevel >= lvl);
    let shuffledEmojis = [...categories[levelCategory]].sort(() => Math.random() - 0.5);
    
    gameBoard.innerHTML = "";
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    movesLeft = MAX_MOVES;
    movesDisplay.textContent = movesLeft;
    levelDisplay.textContent = currentLevel;

    shuffledEmojis.forEach(emoji => {
        const card = createCard(emoji);
        gameBoard.appendChild(card);
    });
}

function createCard(emoji) {
    const card = document.createElement("div");
    card.classList.add("card", "hidden");
    card.dataset.emoji = emoji;
    card.textContent = emoji; 

    card.addEventListener("click", () => {
        if (lockBoard || card === firstCard || !card.classList.contains("hidden")) return;

        card.style.color = "black";
        card.classList.remove("hidden");

        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            movesLeft--;
            movesDisplay.textContent = movesLeft;
            checkMatch();
        }
    });

    return card;
}

function checkMatch() {
    lockBoard = true;
    if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        score += 10; 
        scoreDisplay.textContent = score;
        resetCards();
    } else {
        setTimeout(() => {
            firstCard.style.color = "transparent";
            secondCard.style.color = "transparent";
            firstCard.classList.add("hidden");
            secondCard.classList.add("hidden");
            resetCards();
        }, 1000);
    }

    if (movesLeft === 0) {
        setTimeout(() => {
            alert("Game Over! You've run out of moves.");
            currentLevel = 1;
            score = 0;
            startGame();
        }, 500);
    } else if (document.querySelectorAll(".matched").length === Object.values(categories)[0].length) {
        setTimeout(() => {
            if (currentLevel < 25) {
                alert("Congratulations! Proceeding to next level.");
                currentLevel++;
                startGame();
            } else {
                alert("You have completed all levels!");
            }
        }, 500);
    }
}

function resetCards() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

restartBtn.addEventListener("click", () => {
    currentLevel = 1;
    score = 0;
    startGame();
});

startGame();
