

function declinationOfNumber(count, one, two, five) {
    tempCount=count%100%20
    res = "У меня есть "
    if (tempCount==1) {
        res+=`${count} ${one}`
        return res
    }
    if (tempCount==0 || tempCount>=5) {
        res+=`${count} ${five}`
    } else {
        res+=`${count} ${two}`
    }
    return res
}



//TESTS BLOCK
  console.log(declinationOfNumber(11, "яблоко", "яблока", "яблок"));
  console.log(declinationOfNumber(1, "яблоко", "яблока", "яблок"));
  console.log(declinationOfNumber(3, "яблоко", "яблока", "яблок"));
  console.log(declinationOfNumber(399, "яблоко", "яблока", "яблок"));
  console.log(declinationOfNumber(3111, "яблоко", "яблока", "яблок"));
  console.log(declinationOfNumber(323, "яблоко", "яблока", "яблок"));
  console.log(declinationOfNumber(55, "яблоко", "яблока", "яблок"));