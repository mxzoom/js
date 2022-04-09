let myNum = Number(prompt("Введите целое положительное число"));
myTemp1000 = myNum % 1000
my100 = Math.floor(myTemp1000 / 100)
myTemp100 = myTemp1000 % 100
my10 = Math.floor(myTemp100 / 10)
my1 = myTemp100 % 10
alert(`В числе ${myNum} количество сотен: ${my100}, десятков: ${my10}, единиц: ${my1} `)