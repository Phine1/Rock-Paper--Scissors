const getUserChoice = userInput => { 
    userInput = userInput.toLowerCase();
    if (userInput==='rock') {
      return userInput;
    } else if (userInput==='paper'){
      return userInput;
    } else if (userInput==='bomb'){
    return userInput;
    } else if (userInput==='scissors'){
      return userInput;
    }
    else {console.log('Error, please check your input. Enter either \'rock\',\'paper\', or \'scissors\'')}
    }
    function getComputerChoice() {
     const randomNumber = Math.floor(Math.random()* 3)
        switch (randomNumber) {
          case 0:
          return 'rock';
          case 1:
          return'paper';
          case 2:
          return 'scissors';
        }
      }
      const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
          return 'Its a tie';
        } 
        if (userChoice==='rock') {
          if (computerChoice === 'paper') {
            return'Ooops! Computer Won';
          } else {
            return'Congratulations! You Won';
          }
        }
        if (userChoice === 'paper') {
          if (computerChoice ==='scissors') {
            return'The computer Won';
          } else {
            return 'You Won!';
          }
        }
        if (userChoice === 'scissors') {
          if (computerChoice ==='rock') {
            return 'The computer Won'
          } else {
            return 'Yep! You Won'
          }
        }
        if (userChoice === 'bomb') {
          if (computerChoice=== 'rock' || 'scissors' || 'paper') {
            return 'Yeah! Thats the cheat code. You got it. You used a cheat code. Thats unfair!';
          }
        }
      };
        const playGame = () => {
          const userChoice = getUserChoice('paper');
          const computerChoice = getComputerChoice();
        console.log('You threw: '+ userChoice);
        console.log('The computer threw:'+ computerChoice);
       console.log(determineWinner(userChoice, computerChoice));
        }
       playGame();
      
    
    
    
    