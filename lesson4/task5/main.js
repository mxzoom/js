const en = ["mon",  "tue",  "wed",  "thu",  "fri",  "sat",  "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

//Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

function createDict(arr1,arr2) {
  newDict={}
  for (let i = 0; i < arr1.length; i++) {
    newDict[arr1[i]]=arr2[i]
  }
  return newDict
}

myDict = createDict(en,ru)
console.log(myDict)