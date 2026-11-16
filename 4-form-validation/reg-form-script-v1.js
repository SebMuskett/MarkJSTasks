/*
    validate the registration form
    checks that the first name and surname bozes are not empty
*/

// find elements
const form = document.getElementById("regForm");
const fname = document.getElementById("fname")
const sname = document.getElementById("sname")

// check the form when the user tries to submit it
function validateForm(event) {
    // trim() removes any spaces from the start and end of the text
    if (fname.value.trim() === "") {
        alert("ENTER THE FIRST NAME");
        event.preventDefault();
    } else if (sname.value.trim() === "") {
        alert("ENTER THE SURNAME");
        event.preventDefault();
    }
}

// run validateForm whenever the form is submitted
form.addEventListener("submit", validateForm)