//by using filter
//find duplicates
const arry = [1, 2, 1, 3, 4, 3, 5]
const findDuplicates = arry.filter((item, index) => arry.indexOf(item) !== index)
console.log('findDuplicates', findDuplicates)
//remove duplicate
const removeDuplicates = arry.filter((item, index) => arry.indexOf(item) == index)
console.log('removeDuplicates', removeDuplicates)
