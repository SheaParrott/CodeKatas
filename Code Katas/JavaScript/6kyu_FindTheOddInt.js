// Given an array, find the int that appears an odd
// number of times.

// There will always be only one integer that appears
// an odd number of times.

function findOdd(A) {
  let count = {}
  let answer = 0
  A.forEach(number => (count[number] = (count[number] || 0) + 1))
  for (var p in count) {
    if (count[p] % 2 == 1) {
      answer = p
    }
  }
  return parseInt(answer)
}

// best practice from solutions and had the highest clever marks

const findOdd = xs => xs.reduce((a, b) => a ^ b)
