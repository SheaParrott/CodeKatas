// Complete the method/function so that it converts
// dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized
// only if the original word was capitalized.

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
  let answer = str.split('')
  for (i = 0; i < answer.length; i++) {
    if (answer[i] === '_' || answer[i] === '-') {
      answer.splice(i, 1)
      answer[i] = answer[i].toUpperCase()
    }
  }
  return answer.join('')
}

// below is the best practice rating and highest clever
// rating from solutions
//
// learned about the match and charAt methods
// The match() method retrieves the matches when matching a
// string against a regular expression.
// The String object's charAt() method returns a new string
// consisting of the single UTF-16 code unit located at the
// specified offset into the string.

// chatAt EX)
// var sentence = 'The quick brown fox jumps over the lazy dog.';

// var index = 4;

// console.log('The character at index ' + index + ' is ' + sentence.charAt(index));
// // expected output: "The character at index 4 is q"

function toCamelCase(str) {
  var regExp = /[-_]\w/gi
  return str.replace(regExp, function(match) {
    return match.charAt(1).toUpperCase()
  })
}
