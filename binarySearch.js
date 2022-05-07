let array = [6, 5, 3, 1, 8, 7, 2, 4]
let find = 7
let left = 0
let right = array.length - 1
const result = await binarySearch(array, left, right, find)
if (result == -1) {
  console.log('Not found')
} else {
  console.log('index of element in array', result, array[result])
}

binarySearch((arr, left, right, find) => {
  if (right >= left) {
    let mid = left + Math.floor((right - left) / 2)
    // console.log(mid)
    // If the element is present at the middle
    if (arr[mid] == find) {
      return mid
    }

    // If element is smaller than mid, then
    // it can only be present in left subarray
    else if (arr[mid] > find) {
      return binarySearch(arr, left, mid - 1, find)
    }

    // Else the element can only be present
    // it can only be present in right subarray
    else {
      return binarySearch(arr, left, mid - 1, find)
    }
  } else {
    // We reach here when element is not present in array
    return -1
  }
})
