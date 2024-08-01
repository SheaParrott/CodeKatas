// Complete the solution so that it returns a formatted string. The return value should
// equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

function solution(value) {
  let array = value.toString().split('')

  for (let i = array.length; i < 5; i++) array.unshift(0)

  return `Value is ${array.join('')}`
}

// best practice from solutions.
// this was pretty smart, very nice! *insert clap emoji here*

function solution(value) {
  return 'Value is ' + ('00000' + value).slice(-5)
}
