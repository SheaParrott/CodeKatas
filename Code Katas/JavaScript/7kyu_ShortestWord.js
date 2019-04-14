// Simple, given a string of words, return the length of the
// shortest word(s).

// String will never be empty and you do not need to account
// for different data types.

const findShort = s => Math.min(...s.split(' ').map(value => value.length))

// best practice from solutions

function findShort(s) {
  return Math.min.apply(null, s.split(' ').map(w => w.length))
}
