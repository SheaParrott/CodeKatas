// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the
//  alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let wordsArray = x.split(' ')
  let word = ''
  let number = 0

  for (let i = 0; i < wordsArray.length; i++) {
    let sum = 0

    for (let j = 0; j < wordsArray[i].length; j++)
      sum += alphabet.indexOf(wordsArray[i][j]) + 1

    if (sum > number) {
      number = sum
      word = wordsArray[i]
    }
  }
  return word
}

// best practice from solutions. I learned from this solution below that .indexOf works for a string.

function high(x) {
  //transform the input string into array & define a string of alphabetical latin characters
  var arr = x.split(' ')
  var str = 'abcdefghijklmnopqrstuvwxyz'
  //Iterate through the array with input words to find the one with the greatest sum
  var newArr = arr.map(function(word) {
    var sum = 0
    for (var i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i])
    }
    return sum
  })
  //Return the word with the greatest sum
  return arr[newArr.indexOf(Math.max(...newArr))]
}
