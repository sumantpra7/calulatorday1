let display= document.getElementById("display");
function appendValue(value){
    display.value += value;
}
function clearDisplay(){
    display.value ="";
}


function deleteLast(){
    display.value = display.value.slice(0,-1);
}
function square(){
    display.value=Math.pow(parseFloat(display.value),2);
}
function squareRoot(){
    display.value=Math.sqrt(parseFloat(display.value))
}
function calculateResult(){

    try{
        display.value= eval(display.value);
    } catch {
        display.value="Error";
    }
}