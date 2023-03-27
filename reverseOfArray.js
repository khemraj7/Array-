let array = [1.2, 7, 4, 9, 12]
let temp
for (let i = 0; i < array.length / 2; i++) {
  temp = array[i]
  array[i] = array[array.length - i - 1]
  array[array.length - i - 1] = temp
}

console.log('Reverse Array', array)

// reverse with recursion
let data = [1,2,3,4,5,6,7,8,9]
let temp;
function reverse(array, start, end){
    // console.log(array)
    if(start<=end){
    temp = array[start]
    array[start] = array[end]
     array[end] = temp
     reverse(data, start+1, end-1)
        
    }
    
     return array
    
}

console.log(reverse(data, 0, data.length-1))
