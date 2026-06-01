

//let name = "John";
//let cost = 5 + 6 + 9;
//let tax = cost*0.1;
//let totalCost = tax + cost;
//console.log(`the result is : $${totalCost}`);

let computerMove = Math.random();
let computerPick = "";
let result = "";

function rock(){
        if(computerMove >= 0 && computerMove < 1/3){
    computerPick  = "Rock";
}
    else if(computerMove >= 1/3 && computerMove < 2/3){
    computerPick = "Paper"
}
    else if(computerMove >= 2/3 && computerMove < 1){
    computerPick =  "Scissor"
}
        if(computerPick === "Rock"){
            result = "Tie";
        alert(`Computer Picked ${computerPick} its a ${result}`);
    }
    else if(computerPick === "Paper"){
        result = "Lose";
        alert(`Computer Picked ${computerPick} You ${result}`)

    }
    else if(computerPick === "Scissor"){
        result = "Win";
        alert(`Computer Picked ${computerPick} You ${result}`)
    }

}
function paper(){
        if(computerMove >= 0 && computerMove < 1/3){
    computerPick  = "Rock"
}
    else if(computerMove >= 1/3 && computerMove < 2/3){
    computerPick = "Paper"
}
    else if(computerMove >= 2/3 && computerMove < 1){
    computerPick = "Scissor"
}
        if(computerPick === "Rock"){
            result = "win"
            alert(`Computer Picked ${computerPick} You ${result}`);
    }
    else if(computerPick === "Paper"){
            result = "Tie"
            alert(`Computer Picked ${computerPick} Its a ${result}`)

    }
    else if(computerPick === "Scissor"){
            result = "Lose"
            alert(`Computer Picked ${computerPick} You ${result}`)
    }

}

function scissor(){
        if(computerMove >= 0 && computerMove < 1/3){
    computerPick  = "Rock"
}
    else if(computerMove >= 1/3 && computerMove < 2/3){
    computerPick =  "Paper"
}
    else if(computerMove >= 2/3 && computerMove < 1){
    computerPick =  "Scissor"
}
        if(computerPick === "Rock"){
            result = "Lose"
        alert(`Computer Picked ${computerPick} You ${result}`);
    }
    else if(computerPick === "Paper"){
        result = "win"
        alert(`Computer Picked ${computerPick} You ${result}`)

    }
    else if(computerPick === "Scissor"){
        result = "Tie"
        alert(`Computer Picked ${computerPick} Its a ${result}`)
    }
}



