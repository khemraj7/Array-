var box = ['apple', 'mango', 'orange', 'orange', 'apple']

// {apple: 2, mango: 1, orange: 2}
let counter = {}
for (let i = 0; i < box.length; i++) {
  if (counter[box[i]]) {
    counter[box[i]] += 1
  } else {
    counter[box[i]] = 1
  }
}
console.log(counter)

// string occurence

var test = 'occurence'

// test.indexOf('o')
let count = 0
for (let i = 0; i < test.length; i++) {
  if (test.charAt(i) == 'o') {
    count += 1
  }
}
return count
