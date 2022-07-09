function game(){

    let player_counter = 0;
    let computer_counter = 0;
    let player_input;

    for(let i = 0; i < 5; i++)
    {
        //do stuff
        play_round();
        won_tie_lost();

    }
}

function play_round(){
    player_choose_value();
    computer_choose_value();
}

function won_tie_lost(){
    //if tie -> "It's a tie!"
    //if rock scissor or scissor rock  && player's rock-> "Rock beats scissor, another win for mankind"
    //if paper scissor or scissor paper && player's scissor -> "Scissor beats paper, another win for mankind"
    //if rock and paper or paper rock && player's paper -> "Paper beats rock, another win for mankind"
    //if rock scissor or scissor rock  && computer's rock> "Rock beats scissor, mankind is doomed"
    //if paper scissor or scissor paper && computer's scissor -> "Scissor beats paper, mankind is doomed"
    //if rock and paper or paper rock && computer's paper -> "Paper beats rock, mankind is doomed"
}

function won_game_of_five(){
    if(player_counter == 5)
    {
        alert("Mankind dominates!");
    }
    else if(computer_counter == 5)
    {
        alert("Technology has won out, mankind is doomed!");
    }
}

function reset(){
    this.computer_counter = 0;
    this.player_counter = 0;
}

function player_choose_value(){
    //check which button has been clicked -> rock, paper or scissor
}

function computer_choose_value(){
    return Math.floor(Math.random()* (3 - 1 +1) + 1);//1 -> rock, 2 -> scissor, 3 -> paper
}