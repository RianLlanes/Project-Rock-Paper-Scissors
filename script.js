// Declare playerScore and computerScore variables outside the function
let playerScore = 0;
let computerScore = 0;

const containerChoices = document.querySelector(".gameLayout")

function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors'] // Assign the computer's selection
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        return "It is a tie! Both chose " + playerSelection;
    } else if ((playerSelection == "rock" && computerSelection == "scissors")
        || (playerSelection == "scissors"  && computerSelection == "paper")
        || (playerSelection == "paper" && computerSelection == "rock")
        ){
        return "You Won! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You Lost! " + computerSelection + " beats " + playerSelection;
    }
} 

// function playGame(){

//         let computerSelection = getComputerChoice(); // Assign the computer's selection
        
//         console.log("Player's choice : " + playerSelection)
//         console.log("Computer's choice : " + computerSelection)

//         let result = playRound(playerSelection, computerSelection);
//         console.log(result)

//         if (result.startsWith("You Won!")) {
//             playerScore++;
//         } else if (result.startsWith("You Lost!")) {
//             computerScore++;
//         }
    

//     if (playerScore > computerScore){
//         console.log("You Won! Congratulations!")
//     } else if (playerScore < computerScore){
//         console.log("You Lost! Better Luck Next Time!")
//     } else {
//         console.log("We have a tie! No one won :<")
//     }

// }

function showGameLayout(){
    
    // Scores

    let playerSelection = "";
    let computerSelection = getComputerChoice();
    
    const playGameButton = document.querySelector(".playButton")
    playGameButton.remove();

    const rock =  document.createElement("button")
    const paper =  document.createElement("button")
    const scissors =  document.createElement("button")
    
    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";

    rock.classList.add("choiceButton"); // Add class name to the rock button
    paper.classList.add("choiceButton"); // Add class name to the paper button
    scissors.classList.add("choiceButton"); // Add class name to the scissors button

    const playerScoreElement = document.createElement("div");
    playerScoreElement.textContent = "Player Score: " + playerScore;
    playerScoreElement.classList.add("playerScore"); // Add class name to the scissors button
    containerChoices.appendChild(playerScoreElement);

    const computerScoreElement = document.createElement("div");
    computerScoreElement.textContent = "Computer Score: " + computerScore;
    computerScoreElement.classList.add("computerScore"); // Add class name to the scissors button
    containerChoices.appendChild(computerScoreElement);

    const choiceBattle = document.createElement("div")
    choiceBattle.textContent = playerSelection + " VS " + computerSelection;
    containerChoices.appendChild(choiceBattle);

    const battleResult = document.createElement("div");
    const victory = document.createElement("div");

    
    containerChoices.appendChild(battleResult)
    
    containerChoices.appendChild(rock)
    containerChoices.appendChild(paper)
    containerChoices.appendChild(scissors)

    const buttons = [rock, paper, scissors];

    rock.addEventListener("click", function() {
        handleButtonClick("Rock", playerSelection, computerSelection, choiceBattle, victory, buttons);
    });

    scissors.addEventListener("click", function() {
        handleButtonClick("Scissors", playerSelection, computerSelection, choiceBattle, victory, buttons);
    });

    paper.addEventListener("click", function() {
        handleButtonClick("Paper", playerSelection, computerSelection, choiceBattle, victory, buttons);
    });

    
}


function handleButtonClick(choice, playerSelection, computerSelection, choiceBattle, victory, buttons) {
    playerSelection = choice;
    computerSelection = getComputerChoice(); // Update computerSelection
    choiceBattle.textContent = playerSelection + " VS " + computerSelection;
    
    // Call playRound with playerSelection and computerSelection
    let resultText = playRound(playerSelection, computerSelection);
    let resultElement = document.createElement("div");
    resultElement.textContent = resultText;
    choiceBattle.appendChild(resultElement);

    if (resultText.startsWith("You Won!")) {
        playerScore++;
    } else if (resultText.startsWith("You Lost!")) {
        computerScore++;
    }
    updateScores(playerScore, computerScore);

    if (playerScore == 5){
        victory.textContent = "Congratulations! You Won!";
        containerChoices.appendChild(victory); // Append the victory message to the container
        disableButtons(buttons);
    } else if (computerScore == 5){
        victory.textContent = "Sorry! You Lost!";
        containerChoices.appendChild(victory); // Append the victory message to the container
        disableButtons(buttons);
    }
}

