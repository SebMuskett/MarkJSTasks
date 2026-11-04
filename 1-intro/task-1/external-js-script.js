// a function that shows an alert box
function alertUser() {
    alert("BUTTON CLICKED!!");
}

// find the button and attach the function to its click event
const btn = document.getElementById("btn");
btn.addEventListener("click", alertUser);