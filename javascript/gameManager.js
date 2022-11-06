
const GameManager = (playerChoice) => {
    //Gets player choice based on what they click
    this.playerChoice = playerChoice;
    let computerChoice;
    //Get random number for computer choice
      let randomNum = Math.floor(Math.random() * 3); 
        if (randomNum === 0){
            computerChoice = 'rock';
        } else if (randomNum === 1){
            computerChoice = 'paper';
        } else if (randomNum === 2){
            computerChoice = 'scissors'
        };
        
        //Get game results
    //Tie game
    if(playerChoice === computerChoice){
        alert("Tie Game! Computron wins since you are inferior!");

    //Player picks rock outcomes
    } else if(playerChoice === 'rock' && computerChoice === 'paper'){
        alert("You picked rock. Computron picked paper. You lose!");
    } else if(playerChoice === 'rock' && computerChoice === 'scissors'){
        alert("You picked rock. Computron picked scissors. You win!")
    }
    //Player picks paper outcomes
    else if(playerChoice === 'paper' && computerChoice === 'rock'){
        alert("You picked paper. Computron picked rock. You win!");
    } else if(playerChoice === 'paper' && computerChoice === 'scissors'){
        alert("You picked paper. Computron picked scissors. You lose!")
    }
    //Player picks scissors outcomes
    else if(playerChoice === 'scissors' && computerChoice === 'paper'){
        alert("You picked scissors. Computron picked paper. You win!");
    } else if(playerChoice === 'scissors' && computerChoice === 'rock'){
        alert("You picked scissors. Computron picked rock. You lose!")
    }
};

    