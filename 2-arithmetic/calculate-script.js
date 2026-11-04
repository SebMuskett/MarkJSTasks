// find elements
const number1Box = document.getElementById("number1");
const number2Box = document.getElementById("number2");
const display = document.getElementById("display");
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");

function displayEquation(num1,num2,res,op) {
    if (Number.isNaN(res)) {
        display.textContent = `${num1} ${op} ${num2} = Error`;
    } else {
        if (!Number.isInteger(res)){

            let restxt = res.toString();
            let index = restxt.indexOf(".");
            let places = index == -1 ? 0 : (restxt.length - index - 1);

            if (places < 3) {
                display.textContent = `${num1} ${op} ${num2} = ${parseFloat(res).toFixed(places)}`;
            } else {
                display.textContent = `${num1} ${op} ${num2} = ${parseFloat(res).toFixed(3)}`;
            }

        } else {
            display.textContent = `${num1} ${op} ${num2} = ${res}`;
        }
    }
}

// add two numbers and display result
function addNums() {
    const number1 = Number(number1Box.value);
    const number2 = Number(number2Box.value);
    const result = number1 + number2;

    displayEquation(number1, number2, result, "+");
}

// subtract two numbers and display result
function subtractNums() {
    const number1 = Number(number1Box.value);
    const number2 = Number(number2Box.value);
    const result = number1 - number2;

    displayEquation(number1, number2, result, "-");
}

// multiply two numbers and display result
function multiplyNums() {
    const number1 = Number(number1Box.value);
    const number2 = Number(number2Box.value);
    const result = number1*+ number2;

    displayEquation(number1, number2, result, "x");
}

// divide two numbers and display result
function divideNums() {
    const number1 = Number(number1Box.value);
    const number2 = Number(number2Box.value);
    const result = number1 / number2;

    displayEquation(number1, number2, result, "/");
}

// modulus two numbers and display result
function modulusNums() {
    const number1 = Number(number1Box.value);
    const number2 = Number(number2Box.value);
    const result = number1 % number2;

    displayEquation(number1, number2, result, "%");
}

// reset both boxes and result
function clearAll() {
    number1Box.value = 0;
    number2Box.value = 0;
    display.textContent = "";
}

// attach functions to buttons
btnAdd.addEventListener("click", addNums);
btnSub.addEventListener("click", subtractNums);
btnMul.addEventListener("click", multiplyNums);
btnDiv.addEventListener("click", divideNums);
btnMod.addEventListener("click", modulusNums);
btnClear.addEventListener("click", clearAll);