// find elements we need
const btn = document.getElementById("btn");
const display = document.getElementById("display");

// change paragraph when user hovers
function hoverOver() {
    display.textContent = "hovering!";
}

// change paragraph when user moves away
function moveAway() {
    display.textContent = "moved away!";
}

// change paragraph when user
function buttonClick() {
    display.textContent = "clicked!";
}

// change paragraph when user
function doubleClick() {
    display.textContent = "DOUBLE clicked!";
}

// attach function to mouseover event
btn.addEventListener("mouseover", hoverOver);
btn.addEventListener("mouseleave", moveAway);
btn.addEventListener("click", buttonClick);
btn.addEventListener("dblclick", doubleClick);