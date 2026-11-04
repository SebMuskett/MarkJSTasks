// get current date and time
const now = new Date();
const hour = now.getHours();

const display = document.getElementById("display");
let greeting;

// choose greeting based on hour
if (hour >= 18) {
    greeting = "evenin!";
} else if (hour >= 12) {
    greeting = "afternoon!";
} else {
    greeting = "mornin!";
}

display.textContent = greeting;