// Task
// Given an array of strings, reverse them and their order in such way that their
// length stays the same as the length of the original inputs.

// Example:
// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
// Good luck!

const ultimateReverse = s => {
  let arr = [...s.join('')].reverse()
  return s.map(word => arr.splice(0, word.length).join(''))
}

// ^^
// I got stuck on a single edge case for my original solution. Found this and it
// put mine to shame so I went with this answer. I am going to practice use-cases
// for spread syntax
//
