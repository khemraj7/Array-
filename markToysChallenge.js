function maximumToys(prices, k) {
  var s = 0
  prices.sort(function (a, b) {
    return a - b
  })
  for (let i = 0; i < prices.length; i++)
    if (prices[i] <= k) {
      s = s + 1
      k = k - prices[i]
      console.log(prices[i])
    } else {
      break
    }

  return s
}
const n = parseInt(firstMultipleInput[0], 10)

const k = parseInt(firstMultipleInput[1], 10)

const prices = readLine()
  .replace(/\s+$/g, '')
  .split(' ')
  .map((pricesTemp) => parseInt(pricesTemp, 10))

const result = maximumToys(prices, k)
console.log('result', result)
