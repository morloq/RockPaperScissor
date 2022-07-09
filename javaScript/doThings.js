//register button click and:
function player_choose_value(){
    //check which button has been clicked -> rock, paper or scissor
    document.getElementByClassName("rock").addEventListener("click", function(){
        this.player_input = 1;
    });
    document.getElementByClassName("scissor").addEventListener("click", function(){
        this.player_input = 2;
    });
    document.getElementByClassName("rock").addEventListener("click", function(){
        this.player_input = 3;
    });
}

//generate random value between 1 and 3 and return it
function computer_choose_value(){
    return Math.floor(Math.random()* (3 - 1 +1) + 1);//1 -> rock, 2 -> scissor, 3 -> paper
}

//register button click and:
function reset(){

    this.computer_counter = 0;
    this.player_counter = 0;
}

//check if tie or some kind of win, update counters and output field accordingly
function won_tie_lost(){
    //if tie -> "It's a tie!"
    if((player_input == 1 && computer_choose_value == 1) || (player_input == 2 && computer_choose_value == 2)  || (player_input == 3 && computer_choose_value == 3))
    {
        document.getElementByClassName("WinLossTie").textContent="It's a tie!";
    }
    //rock scissor, computer win
    if(player_input == 2 && computer_choose_value == 1)
    {
        document.getElementByClassName("WinLossTie").textContent="Rock beats scissor, win for computer";
        this.computer_counter++;
        document.getElementByClassName("ComputerCounter").textContent="Computer: ${computer_counter}";
    }
    //rock scissor, player win
    if(player_input == 1 && computer_choose_value == 2)
    {
        document.getElementByClassName("WinLossTie").textContent="Rock beats scissor, win for player";
        this.player_counter++;
        document.getElementByClassName("PlayerCounter").textContent="Player: ${player}";
    }
    //rock paper, comupter win
    if(player_input==1 && computer_choose_value==3)
    {
        document.getElementByClassName("WinLossTie").textContent="Paper beats rock, win for computer"
        this.computer_counter++;
        document.getElementByClassName("ComputerCounter").textContent="Computer: ${computer_counter}";
    }
    //rock paper, player win
    if(player_input==3 && computer_choose_value==1)
    {
        document.getElementByClassName("WinLossTie").textContent="Paper beats rock, win for player";
        this.player_counter++;
        document.getElementByClassName("PlayerCounter").textContent="Player: ${player}";
    }
    //paper scissor, computer win
    if(player_input==2 && computer_choose_value==3)
    {
        document.getElementByClassName("WinLossTie").textContent="Scissor beats paper, win for computer"
        this.computer_counter++;
        document.getElementByClassName("ComputerCounter").textContent="Computer: ${computer_counter}";
    }
    //paper scissor, player win
    {
        document.getElementByClassName("WinLossTie").textContent="Scissor beats paper, win for player";
        this.player_counter++;
        document.getElementByClassName("PlayerCounter").textContent="Player: ${player}";
    }
    
}
//put together functions to play a round:
function play_round(){
    player_choose_value();
    won_tie_lost();
}

function won_five_rounds(){
    if(player_counter == 5)
    {
        document.getElementByClassName("WinLossTie").textContent="Mankind dominates!";
    }
    else if(computer_counter == 5)
    {
        document.getElementByClassName("WinLossTie").textContent="Mankind sucks!";
    }
}

function game(){//put together game logic:

    let player_counter = 0;
    let computer_counter = 0;
    let player_input = 0;

    while(player_counter!=5 && computer_counter!=5)
    {
        play_round();
    }
    won_five_rounds();
}