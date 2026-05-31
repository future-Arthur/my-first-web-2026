let buttons = document.querySelector(".keys") ;
let display = document.querySelector(".display");

function appendToDisplay(input){

    display.value += input;

}
function clearDisplay(){
    display.value = "";
}

function appendOnOff(){
display.style.backgroundColor = "black";

}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}


