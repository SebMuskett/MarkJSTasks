// one function that displays ANY message
function showMessage(text) {
    const display = document.getElementById("display");
    display.textContent = text;
}

// find buttons
const btnHtml = document.getElementById("btnHtml");
const btnCss = document.getElementById("btnCss");
const btnJs = document.getElementById("btnJs");

// each button passes a different message to the same function
btnHtml.addEventListener("click", () => showMessage("HTML is structure"));
btnCss.addEventListener("click", () => showMessage("CSS is style"));
btnJs.addEventListener("click", () => showMessage("JS is functionality"));