// Arithmetic Functions
function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    if (n2 === 0) {
        return "Cannot divide by 0";
    }
    return n1 / n2;
}

// Helper to get input values
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

// Update result
function showResult(value) {
    document.getElementById('calculation-result').textContent = value;
}

// Event Listeners
document.getElementById('add').addEventListener('click', function () {
    const [n1, n2] = getInputValues();
    showResult(add(n1, n2));
});

document.getElementById('subtract').addEventListener('click', function () {
    const [n1, n2] = getInputValues();
    showResult(subtract(n1, n2));
});

document.getElementById('multiply').addEventListener('click', function () {
    const [n1, n2] = getInputValues();
    showResult(multiply(n1, n2));
});

document.getElementById('divide').addEventListener('click', function () {
    const [n1, n2] = getInputValues();
    showResult(divide(n1, n2));
});
