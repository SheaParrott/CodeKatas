// Problem
// In China，there is an ancient mathematical book, called "The Mathematical Classic of
// Sun Zi"(《孙子算经》). In the book, there is a classic math problem:
// “今有物不知其数，三三数之剩二，五五数之剩三，七七数之剩二，问物几何？”

// Ahh, Sorry. I forgot that you don't know Chinese. Let's translate it to English:

// There is a unkown positive integer n. We know:

// n % 3 = 2, and n % 5 = 3, and n % 7 = 2.

// What's the minimum possible positive integer n?

// This problem has been asked at Part I. Now, Let's expand the problem deeply:

// There is a unkown positive integer n. We know:

// Three prime divisors a,b,c, and Three remainders x,y,z, that:

// n % a = x, and n % b = y, and n % c = z.

// What's the minimum possible positive integer n?

// Task
// You are given six non-negative integers a,b,c,x,y,z. a,b,c represent three prime
// divisors; x,y,z represent the remainders of the unknown positive integer n divided by a,b,c.

// Your task is to find the minimum possible positive integer n and return it.

// Example
// For a = 3, b = 5, c = 7, x = 2, y = 3, z = 2, the output should be 23

// 23 % 3 = 2, 23 % 5 = 3, 23 % 7 = 2

// For a = 3, b = 5, c = 7, x = 1, y = 2, z = 3, the output should be 52

// 52 % 3 = 1, 52 % 5 = 2, 52 % 7 = 3

// For a = 2, b = 7, c = 11, x = 2, y = 1, z = 7, the output should be 29

// 29 % 3 = 2, 29 % 7 = 1, 29 % 11 = 7

// Note
// 0 < a < 100000, 0 < b < 100000, 0 < c < 100000

// 0 <= x < a, 0 <= y < b, 0 <= z < c

// Happy Coding ^_^

function findUnknowNumber(a, b, c, x, y, z) {
  let n = 0

  do {
    n++
  } while (n % a !== x || n % b !== y || n % c !== z)

  return n
}

// Best practice from solutions

function findUnknowNumber(a, b, c, x, y, z) {
  for (var i = 1; i <= 10000000; i++) {
    if (i % a == x && i % b == y && i % c == z) return i
  }
}
