// Take a number: 56789. Rotate left, you get 67895.

// Keep the first digit in place and rotate left the other digits: 68957.

// Keep the first two digits in place and rotate the other ones: 68579.

// Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

// You have the following sequence of numbers:

// 56789 -> 67895 -> 68957 -> 68579 -> 68597

// and you must return the greatest: 68957.

// Calling this function max_rot (or maxRot or ... depending on the language)

// max_rot(56789) should return 68957

function maxRot(n) {
  var string = n.toString()
  var array = [string]
  for (var i = 0; i <= string.length - 1; i++) {
    string = string.slice(0, i) + string.slice(i + 1) + string[i]
    array.push(string.split().join())
  }
  return Math.max.apply(null, array)
}
