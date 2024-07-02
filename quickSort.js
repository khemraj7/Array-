var items = [5, 3, 7, 6, 2, 9]
function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex]
  items[leftIndex] = items[rightIndex]
  items[rightIndex] = temp
}

function pivotIndex(items, start, end) {
 var pivot = items[start]
 var swapIdx = start
 
 for(let i = start +1 ; i< items.length; i++){
     if(pivot > items[i]){
        swapIdx++;
        swap(items , swapIdx , i)
     }
 }
 swap(items ,start,swapIdx)
 return swapIdx
}

function quickSort(items, left, right){
    if(left <  right){
        let pivotIdx =  pivotIndex(items ,left, right)
        //left
        quickSort(items, left, pivotIdx -1)
        //right
        quickSort(items, pivotIdx + 1, right)
    }
    return items
}

const result = quickSort(items ,0, items.length - 1)
console.log(result)
