const display = document.getElementById('display');

function showdisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "error";
    }
    
}

function removeDigit(){
    display.value = display.value.toString().slice(0,-1);
}