// There exist two zeroes: +0 (or just 0) and -0.

// Write a function that returns true if the input
//  number is -0 and false otherwise
//  (True and False for Python).

// In JavaScript / TypeScript / Coffeescript
// the input will be a number.

// In Python / Java / C the input will be a float.

function isNegativeZero(n) {
  return Object.is(-0, n)
}

// Learned there is a -0. I still don't fully
// understand what it is, but I will keep looking
// into it and its purpose.
