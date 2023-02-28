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
const equationDisplay = document.getElementById("equation");

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
const btnDot = document.getElementById("btnDot");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnMult = document.getElementById("btnMultiply");
const btnDiv = document.getElementById("btnDivide");

var resultText = "";
var equationText = "";
var secondNumber = "";
var currentOperator = "";

/**
 * Making all the buttons display in the calculator
 */
btnClear.addEventListener('click', function() 
{
    resultText = "";
    resultDisplay.textContent = "0";
    equationText = "0";
    equationDisplay.textContent = equationText;
    equationDisplay.style.visibility = "hidden";
});

btnOne.addEventListener('click', function() 
{
    resultText += "1";
    resultDisplay.textContent = resultText;
});

btnTwo.addEventListener('click', function() 
{
    resultText += "2";
    resultDisplay.textContent = resultText;
});

btnThree.addEventListener('click', function() 
{
    resultText += "3";
    resultDisplay.textContent = resultText;
});

btnFour.addEventListener('click', function() 
{
    resultText += "4";
    resultDisplay.textContent = resultText;
});

btnFive.addEventListener('click', function() 
{
    resultText += "5";
    resultDisplay.textContent = resultText;
});

btnSix.addEventListener('click', function() 
{
    resultText += "6";
    resultDisplay.textContent = resultText;
});

btnSeven.addEventListener('click', function() 
{
    resultText += "7";
    resultDisplay.textContent = resultText;
});

btnEight.addEventListener('click', function() 
{
    resultText += "8";
    resultDisplay.textContent = resultText;
});

btnNine.addEventListener('click', function() 
{
    resultText += "9";
    resultDisplay.textContent = resultText;
});

btnZero.addEventListener('click', function() 
{
    resultText += "0";
    resultDisplay.textContent = resultText;
});

btnDot.addEventListener('click', function() 
{
    resultText += ".";
    resultDisplay.textContent = resultText;
});

btnEqual.addEventListener('click', function() 
{
    equationText += resultText;
    equationText += "=";
    equationDisplay.textContent = equationText;
    equationDisplay.style.visibility = "visible";
    resultDisplay.textContent = operate(Number(secondNumber), Number(resultText), currentOperator);
    resultText = operate(Number(secondNumber), Number(resultText), currentOperator).toString();
    equationText = "";
});

btnPlus.addEventListener('click', function()
{
    secondNumber = resultText;
    resultText = "";
    currentOperator = "+";

    // TODO: when the + is clicked for the second time without clicking =,
    // we should add the two numbers and then keep adding the third number

    equationText += secondNumber;
    equationText += currentOperator;
    equationDisplay.textContent = equationText;
    equationDisplay.style.visibility = "visible";
});