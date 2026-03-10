let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.random();

  if (random <= 0.33) return "rock";
  if (random <= 0.66) return "paper";
  return "scissors";
}

function getHumanChoice() {
  return prompt("Please choose Rock, Paper or Scissors")?.trim().toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (!humanChoice || !["rock", "paper", "scissors"].includes(humanChoice)) {
    console.log("Invalid choice. Please enter rock, paper, or scissors.");
    return;
  }

  if (humanChoice === computerChoice) {
    console.log("Tie! Play again.");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
    console.log(
      `You win this round! You: ${humanScore} | Computer: ${computerScore}`,
    );
  } else {
    computerScore += 1;
    console.log(
      `You lose this round! You: ${humanScore} | Computer: ${computerScore}`,
    );
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Human:", humanSelection);
console.log("Computer:", computerSelection);
playRound(humanSelection, computerSelection);
