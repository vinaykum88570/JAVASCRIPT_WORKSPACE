
function showAlert() {
    // Display a message
    alert("Welcome to JavaScript!");
}

function showPrompt() {
    // Ask the user to enter their name
    let name = prompt("Enter your name:");

    // Display the entered name
    alert("Your name is " + name);
}

function showConfirm() {
    // Ask the user to click OK or Cancel
    let result = confirm("Do you want to continue?");

    // Check the user's answer
    if (result == true) {
        alert("You clicked OK");
    } else {
        alert("You clicked Cancel");
    }
}
