let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));

function sum(a, b) {
    console.log(a + b)
}

function sub(a, b) {
    if (a == b) {
        console.log(0)
    } else {
        console.log(a > b ? a - b : b - a)
    }
}

function div(a, b) {
    console.log(a / b)
}

function mul(a, b) {
    console.log(a * b)
}


sum(a, b)
sub(a, b)
div(a, b)
mul(a, b)