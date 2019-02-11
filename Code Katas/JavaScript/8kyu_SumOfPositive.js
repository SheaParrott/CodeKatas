// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  sum = 0
  for (i = 0; i < arr.length; i++) {
    arr[i] > 0 ? (sum = sum + arr[i]) : null
  }
  return sum
}

// one liner from solutions

// going to look deeper into reduce soon

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0)
}
