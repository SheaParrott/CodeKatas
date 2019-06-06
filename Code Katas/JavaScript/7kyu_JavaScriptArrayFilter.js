// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter
//  functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

const getEvenNumbers = a => a.filter(n => !(n % 2))

// best practice from solutions. Same as mine with slightly different syntax

function getEvenNumbers(numbersArray) {
  return numbersArray.filter(function(num) {
    return !(num % 2)
  }) // 0 is falsy
}
