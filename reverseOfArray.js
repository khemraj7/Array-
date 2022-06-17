let array = [1.2, 7, 4, 9, 12]
let temp
for (let i = 0; i < array.length / 2; i++) {
  temp = array[i]
  array[i] = array[array.length - i - 1]
  array[array.length - i - 1] = temp
}

console.log('Reverse Array', array)
