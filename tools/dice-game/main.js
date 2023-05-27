const playerOneDice = document.querySelector('.img1');
const playerTwoDice = document.querySelector('.img2');
const winnerText = document.querySelector('h1');

const playGame = {
    dice: ["images/dice1.png","images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"],
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

