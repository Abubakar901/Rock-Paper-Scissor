let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const result = getResult(playerChoice, computerChoice);
  updateScore(result);
  displayResult(playerChoice, computerChoice, result);
}

function getResult(player, computer) {
  if (player === computer) return "tie";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function updateScore(result) {
  if (result === "win") playerScore++;
  if (result === "lose") computerScore++;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

function displayResult(player, computer, result) {
  const resultDiv = document.getElementById("result");
  const resultText =
    result === "tie"
      ? "It's a tie!"
      : result === "win"
      ? "You win!"
      : "You lose!";
  resultDiv.textContent = `You chose ${player}, computer chose ${computer}. ${resultText}`;
  resultDiv.classList.add("winner");
  setTimeout(() => resultDiv.classList.remove("winner"), 500);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("playerScore").textContent = "0";
  document.getElementById("computerScore").textContent = "0";
  document.getElementById("result").textContent = "Make your move!";
}
