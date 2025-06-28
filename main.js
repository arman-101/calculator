// variables

const answerDisplay = document.querySelector(".answer");

let firstNumber = "";
let secondNumber = "";
let currentInput = "";
let chosenOperator = null;
let resultDisplayed = false;

function populateDisplay(number) {
  if (resultDisplayed) {
    currentInput = "";
    resultDisplayed = false;
  }
  currentInput += number;
  answerDisplay.textContent = currentInput;
}

// Only select real number buttons (0–9)
const numberButtons = document.querySelectorAll(".numbers button");
// Only select math operator buttons
const operatorButtons = document.querySelectorAll(".operators button");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const digit = button.textContent;
    populateDisplay(digit);
  });
});

// Handle operator buttons
operatorButtons.forEach((button) => {
  const operator = button.textContent;

  if (operator === "=") {
    button.addEventListener("click", () => {
      secondNumber = currentInput;

      if (firstNumber && secondNumber && chosenOperator) {
        const result = operate(firstNumber, secondNumber, chosenOperator);
        answerDisplay.textContent = result;

        currentInput = result.toString();
        firstNumber = "";
        secondNumber = "";
        chosenOperator = null;
        resultDisplayed = true;
      }
    });
  } else if (operator === "clear") {
    button.addEventListener("click", () => {
      firstNumber = "";
      secondNumber = "";
      currentInput = "";
      chosenOperator = null;
      resultDisplayed = false;
      answerDisplay.textContent = "0";
    });
  } else {
    button.addEventListener("click", () => {
      if (currentInput === "") return;

      firstNumber = currentInput;
      chosenOperator = operator;
      currentInput = "";
    });
  }
});


// Handle clear button
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
  firstNumber = "";
  secondNumber = "";
  currentInput = "";
  chosenOperator = null;
  resultDisplayed = false;
  answerDisplay.textContent = "0";
});

// functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Nice try 🙄";
  return a / b;
}

function operate(first, second, operator) {
  first = parseFloat(first);
  second = parseFloat(second);

  switch (operator) {
    case "+":
      return add(first, second);
    case "-":
      return subtract(first, second);
    case "*":
      return multiply(first, second);
    case "/":
      return divide(first, second);
    default:
      return second;
  }
}
