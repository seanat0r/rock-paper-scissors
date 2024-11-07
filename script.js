function userChoice() {
  const rock = document.getElementById('rock');
  const paper = document.getElementById('paper');
  const scissors = document.getElementById('scissors');

  //getting the user input for the game and get computer input
  rock.addEventListener('click', () => {
    handleUserChoice('rock', computerChoice());
  });
  paper.addEventListener('click', () => {
    handleUserChoice('paper', computerChoice());
  });
  scissors.addEventListener('click', () => {
    handleUserChoice('scissors', computerChoice());
  });

  function computerChoice() {
    //randomly creates an output for the computer
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
      return 'rock';
    } else if (choice === 1) {
      return 'paper';
    } else if (choice === 2) {
      return 'scissors';
    } else {
      console.log('something went wrong ...');
    }
  }

  function handleUserChoice(playerChoice, nonPlayerChoice) {
    console.log(playerChoice, nonPlayerChoice);

    // Next two variable are for the next function
    let computerChoiceMessage = document.getElementById(
      'computerChoiceDisplay'
    );
    let resultMessage = document.getElementById('resultMessage');

    //checks who win/lose or is a tie
    if (playerChoice === nonPlayerChoice) {
      tie(nonPlayerChoice);
    } else if (
      (playerChoice === 'rock' && nonPlayerChoice === 'scissors') ||
      (playerChoice === 'paper' && nonPlayerChoice === 'rock') ||
      (playerChoice === 'scissors' && nonPlayerChoice === 'paper')
    ) {
      win(nonPlayerChoice);
    } else {
      lose(nonPlayerChoice);
    }

    //displays all the text, that need to change
    function tie(nonPlayerChoice) {
      console.log('tie');
      const result = "It's a tie";
      const computerMessage = `The Computer selected: ${nonPlayerChoice}<br>You chose: ${playerChoice}`;
      const color = '#FFF'
      changeResultMessage(result);
      displayComputerChoice(computerMessage);
      changeBackgroundColor(color);
    }

    function win(nonPlayerChoice) {
      console.log('win');
      const result = 'You won!';
      const computerMessage = `The Computer selected: ${nonPlayerChoice}<br>You chose: ${playerChoice}`;
      const color = '#00ff00';
      changeResultMessage(result);
      displayComputerChoice(computerMessage);
      changeBackgroundColor(color);
    }

    function lose(nonPlayerChoice) {
      console.log('lose');
      const result = 'You lost!';
      const computerMessage = `The Computer selected: ${nonPlayerChoice}<br>You chose: ${playerChoice}`;
      const color = '#FF0000';
      changeResultMessage(result);
      displayComputerChoice(computerMessage);
      changeBackgroundColor(color);
    }

    function changeResultMessage(text) {
      resultMessage.innerHTML = text;
    }

    function displayComputerChoice(text) {
      computerChoiceMessage.innerHTML = text;
    }

    function changeBackgroundColor(color) {
    document.getElementsByTagName('main')[0].style.backgroundColor = color;
    }
  }
}
userChoice();
