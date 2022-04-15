
    //Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
    //Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const products = [
    {
      id: 3,
      price: 127,
      photos: [
        "1.jpg",
        "2.jpg",
      ],
    },
    {
      id: 5,
      price: 499,
      photos: [],
    },
    {
      id: 10,
      price: 26,
      photos: [
        "3.jpg",
      ],
    },
    {
      id: 8,
      price: 78,
    },
  ];



let filteredProducts = products.filter(function(el){
  let lnTemp = 0
  for (const key in el) {
    if (key === "photos"){
      lnTemp=el[key].length
    }
  }
  if (lnTemp>0){
    return true
  }
})

let sortedProducts = products.sort(function(a,b){
  return a.price-b.price
})

console.log(sortedProducts)