//bubble sort
//sort in ascending order

'use strict'
var a = 10
console.log(a)

let array = [6, 5, 3, 1, 8, 7, 2, 4]
var temp
for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - i - 1; j++) {
    if (array[j] > array[j + 1]) {
      temp = array[j]
      array[j] = array[j + 1]
      array[j + 1] = temp
    }
  }
}
console.log(array)
