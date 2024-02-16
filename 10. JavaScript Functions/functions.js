// function statement
function fn() {

    console.log("I am function statement.");
}

// function expression
let fn = function () {

    console.log("I am function expression.");
    console.log("I am also anonymous.")
}

    // IIFE
    (function () {
        console.log("I am IIFE.");
    })()

// arrow function
let arrow = () => {
    console.log("I am arrow function.");
}

// higher order function
function disp() {
    console.log("I am disp function.");
}

function print(fn) {
    fn();
}

print(disp);