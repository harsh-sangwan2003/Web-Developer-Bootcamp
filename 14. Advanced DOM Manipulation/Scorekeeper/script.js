var p1 = document.querySelector('.p1');
var p2 = document.querySelector('.p2');
var player1 = document.querySelector('#player1');
var player2 = document.querySelector('#player2');
var max = document.querySelector('.max');
var input = document.querySelector('input');
var reset = document.querySelector('.reset');

var p1Score = 0;
var p2Score = 0;
var value = input.value;
var p1Wins = false;
var p2Wins = false;

if (input.value == 0) {

    max.textContent = 5;
    value = 5;
}

input.addEventListener('change', (e) => {

    if (e.target.value == 0) {
        max.textContent = 5;
        value = 5;
    }

    else {
        max.textContent = e.target.value;
        value = e.target.value;
    }
})

player1.addEventListener('click', () => {

    if (p1Score < value && !p2Wins)
        p1Score++;

    p1.textContent = p1Score;

    if (p1Score == value) {
        p1.style.color = "green";
        p1Wins = true;
    }
})

player2.addEventListener('click', () => {

    if (p2Score < value && !p1Wins)
        p2Score++;

    p2.textContent = p2Score;

    if (p2Score == value) {
        p2.style.color = "green";
        p2Wins = true;
    }
})

reset.addEventListener("click", () => {

    input.value = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1Wins = false;
    p2Wins = false;
    p1.style.color = "white";
    p2.style.color = "white";
    value = 5;
})