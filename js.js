function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let lower = document.querySelector(".lower-display");
let upper = document.querySelector(".upper-display");
lower.textContent = "0";
lower.style.padding = "20px";
lower.style["font-size"] = "20px";

function operate (num1, operator, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "×") {
        return multiply(num1, num2);
    } else if (operator == "÷") {
        return divide(num1, num2);
    }
}
const numButtons = document.querySelectorAll(".numButtons button");
let num1;
let num2;
let clickedButton = "";
numButtons.forEach(btn => {
    btn.textContent = btn.id;
    btn.addEventListener('click', () => {
        if (btn.id != "=") {
            clickedButton += btn.id
            lower.textContent = clickedButton;
            if (upper.textContent == "") {
                num1 = parseFloat(lower.textContent);
            } else {
                num2 = parseFloat(lower.textContent);
            }
        }
    });
});


const opButtons = document.querySelectorAll(".operatorButtons button");
let sign;
opButtons.forEach(btn => {
    btn.textContent = btn.id;
    btn.addEventListener('click', () => {
        if (num1 != undefined) {
            if (num2 !== undefined) {
                num1 = operate(num1, sign, num2); // Perform ongoing calculation
            } else {
                num1 = parseFloat(lower.textContent);
            }
            sign = btn.id;
            upper.textContent = num1 + " " + sign;
            clickedButton = "";
            num2 = undefined; // Reset num2 for the next number entry
        }
    });
});

const equalButton = document.querySelector("#\\=");
equalButton.addEventListener('click', () => {
    let result;
    if (num1 != undefined && num2 != undefined) {
        result = operate(num1, sign, num2);
    }
    lower.textContent = result;
    upper.textContent = "";
    num1 = result;
    clickedButton = "";
});

const clearButton = document.querySelector("#CLEAR");
clearButton.textContent = clearButton.id;

const deleteButton = document.querySelector("#DELETE");
deleteButton.textContent = deleteButton.id;

clearButton.addEventListener('click', () => {
    lower.textContent = "0";
    clickedButton = "";
    num1 = "";
    num2 = "";
    upper.textContent = "";
});

deleteButton.addEventListener('click', () => {
    clickedButton = clickedButton.slice(0,clickedButton.length -2);
    lower.textContent = lower.textContent.slice(0,lower.textContent.length -1);
});


const allButtons = document.querySelectorAll("button");






