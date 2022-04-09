//Создайте массив, состоящий из 5 произвольных значений, которые генерируются программой (диапазон значений от 0 до 10).
//Возведите каждый элемент этого массива в квадрат.

let simpleArr = [];
for (let i = 1; i <= 5; i++) {
    simpleArr.push(Math.round((Math.random()) * 10));

}
console.log(simpleArr);
simpleArr.forEach(function(element) {
    console.log(element * element)
});