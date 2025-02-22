// script.js
let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value); // Evaluate the expression entered
    } catch (error) {
        display.value = 'Error';
    }
}
