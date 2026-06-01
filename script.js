

//let name = "John";
//let cost = 5 + 6 + 9;
//let tax = cost*0.1;
//let totalCost = tax + cost;
//console.log(`the result is : $${totalCost}`);

let computerMove = Math.random();
let computerPick = "";

function rock(){
    if(computerMove >= 0 && computerMove < 1/3){
    computerPick  = "rock";
}
    else if(computerMove >= 1/3 && computerMove < 2/3){
    computerPick = "paper"
}
    else if(computerMove >= 2/3 && computerMove < 1){
    computerPick =  "scissor"
}
    if(computerPick === "rock"){
        alert(`Computer Picked ${computerPick} its a Tie`);
    }
    else if(computerPick === "paper"){
        alert(`Computer Picked ${computerPick} You Lose`)

    }
    else if(computerPick === "scissor"){
        alert(`Computer Picked ${computerPick} You Win`)
    }

}
function paper(){
     if(computerMove >= 0 && computerMove < 1/3){
    computerPick  = "rock"
}
    else if(computerMove >= 1/3 && computerMove < 2/3){
    computerPick = "paper"
}
    else if(computerMove >= 2/3 && computerMove < 1){
    computerPick = "scissor"
}
    if(computerPick === "rock"){
        alert(`Computer Picked ${computerPick} You win`);
    }
    else if(computerPick === "paper"){
        alert(`Computer Picked ${computerPick} Its a Tie`)

    }
    else if(computerPick === "scissor"){
        alert(`Computer Picked ${computerPick} You Lose`)
    }

}

function scissor(){
    if(computerMove >= 0 && computerMove < 1/3){
    computerPick  = "rock"
}
    else if(computerMove >= 1/3 && computerMove < 2/3){
    computerPick =  "paper"
}
    else if(computerMove >= 2/3 && computerMove < 1){
    computerPick =  "scissor"
}
if(computerPick === "rock"){
        alert(`Computer Picked ${computerPick} You Lose`);
    }
    else if(computerPick === "paper"){
        alert(`Computer Picked ${computerPick} You Win`)

    }
    else if(computerPick === "scissor"){
        alert(`Computer Picked ${computerPick} Its a Tie`)
    }
}



