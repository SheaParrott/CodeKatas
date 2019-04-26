// Given a non-empty array of integers, return the result of multiplying the values together
// in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = x => x.reduce((a, c) => a * c)

// best practice from solutions. Same! :D

const grow = x => x.reduce((a, b) => a * b)
