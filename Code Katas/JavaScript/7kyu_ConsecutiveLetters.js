// In this Kata, we will check if a string contains consecutive letters as they appear
// in the English alphabet and if each letter occurs only once.

// For example:
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True
// All inputs will be lowercase letters.

// More examples in test cases. Good luck!

function solve(s) {
  let alphabet = [...'abcdefghijklmnopqrstuvwxyz']
  let array = [...s]
  let consecutiveLettersArray = []
  let found = false
  console.log(alphabet)

  for (let i = 0; i < alphabet.length; i++) {
    if (found && !array.includes(alphabet[i])) i = alphabet.length
    if (array.includes(alphabet[i])) {
      found = true
      if (array.filter(c => c === alphabet[i]).length > 1) return false
      consecutiveLettersArray.push(alphabet[i])
    }
  }

  return consecutiveLettersArray.length === array.length
}

// best practice from solutions

// I knew I was going to be put to shame on this one lol!

function solve(s) {
  return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''))
}
