// find elements
const colourBox = document.getElementById("colour");
const display = document.getElementById("display");
const btnGo = document.getElementById("btnGo");

// change message colour
function pickColour() {
    const colour = colourBox.value;
    let message;

    switch (colour) {
        case "red":
        case "orange":
        case "yellow":
            message = "mmmmm a warm colour! how nice!";
            break;
        case "blue":
        case "green":
        case "purple":
            message = "brrr!! thats a cool colour!";
            break;
        default:
            message = "choose one already >:(";
    }

    display.className = colour;
    display.textContent = message;
}

btnGo.addEventListener("click", pickColour)