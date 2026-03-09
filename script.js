let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = Math.random()
    
    if (computerChoice <= 0.33) {
        computerChoice = "Rock"
    } else if (computerChoice <= 0.66){
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    
    return computerChoice 
}

console.log(getComputerChoice())


function getHumanChoice () {
let humanChoice = prompt("Please choose Rock, Paper or Scissors")
return humanChoice
}

console.log(getHumanChoice())
