/*
    validate the registration form
    checks that the first name and surname bozes are not empty
*/

// find elements
const form   = document.getElementById("regForm");
const fname  = document.getElementById("fname");
const sname  = document.getElementById("sname");
const errors = document.getElementById("errors");

// check the form when the user tries to submit it
function validateForm(event) {
    let message = "";

    fname.classList.remove("error");
    sname.classList.remove("error");

    // check first name (trim() removes any spaces from the start and end of the text)
    if (fname.value.trim() === "") {
        // add this message
        message = message + "enter first name!!!! now!!!!\n";
        // make the first name input box look like an error
        fname.classList.add("error");
    }

    // check surname
    if (sname.value.trim() === "") {
        // add this message
        message = message + "enter last name!!!! now!!!!\n";
        // make the surname input box look like an error
        sname.classList.add("error");
    }

    // if there is an error, prevent default action
    if (message !== "") {
        event.preventDefault();
    }

    // put message on screen
    errors.textContent = message;
}

// run validateForm whenever the form is submitted
form.addEventListener("submit", validateForm)