let player_counter = 0;
let computer_counter = 0;

let playerValue = 0;

const btnRock = document.querySelector('.rock');
const btnScissor = document.querySelector('.scissor');
const btnPaper = document.querySelector('.paper');
const btnReset = document.querySelector('.btnreset');
let WinLossTie = document.querySelector('.WinLossTie');
let PlayerCount = document.querySelector('.PlayerCounter');
let ComputerCount = document.querySelector('.ComputerCounter');

//register button click and:
function player_choose_value(){
    //check which button has been clicked -> rock 1, scissor 2 or paper 3
    return new Promise(resolve => {
        btnRock.onclick = () => resolve(1)
        btnScissor.onclick = () => resolve(2)
        btnPaper.onclick = () => resolve(3)
    });
    btnRock.addEventListener("click", () =>{
        playerValue = 1;
    });

    btnScissor.addEventListener("click", () =>{
        playerValue = 2;
    });
    
    btnPaper.addEventListener("click", () =>{
        playerValue = 3;
    });
}

//generate random value between 1 and 3 and return it
function computer_choose_value(){
    return Math.floor(Math.random()* (3 - 1 +1) + 1);//1 -> rock, 2 -> scissor, 3 -> paper
}

//check if tie or some kind of win, update counters and output field accordingly
function won_tie_lost(valueComputer, valuePlayer){
    //if tie -> "It's a tie!"
    if((valuePlayer == 1 && valueComputer == 1) || (valuePlayer == 2 && valueComputer == 2)  || (valuePlayer == 3 && valueComputer == 3))
    {
        WinLossTie.textContent="It's a tie!";
    }
    //rock scissor, computer win
    if(valuePlayer == 2 && valueComputer == 1)
    {
        WinLossTie.textContent="Rock beats scissor, win for computer";
        computer_counter++;
        ComputerCount.textContent = "Computer: " + computer_counter;
    }
    //rock scissor, player win
    if(valuePlayer == 1 && valueComputer == 2)
    {
        WinLossTie.textContent="Rock beats scissor, win for player";
        player_counter++;
        PlayerCount.textContent = "Player: " + player_counter;
    }
    //rock paper, comupter win
    if(valuePlayer==1 && valueComputer==3)
    {
        WinLossTie.textContent="Paper beats rock, win for computer";
        computer_counter++;
        ComputerCount.textContent = "Computer: " + computer_counter;
    }
    //rock paper, player win
    if(valuePlayer==3 && valueComputer==1)
    {
        WinLossTie.textContent="Paper beats rock, win for player";
        player_counter++;
        PlayerCount.textContent = "Player: " + player_counter;
    }
    //paper scissor, computer win
    if(valuePlayer==3 && valueComputer==2)
    {
        WinLossTietextContent="Scissor beats paper, win for computer";
        computer_counter++;
        ComputerCount.textContent ="Computer: " + computer_counter;
    }
    //paper scissor, player win
    if(valuePlayer==2 && valueComputer==3)
    {
        WinLossTie.textContent="Scissor beats paper, win for player";
        player_counter++;
        PlayerCount.textContent = "Player: " + player_counter;
    }
    
}
//put together functions to play a round:
async function play_round(){
    let computerValue = computer_choose_value();
    playerValue = await player_choose_value();
    console.log(playerValue);
    won_tie_lost(computerValue, playerValue);
}

async function main() {
    while (player_counter != 5 && computer_counter != 5) { // Keep repeating the game
      await play_round()

      if(player_counter == 5)
      {
        WinLossTie.textContent="Mankind dominates!";
        break;
      }
      else if(computer_counter == 5)
      {
        WinLossTie.textContent="Mankind sucks!";
        break;
      }
    }
    reset();
  }
  main();

//register button click and:
function reset(){
    btnReset.addEventListener("click", () =>{
        computer_counter = 0;
        player_counter = 0;
        playerValue = 0;
        PlayerCount.textContent = "Player: 0";
        ComputerCount.textContent = "Computer: 0";
        WinLossTie.textContent="Play again!";
        main();
    });
}