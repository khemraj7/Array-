let array = [1, 2, 3, 4, 5, 6, 7, 8];
let find = 7
let left = 0
let right = array.length - 1


const result =  binarySearch(array, left, right, find)
if (result == -1) {
  console.log('Not found')
} else {
  console.log('index of element in array', result, array[result])
}

function binarySearch(arr, left, right, find){
    if(right >= left){
       let mid = left + Math.floor((right - left) / 2)
      
     if (arr[mid] == find) {
      return mid
    }  else if (arr[mid] > find) {
      return binarySearch(arr, left, mid - 1, find)
    }else{
        return binarySearch(arr, mid + 1, right, find) 
    }

    }else{
        return -1
    }
}
