// let - because this value will change
let clicks = 0;

// const - these will always refer to the same elements
const btn = document.getElementById("btn");
const display = document.getElementById("display");

// increment counter and show total
function countClick() {
    clicks++
    display.textContent = "you clicked it " + clicks + " times"
}

btn.addEventListener("click", countClick);