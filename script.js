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
let round = 1
//things to unhide : scoreboard, round, match
const scoreboard = document.querySelector(".scoreBoard")
const playerScore = document.querySelector("#playerScore")
const computerScoreNode = document.querySelector("#computerScore")
const roundDisplay = document.querySelector("#round") 
const match = document.querySelector("#match")
const buttonContainer = document.querySelector(".container")
const instruction = document.querySelector(".instruction")
const roundOutcome = document.querySelector("#round-outcome")
const dialog = document.querySelector("#game-outcome")
function displayDialogue() {
    //showing winner
    const buttons = buttonContainer.querySelectorAll("button")
    buttons.forEach( (button) => {
        button.setAttribute("disabled", true)
    })
    const announcement = document.querySelector("#win")
    if (humanScore === 5) {
        announcement.textContent = "YOU WIN!"
    } else if (computerScore === 5) {
        announcement.textContent = "YOU LOSE"
    }
    dialog.setAttribute("open", true);
}
const playAgain = document.querySelector("#end-button")
playAgain.addEventListener("click", (e) => {
    location.reload()
});
//Step 6 play 5 rounds
function playGame() {

    // Idea right now
    toggleVisibility(scoreboard)
    toggleVisibility(buttonContainer)
    toggleVisibility(roundDisplay)
    toggleVisibility(instruction)
    humanScore = 0
    round = 1
    computerScore = 0
    //disabled play button so no restarts
    this.disabled = true
    /*
    while either score less than 5 game loop
    hit play game : unhide selections and scoreboards
    start round
    dont show computer selection until human selection
    how to wait for human response in the round... hm?
    clear selection
    //oh the ebuttons run the play round function i see...  
    */
    
    // for (let i = 0; i < rounds; i++) {
    //     const computerSelection = getComputerChoice()
    //     const humanSelection = getHumanChoice().toLowerCase()
    //     playRound(humanSelection, computerSelection)
    //     console.log(`Round ${i+1} - You:${humanScore} CPU: ${computerScore}`)
    // }
}
//step 5 logic to play single round
function playRound(humanChoice, computerChoice){
    // console.log(humanChoice+ " vs. "+ computerChoice)
    //display matchup
    if (roundDisplay.classList.contains("hide")) toggleVisibility(roundDisplay);
    roundDisplay.textContent = `Round: ${round}`
    if (match.classList.contains("hide")) toggleVisibility(match);
    if (roundOutcome.classList.contains("hide")) toggleVisibility(roundOutcome);
    match.textContent = humanChoice+ " vs. "+ computerChoice;
    //round outcome
    switch ( true ){
        //winning cases
        case (humanChoice == "rock" && computerChoice == "scissors"):
        case (humanChoice == "paper" && computerChoice == "rock"):
        case (humanChoice == "scissors" && computerChoice == "paper"):
            humanScore++
            // console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            roundOutcome.textContent = `You win! ${humanChoice} beats ${computerChoice}.`
            playerScore.textContent = humanScore
            break
        //losing cases
        case (humanChoice == "rock" && computerChoice == "paper"):
        case (humanChoice == "paper" && computerChoice == "scissors"):
        case (humanChoice == "scissors" && computerChoice == "rock"):
            computerScore++
            // console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            roundOutcome.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`
            computerScoreNode.textContent = computerScore
            break
        //ties
        case (humanChoice == "rock" && computerChoice == "rock"):
        case (humanChoice == "paper" && computerChoice == "paper"):
        case (humanChoice == "scissors" && computerChoice == "scissors"):
            roundOutcome.textContent = "Tie!"
            // console.log("Tie!")
    }
    round++;
    //check for wins
    if (humanScore === 5 || computerScore === 5) {
        //playerwin
        displayDialogue()
    }
}

buttonContainer.addEventListener("click", (e) => {
    switch (e.target.id) {
        case "rock":
            playRound("rock", getComputerChoice())
            break;
        case "paper":
            playRound("paper", getComputerChoice())
            break;
        case "scissors":
            playRound("scissors", getComputerChoice())
            break;
    }
})

function toggleVisibility(element){
    // const node = document.querySelector("div")
    // node.classList.toggle("hide");
    element.classList.toggle("hide")
}

const startbutton = document.getElementById("gamebutton")
startbutton.addEventListener('click', playGame)

// console.log(playRound("rock", "paper"))
// console.log(playRound("scissors", "rock"))
// console.log(playRound("paper", "rock"))
