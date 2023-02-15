//#region Calculation functions

function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

function operate(a, b, operator)
{
    if (operator == "+") return add(a, b);
    else if (operator == "-") return subtract(a, b);
    else if (operator == "*") return multiply(a, b);
    else return divide(a, b);
}

//#endregion


// Console testing
console.log(operate(3, 3, "+"));
console.log(operate(3, 3, "-"));
console.log(operate(3, 3, "*"));
console.log(operate(3, 3, "/"));

const resultDisplay = document.getElementById("result");

// Buttons

/**
 * Getting all the buttons from the html
 */
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnFour = document.getElementById("btnFour");
const btnFive = document.getElementById("btnFive");
const btnSix = document.getElementById("btnSix");
const btnSeven = document.getElementById("btnSeven");
const btnEight = document.getElementById("btnEight");
const btnNine = document.getElementById("btnNine");
const btnZero = document.getElementById("btnZero");
const btnEqual = document.getElementById("btnEqual");
const btnClear = document.getElementById("btnClear");

var resultText = "";

/**
 * Making all the buttons display in the calculator
 */
btnOne.addEventListener('click', function() 
{
    resultText += "1";
    resultDisplay.textContent = resultText;
});