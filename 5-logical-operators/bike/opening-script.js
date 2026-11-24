// get current day (0 = sunday ... 6 = saturday) and hour (0-23)
const now  = new Date();
const day  = now.getDay();
const hour = now.getHours();

const display = document.getElementById("display");
let message;

// || OR - true if either condition is true
if (day === 0 || day === 6) {
    message = "we not open :(";
// && AND = true if both conditions are true
} else if (hour >= 9 && hour < 17) {
    message = "we r open! yay!";
} else {
    message = "not open, read the thing you stupid";
}

display.textContent = message;