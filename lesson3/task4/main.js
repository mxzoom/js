let simpleArr = [];
for (let i = 1; i <= 5; i++) {
    simpleArr.push(Math.round((Math.random()) * 10));

}
console.log(`${simpleArr} - исходный массив`)

simpleArr.forEach(function(el, idx, arr) {
    if (el === 3) {
        simpleArr.splice(idx, 1)
        console.log(`удален элемент с текущим индексом ${idx} и значением ${el}`)
    } else {
        arr[idx] = el * 1.1
    }
});

console.log(`${simpleArr} - измененный массив`)