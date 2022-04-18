let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));
if (a > 0 && b > 0) {
    console.log(a - b);
}
if (a < 0 && b < 0) {
    console.log(a * b);
}
if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    console.log(a + b);
}