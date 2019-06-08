// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0
  const lookup = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < lookup.length; i++)
    vowelsCount += [...str].filter(c => c === lookup[i]).length

  return vowelsCount
}

// best practice from solutions

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length
}
