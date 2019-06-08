// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

const findSum = n =>
  [...Array(n)]
    .map((_, i) => i + 1)
    .filter(v => !(v % 3) || !(v % 5))
    .reduce((a, c) => a + c)

// best practice from solutions

function findSum(n) {
  let result = 0
  for (let i = 0; i <= n; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) result += i
  }
  return result
}
