/**
 * Loading the DOM first before any other game action
 * looping through buttons and add event listener
 */
 document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function (event) {
            if (this.getAttribute('data-type') === 'submit') {
                rollDice();
            } else if (this.getAttribute('data-type') === 'reset') {
                window.location.reload(true);
            } else {
                let targNr = this.getAttribute('data-choice');
                document.getElementById("targ-Nr").innerHTML = targNr;
                document.getElementById("roll").disabled = false;
            }
        });
    }
});

/**
 * The main function called when DOM loaded
 * looping through images/numbers 1-6 for random number
 * 
 */
function rollDice() {
    let dice = document.querySelectorAll('img');

    let dieOneValue = Math.floor(Math.random() * 6) + 1;
    let firstDiceImage = "assets/images/dice" + dieOneValue + ".png";
    let dieTwoValue = Math.floor(Math.random() * 6) + 1;
    let secondDiceImage = "assets/images/dice" + dieTwoValue + ".png";

    document.querySelector("#die1").setAttribute("src", firstDiceImage);
    document.querySelector("#die2").setAttribute("src", secondDiceImage);

    document.querySelector("#round-result").innerHTML = ((dieOneValue) + (dieTwoValue));
}

/*
function checkOutcome()

function decrementChances()
*/