function disableButtons(buttons) {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function updateScores(playerScore, computerScore){
    const playerScoreElement = document.querySelector(".playerScore");
    const computerScoreElement = document.querySelector(".computerScore");

    playerScoreElement.textContent = "Player Score: " + playerScore;
    computerScoreElement.textContent = "Computer Score: " + computerScore;
}



// rock.addEventListener("click", function() {
//     playerSelection = "Rock"; // Store the value "Rock" when the rock button is clicked
//     choiceBattle.textContent = playerSelection + " VS " + computerSelection; // Update the text content of choiceBattle
//     console.log("Player's selection: " + playerSelection);
// });

// scissors.addEventListener("click", function() {
//     playerSelection = "Scissors";
//     choiceBattle.textContent = playerSelection + " VS " + computerSelection;
//     console.log("Player's selection: " + playerSelection);
// });

// paper.addEventListener("click", function() {
//     playerSelection = "Paper";
//     choiceBattle.textContent = playerSelection + " VS " + computerSelection;
//     console.log("Player's selection: " + playerSelection);
// });


// {/* <script>
// const unorderedList = document.querySelector("ul");
// const input = document.querySelector("input")
// const addButton = document.querySelector("button")

// function buttonFunction(){
//   const myItem = input.value;
//   input.value = '';
  
//   const listItem = document.createElement("li");
//   const listText = document.createElement("span");
//   const deleteButton = document.createElement("button");

//   listItem.appendChild(listText);
//   listItem.appendChild(deleteButton);

//   listText.textContent = myItem;
//   deleteButton.textContent = 'Delete';

//   unorderedList.appendChild(listItem);

//   deleteButton.addEventListener('click', () => {
//     unorderedList.removeChild(listItem);
//   });

//   input.focus();
// }
// </script> */}


// OLD FUNCTION
// function playGame(){
//     let playerScore = 0;
//     let computerScore = 0;

//     for(let round = 1; round <= 1; round++){
//         console.log("Round " + round + "!")

//         let playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):"); // Give's a prompt for user to type in his choice
//         let computerSelection = getComputerChoice(); // Assign the computer's selection

//         console.log("Player's choice : " + playerSelection)
//         console.log("Computer's choice : " + computerSelection)

//         let result = playRound(playerSelection, computerSelection);
//         console.log(result)

//         if (result.startsWith("You Won!")) {
//             playerScore++;
//         } else if (result.startsWith("You Lost!")) {
//             computerScore++;
// }
//     }

//     console.log("Game Over!");
//     console.log("Player Score: " + playerScore);
//     console.log("Computer Score: " + computerScore);

//     if (playerScore > computerScore){
//         console.log("You Won! Congratulations!")
//     } else if (playerScore < computerScore){
//         console.log("You Lost! Better Luck Next Time!")
//     } else {
//         console.log("We have a tie! No one won :<")
//     }

// }

    // rock.addEventListener("click", function() {
    //     playerSelection = "Rock";
    //     choiceBattle.textContent = playerSelection + " VS " + computerSelection;
    //     console.log("Player's selection: " + playerSelection);
    
    //     // Call playRound with playerSelection and computerSelection
    //     const result = playRound(playerSelection, computerSelection);
    //     battleResult.textContent = result;
    //     console.log(result);
    //     playGame();
    // });
    
    // scissors.addEventListener("click", function() {
    //     playerSelection = "Scissors";
    //     choiceBattle.textContent = playerSelection + " VS " + computerSelection;
    //     console.log("Player's selection: " + playerSelection);
    
    //     // Call playRound with playerSelection and computerSelection
    //     const result = playRound(playerSelection, computerSelection);
    //     battleResult.textContent = result;
    //     console.log(result);
    // });
    
    // paper.addEventListener("click", function() {
    //     playerSelection = "Paper";
    //     choiceBattle.textContent = playerSelection + " VS " + computerSelection;
    //     console.log("Player's selection: " + playerSelection);
    
    //     // Call playRound with playerSelection and computerSelection
    //     const result = playRound(playerSelection, computerSelection);
    //     battleResult.textContent = result;

    // });