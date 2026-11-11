// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }

    return a / b;
}

// Main calculation function
function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter both numbers!";
    } 
    else {
        switch (operator) {
            case "+":
                result = add(num1, num2);
                break;

            case "-":
                result = subtract(num1, num2);
                break;

            case "*":
                result = multiply(num1, num2);
                break;

            case "/":
                result = divide(num1, num2);
                break;
        }
    }

    document.getElementById("result").textContent = "Result: " + result;
}