// You take your son to the forest to see the monkeys. You know that there are a certain
// number there (n), but your son is too young to just appreciate the full number, he has
//  to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an
// array with all numbers up to and including that number, but excluding zero.

// For example, if n = 10:

// return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const monkeyCount = n => [...Array(n).keys()].map(x => x + 1)

// best practice from solutions.
// This solution is probably faster than mine due to there being only one iteration.
// The goal with the answer I gave was to make a one liner.

function monkeyCount(n) {
  var monkeys = []
  for (var i = 1; i < n + 1; i++) {
    monkeys.push(i)
  }
  return monkeys
}
