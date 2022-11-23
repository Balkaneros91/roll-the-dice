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

function rollDice()

function checkOutcome()

function decrementChances()