// You have to write a function uniqueNumbers which returns unique numbers array.
// You don't need to validate input arg arr. Retain the original order of the input.

// Examples:

// uniqueNumbers([1,1,2,2]) => [1,2]
// uniqueNumbers([1,2,3,1]) => [1,2,3]

function uniqueNumbers(numbersArray) {
  let uniq = []
  for (let i = 0; i < numbersArray.length; i++)
    if (!uniq.includes(numbersArray[i])) uniq.push(numbersArray[i])
  return uniq
}

// best practice from solutions. Learned about set() in JS.
// This is very cool, I will make good use of this method

const uniqueNumbers = numbers => [...new Set(numbers)]
