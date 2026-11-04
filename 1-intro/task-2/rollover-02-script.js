// a function that shows an alert box
function rolloverAlert() {
    alert("THANK YOU!");
}

// attach function to mouseover
const btn = document.getElementById("btn");
btn.addEventListener("mouseover", rolloverAlert);