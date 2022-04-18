//Рассчитайте сумму всех значений данного объекта.

const numbers = {
key1: {
keyin1: 1,
keyin2: 2,
keyin3: 3,
},
key2: {
keyin1: 4,
keyin2: 5,
keyin3: 6,
},
}


myCounter=0
for (const key in numbers) {
  for (el in numbers[key]) {
    myCounter+=numbers[key][el]
  }
}

console.log(myCounter)