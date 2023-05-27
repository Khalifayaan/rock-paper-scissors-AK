// Good Luck! You got this 💪🏾
// Write your code here.

function playGame(player1, player2) {
    if (player1 === player2) {
        return "tie";
    }

    if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissors" && player2 === "paper")
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

console.log(playGame("rock", "scissors"))
console.log(playGame("paper", "rock"))
console.log(playGame("scissors", "paper"))
console.log(playGame("rock", "paper"))
console.log(playGame("paper", "scissors"))
console.log(playGame("scissors", "rock"))
console.log(playGame("rock", "rock"))
