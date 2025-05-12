// Script
//step 1
//console.log("hello World")

//Step 2
//returns random "rock" "paper" "scissors"
//generate number between 0 and 1
//multiply times 100 to get a number between 0 and 100 and round down
//remainder of division by 3 is either 0 1 or 2
function getComputerChoice(){
    let num = Math.floor(Math.random()*100)
    switch (num % 3) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }

}
//Step 3
//Prompt human choice
function getHumanChoice() {
    let response = null
    response = prompt("Rock Paper or Scissors?")
    return response
}
//step 4 declare player score variables
let humanScore = 0
let computerScore = 0

//step 5 logic to play single round
const computerSelection = getComputerChoice()
const humanSelection = getHumanChoice().toLowerCase()

function playRound(humanChoice, computerChoice){
    console.log(humanChoice+ " vs. "+ computerChoice)
    //round outcome
    switch ( true ){
        //winning cases
        case (humanChoice == "rock" && computerChoice == "scissors"):
        case (humanChoice == "paper" && computerChoice == "rock"):
        case (humanChoice == "scissors" && computerChoice == "paper"):
            humanScore++
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            break
        //losing cases
        case (humanChoice == "rock" && computerChoice == "paper"):
        case (humanChoice == "paper" && computerChoice == "scissors"):
        case (humanChoice == "scissors" && computerChoice == "rock"):
            computerScore++
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            break
        //ties
        case (humanChoice == "rock" && computerChoice == "rock"):
        case (humanChoice == "paper" && computerChoice == "paper"):
        case (humanChoice == "scissors" && computerChoice == "scissors"):
            console.log("Tie!")
    }
}

console.log(playRound("rock", "paper"))
console.log(playRound("scissors", "rock"))
console.log(playRound("paper", "rock"))
// console.log(getComputerChoice())
// console.log(getHumanChoice())