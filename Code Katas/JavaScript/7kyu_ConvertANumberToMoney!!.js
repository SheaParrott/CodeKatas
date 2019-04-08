// Simplified number to money converter.

// Note:

// truncate to 2 decimal places
// don't keep trailing zeros
// input will be a positive number with at least two trailing digits
// Examples:

// 2546.2562 --> '2,546.25'

// 1500.342626 --> '1,500.34'

// 100.2134 --> '100.21'

// Taken from 'Formatting a number as price' (Kyu 5)

const numberToMoney = n => {
  let string = n.toString()
  return Number(string.slice(0, string.indexOf('.') + 3)).toLocaleString('en')
}

// best practice from solutions

function numberToMoney(n) {
  return String(Math.floor(n * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
