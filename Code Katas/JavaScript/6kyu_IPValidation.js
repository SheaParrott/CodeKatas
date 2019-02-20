// Write an algorithm that will identify valid IPv4 addresses
// in dot-decimal format. IPs should be considered valid if
// they consist of four octets, with values between 0 and 255,
//  inclusive.

// Input to the function is guaranteed to be a single string.

// Examples
// Valid inputs:

// 1.2.3.4
// 123.45.67.89
// Invalid inputs:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Note that leading zeros (e.g. 01.02.03.04) are considered invalid.

function isValidIP(str) {
  let array = str.split('.')
  let regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  if (!str.match(regex)) {
    return false
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].split('').length > 1 && array[i][0] == 0) {
      return false
    }
  }
  return true
}

// What I took away from this is the extent of bad IP addresses that
//  can be passed in and learned how to prevent each edge case. As
//  well as, I expanded my knowledge in regex to complete this task

// best practice and most clever from solutions
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str)
}
