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
/*console.log(operate(3, 3, "+"));
console.log(operate(3, 3, "-"));
console.log(operate(3, 3, "*"));
console.log(operate(3, 3, "/"));
*/


// Getting the display
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
const btnBackspace = document.getElementById("btnBackspace");

/**
 * Initializing the local
 */
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
    equationText = "";
    equationDisplay.textContent = "0";
    equationDisplay.style.visibility = "hidden";
    secondNumber = "";
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
    if (resultText.includes(".")) return;
    resultText += ".";
    resultDisplay.textContent = resultText;
});

btnEqual.addEventListener('click', function() 
{
    Calculate();
});

btnPlus.addEventListener('click', function()
{
    if (secondNumber != "") Calculate();

    if (resultText == "") resultText = "0";
    secondNumber = resultText;
    resultText = "";
    currentOperator = "+";

    equationText += secondNumber;
    equationText += currentOperator;
    equationDisplay.textContent = equationText;
    equationDisplay.style.visibility = "visible";
});

btnMinus.addEventListener('click', function()
{
    if (secondNumber != "") Calculate();

    if (resultText == "") resultText = "0";
    secondNumber = resultText;
    resultText = "";
    currentOperator = "-";

    equationText += secondNumber;
    equationText += currentOperator;
    equationDisplay.textContent = equationText;
    equationDisplay.style.visibility = "visible";
});

btnMult.addEventListener('click', function()
{
    if (secondNumber != "") Calculate();

    if (resultText == "") resultText = "0";
    secondNumber = resultText;
    resultText = "";
    currentOperator = "*";

    equationText += secondNumber;
    equationText += currentOperator;
    equationDisplay.textContent = equationText;
    equationDisplay.style.visibility = "visible";
});

btnDiv.addEventListener('click', function()
{
    if (secondNumber != "") Calculate();

    if (resultText == "") resultText = "0";
    secondNumber = resultText;
    resultText = "";
    currentOperator = "/";

    equationText += secondNumber;
    equationText += currentOperator;
    equationDisplay.textContent = equationText;
    equationDisplay.style.visibility = "visible";
});

btnBackspace.addEventListener('click', function() 
{
    resultText = resultText.substring(0, resultText.length - 1);
    if (resultText.length == 0) resultDisplay.textContent = "0";
    else resultDisplay.textContent = resultText;
    
});

/**
 * Binding keyboard to buttons
 */
document.addEventListener('keydown', function(event)
{
    if(event.key == "1") btnOne.click();
    if(event.key == "2") btnTwo.click();
    if(event.key == "3") btnThree.click();
    if(event.key == "4") btnFour.click();
    if(event.key == "5") btnFive.click();
    if(event.key == "6") btnSix.click();
    if(event.key == "7") btnSeven.click();
    if(event.key == "8") btnEight.click();
    if(event.key == "9") btnNine.click();
    if(event.key == "0") btnZero.click();
    if(event.key == "+") btnPlus.click();
    if(event.key == "-") btnMinus.click();
    if(event.key == "*") btnMult.click();
    if(event.key == "/") btnDiv.click();
    if(event.key == "Enter") btnEqual.click();
    if(event.key == "c") btnClear.click();
    if(event.key == ".") btnDot.click();
    if(event.key == "Backspace") btnBackspace.click();
});


/**
 * Calculate and display the result with the current operator and numbers
 */
function Calculate()
{
    // Division by zero 
    if (currentOperator == "/" && resultText == "0")
    { 
        resultDisplay.textContent = "Not possible";
        
        // Clear and return
        resultText = "";
        equationText = "";
        equationDisplay.textContent = "0";
        equationDisplay.style.visibility = "hidden";
        secondNumber = "";
        return;
    }

    equationText += resultText;
    equationText += " =";
    equationDisplay.textContent = equationText;
    equationDisplay.style.visibility = "visible";
    resultDisplay.textContent = operate(Number(secondNumber), Number(resultText), currentOperator);
    resultText = operate(Number(secondNumber), Number(resultText), currentOperator).toString();
    equationText = "";
    secondNumber = "";
}