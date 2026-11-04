// find elements
const colourBox = document.getElementById("colour");
const display = document.getElementById("display");
const btnGo = document.getElementById("btnGo");

// change message colour
function pickColour(colour) {

    if (colour === "red") {
        display.className = "red";
        display.textContent = "red... the ANGRY colour!!";
    } else if (colour === "blue") {
        display.className = "blue";
        display.textContent = "blue... the SAD colour...";
    } else if (colour === "green") {
        display.className = "green";
        display.textContent = "green... the GOOD colour!";
    } else if (colour === "yellow") {
        display.className = "yellow";
        display.textContent = "yellow... the HAPPY colour!";
    } else if (colour === "pink") {
        display.className = "pink";
        display.textContent = "pink... the CUTE colour!!";
    } else if (colour === "purple") {
        display.className = "purple";
        display.textContent = "purple... the... uh... colour of grapes! sometimes!";
    }
}

colourBox.addEventListener("change", (event) => {
    let colour = event.target.value;
    pickColour(colour)
})