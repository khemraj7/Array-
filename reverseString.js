// program to reverse a string

function reverseString(str) {
  // empty string
  let newString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }
  return newString
}
const string = 'My name is Khemraj'

const result = reverseString(string)
console.log(result)
