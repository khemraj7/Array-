let array = [6, 5, 3, 1, 8, 7, 2, 4]
let find = 1

//by using forEach
array.forEach((element) => {
  if (element === find) {
    console.log(element)
  }
})
//by using for
for (let i = 0; i < array.length; i++) {
  if (array[i] === find) {
    console.log(array[i])
  }
}

//by using filter
const a = array.filter((element) => element === find)
console.log(a)
