// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son
//  (or in how many years he will be twice as old).

twiceAsOld = (d, s) => Math.abs(d - s * 2)

// best practice from solutions

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld)
}
