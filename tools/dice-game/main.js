const playerOneDice = document.querySelector('.img1');
const playerTwoDice = document.querySelector('.img2');
const winnerText = document.querySelector('h1');

const playGame = {
    dice: ["images/dice1.webp","images/dice2.webp", "images/dice3.webp", "images/dice4.webp", "images/dice5.webp", "images/dice6.webp"],
    rollDice() {
        return Math.floor(Math.random()*6);
    },
    play() {
        playerOneDice.src = this.dice[this.rollDice()];
        playerTwoDice.src = this.dice[this.rollDice()];
        if (playerOneDice.src > playerTwoDice.src) {
            winnerText.textContent = "🐻 Player 1 wins!";
        } else if (playerOneDice.src === playerTwoDice.src) {
            winnerText.textContent = "🐼 It's a Tie! 🐼";
        } else {
            winnerText.textContent = "Player 2 wins! 🦝";
        }
    }

}

