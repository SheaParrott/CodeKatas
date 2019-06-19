// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(int) {
  let string = ''
  for (let index = 0; index < int; index++)
    for (let i = 0; i < int; i++)
      string +=
        i + 1 !== int || (index + 1 === int && i + 1 == int) ? '+' : '+\n'
  return string
}

// best practice from solutions

function generateShape(n) {
  return ('+'.repeat(n) + '\n').repeat(n).trim()
}

// wow ^^ :O
// Okay, will play around with that method. If I have seen this it was a while back.

// pulled definition below from devdocs.io for easier reference

// The repeat() method constructs and returns a new string which contains the specified
// number of copies of the string on which it was called, concatenated together.
