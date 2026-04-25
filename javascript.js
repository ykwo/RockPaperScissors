function getComputerChoice() {
  const randomInt = Math.floor(Math.random() * 3);
  switch (randomInt) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      break;
  }
}

function getHumanChoice() {
  const choice = prompt("your choice?");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  console.log("you: " + humanChoice);
  console.log(computerChoice);

  let humanSelection = humanChoice.toLowerCase();

  let result = "t";

  if (humanSelection == "paper") {
    if (computerChoice == "scissors") {
      result = "l,Scissors,Paper";
    } else if (computerChoice == "rock") {
      result = "w,Paper,Rock";
    }
  } else if (humanSelection == "rock") {
    if (computerChoice == "scissors") {
      result = "w,Rock,Scissors";
    } else if (computerChoice == "paper") {
      result = "l,Paper,Rock";
    }
  } else if (humanSelection == "scissors") {
    if (computerChoice == "paper") {
      result = "w,Scissors,Paper";
    } else if (computerChoice == "rock") {
      result = "l,Rock,Scissors";
    }
  }

  let msg = "default";
  const results = result.split(",");

  if (results[0] == "t") {
    msg = "You tied.";
  } else if (results[0] == "w") {
    msg = `You win! ${results[1]} beats ${results[2]}`;
  } else {
    msg = `You lose! ${results[1]} beats ${results[2]}`;
  }

  console.log(msg);

  if (results[0] == "w") {
    humanScore++;
  } else if (results[0] == "l") {
    computerScore++;
  }

  console.log(
    "your score: " + humanScore,
    "VS Computer score: " + computerScore,
  );
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let index = 0; index < 5; index++) {
    console.log(`Round ${index + 1}`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
}

playGame();
