const display= document.getElementById("display");

function printa(input){
    display.value += input;
}

function cancel(){
    display.value="";
}

function calcola(){
    try {
        display.value = eval(display.value);
    }
    catch (error){
        display.value = "Error";
    }
}
