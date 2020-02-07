Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

Good luck!


function grabscrab(anagram, dictionary) {

  let possibleWords = []
  
  for (let i = 0; i < dictionary.length; i++) {
    let word = dictionary[i]
    if (word.length === anagram.length) { // if the chatacter length of the strings are the same then proceed to check if this could be the word the pirate is trying to enunciate
      for (let index = 0; index < anagram.length; index++) {
        if (word.includes(anagram[index])) { // if there is a matching character
          word = word.replace(anagram[index], '') // remove character from word
        }
      }
      if (!word.length) { // if all letters have been removed from the possible word then push that string to the array as a possible word the pirate was trying to say
        possibleWords.push(dictionary[i])
      }
    }
  }
  
  return possibleWords
}


// best practice 

function grabscrab(anagram, dictionary) {
  anagram=anagram.split('').sort().join('');
  return dictionary.filter(a=>a.split('').sort().join('')===anagram)
}
