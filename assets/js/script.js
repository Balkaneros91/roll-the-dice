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
 * looping through images/numbers 1-6 
 * for 2 random number and calculates result
 */
function rollDice() {
    let dice = document.querySelectorAll('img');

    dice.forEach(function (die) {
        die.classList.add("shake");
    });

    let dieOneValue = Math.floor(Math.random() * 6) + 1;
    let firstDiceImage = "assets/images/dice" + dieOneValue + ".png";
    let dieTwoValue = Math.floor(Math.random() * 6) + 1;
    let secondDiceImage = "assets/images/dice" + dieTwoValue + ".png";

    document.querySelector("#die1").setAttribute("src", firstDiceImage);
    document.querySelector("#die2").setAttribute("src", secondDiceImage);

    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });
    },
        500
    );

    document.querySelector("#round-result").innerHTML = ((dieOneValue) + (dieTwoValue));
}

/**
 * Check if targeted number matches or not the calculated result
 */
function checkOutcome() {
    let result = parseInt(document.getElementById('round-result').textContent);
    let targNr = parseInt(document.getElementById('targ-Nr').textContent);

    let isMatch = result === targNr;

    if (isMatch) {
        document.getElementById('message').textContent = ("A match! You won!");
        document.getElementById("roll").disabled = true;
        decrementChances();
    } else if (!isMatch) {
        decrementChances();
    } else {
        alert("Hi there!");
    }
}

/*
function decrementChances()
*/