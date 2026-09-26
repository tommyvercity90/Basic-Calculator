const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const decimalButton = document.getElementById("decimal");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let currentNumber = "";
let previousNumber = "";
let selectedOperator = null;

// Display a number
function updateDisplay() {
    display.textContent = currentNumber || "0";
}

// Number buttons
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const number = button.dataset.number;

        if (currentNumber === "Error") {
            currentNumber = "";
        }

        currentNumber += number;
        updateDisplay();
    });
});

// Decimal button
decimalButton.addEventListener("click", () => {
    if (currentNumber === "Error") {
        currentNumber = "0";
    }

    if (!currentNumber.includes(".")) {
        currentNumber = currentNumber === "" ? "0." : currentNumber + ".";
        updateDisplay();
    }
});

// Operator buttons
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentNumber === "" || currentNumber === "Error") {
            return;
        }

        if (previousNumber !== "" && selectedOperator !== null) {
            calculate();
        }

        previousNumber = currentNumber;
        selectedOperator = button.dataset.operator;
        currentNumber = "";
    });
});

// Perform calculation
function calculate() {
    const firstNumber = parseFloat(previousNumber);
    const secondNumber = parseFloat(currentNumber);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return;
    }

    let result;

    switch (selectedOperator) {
        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":
            if (secondNumber === 0) {
                currentNumber = "Error";
                previousNumber = "";
                selectedOperator = null;
                updateDisplay();
                return;
            }

            result = firstNumber / secondNumber;
            break;
    }

    currentNumber = String(result);
    previousNumber = "";
    selectedOperator = null;
    updateDisplay();
}

// Equals button
equalsButton.addEventListener("click", () => {
    if (
        currentNumber === "" ||
        previousNumber === "" ||
        selectedOperator === null
    ) {
        return;
    }

    calculate();
});

// Clear button
clearButton.addEventListener("click", () => {
    currentNumber = "";
    previousNumber = "";
    selectedOperator = null;

    updateDisplay();
});
