let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result > p");
const Rock_div = document.getElementById("Rock");
const Paper_div = document.getElementById("Paper");
const Scissors_div = document.getElementById("Scissors");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber]
}

function win(userChoice, computerChoice) {
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = userChoice + " beats " + computerChoice + " You Win! "
}


function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = userChoice + " loses to " + computerChoice + " You Lost! "
}

function draw(userChoice, computerChoice) {
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = userChoice + " and " + computerChoice + " Makes Its a Draw! "

}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "RockScissors":
    case "PaperRock ":
    case "ScissorsPaper":
      win(userChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsPaper":
      lose(userChoice, computerChoice);
      break;
      case "RockRock":
      case "PaperPaper":
      case "ScissorScissors":
      draw(userChoice, computerChoice);
  }
}

function main() {
  Rock_div.addEventListener('click', function() {
    game("Rock");
  })

  Paper_div.addEventListener('click', function() {
    game("Paper");
  })

  Scissors_div.addEventListener('click', function() {
    game("Scissors");
  })
}

main();