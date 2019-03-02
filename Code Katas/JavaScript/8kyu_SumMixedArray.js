// Given an array of integers as strings and numbers, return
// the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  sum = 0
  for (let i = 0; i < x.length; i++) {
    sum += parseInt(x[i])
  }
  return sum
}

// best practice and clever marks from solutions

function sumMix(x) {
  return x.map(a => +a).reduce((a, b) => a + b)
}
