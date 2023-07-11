function getComputerChoice(){
    let comChoice = Math.floor(Math.random()*3)
    const choiceArr = ['rock','paper','scissors']
    if(comChoice == 0)
        return choiceArr[comChoice];

    if(comChoice == 1)
        return choiceArr[comChoice];

    if(comChoice == 2)
        return choiceArr[comChoice];
}

// Taking Computer Input
const computerSelection = getComputerChoice()


// Taking Player Input
const playerSelection = prompt("Enter your choice")
playerSelection.toLowerCase();


// Rock Paper Scissors game
function playRound(computerSelection,playerSelection){
    if(computerSelection == playerSelection)
        console.log(`It's a TIE.`)


        // We are comparing Player Selection with Computer Selection in the below cases.
        //  When player selection is rock, there will be only two selections to compare with compare.
        //  Because the third selection is same as player selection and it will be checked in above case.
    else if(playerSelection == "rock"){
        if(computerSelection == "paper")
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)

        else
            console.log("You Win!")
    }

    else if(playerSelection == "paper"){
        if(computerSelection == "scissors")
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)

        else
            console.log("You Win!")
    }

    else if(playerSelection == "scissors"){
        if(computerSelection == "rock")
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)

        else
            console.log("You Win!")
    }


    else    
        console.log("Invalid Player Input")

}

console.log(`Computer Choice is : ${computerSelection} and your selction is ${playerSelection}`)
playRound(computerSelection,playerSelection)


