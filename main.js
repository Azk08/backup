let display = document.getElementById('display');
let expression = '';

function appendValue(value) {
    expression += value;
    display.value = expression;
}

function calculateResult() {
    try {
        expression = eval(expression).toString();
        display.value = expression;
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    expression = '';
    display.value = '';
}
