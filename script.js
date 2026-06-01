

//let name = "John";
//let cost = 5 + 6 + 9;
//let tax = cost*0.1;
//let totalCost = tax + cost;
//console.log(`the result is : $${totalCost}`);

/*let hour  = 22;
let name = "John"

if(hour >= 6 && hour < 13){
    alert("Good Morning " + name)
}else if (hour >= 7 && hour < 17){
    console.log("Good Afternoon " + name)
}else(alert("Good Evening " + name)) */


let random = Math.random();
let result =  "";

function heads(){
    if(random < 0.5){
    result = "Heads" 
} else(result = "Tails")

if(result === "Heads"){
    alert(result  + " You Guess Right!")
}else(alert(result +" You Guess Wrong!"))

}
function tails(){
    if(random < 0.5){
    result = "Heads" 
} else(result = "Tails")

if(result === "Tails"){
    alert(result + " You Guess Right!")
}else(alert(result + " You Guess Wrong!"))

}
