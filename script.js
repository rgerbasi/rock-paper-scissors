// Script
console.log("hello World")

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
console.log(getComputerChoice())