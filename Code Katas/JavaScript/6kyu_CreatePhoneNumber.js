// Write a function that accepts an array of 10 integers
// (between 0 and 9), that returns a string of those numbers
// in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
//  // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this
// challenge. Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
  if (numbers.length !== 10) {
    return
  }
  let string = numbers.toString().replace(/,/g, '')
  return (
    '(' +
    string.slice(0, 3) +
    ') ' +
    string.slice(3, 6) +
    '-' +
    string.slice(6 - 10)
  )
}

// best practice from solutions

function createPhoneNumber(numbers) {
  numbers = numbers.join('')
  return (
    '(' +
    numbers.substring(0, 3) +
    ') ' +
    numbers.substring(3, 6) +
    '-' +
    numbers.substring(6)
  )
}

// another best practice with less votes (I like this solution)

function createPhoneNumber(numbers) {
  var format = '(xxx) xxx-xxxx'

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i])
  }

  return format
}

// Here is some regex magic! I'm going to master this kind of approach!

function createPhoneNumber(numbers) {
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3')
}
