// Your task is to write a function, which takes two arguments and
// returns an array. First argument is an array of values, scecond
// is multiplier. Function is named "multiplyAndFilter" and it should
// filter all non-numeric values and multiply the rest by given
// multiplier.

const multiplyAndFilter = (array, multiplier) => {
  return array
    .filter(value => typeof value === 'number')
    .map(n => n * multiplier)
}

// best practice from solutions. Same as my solutions minus the
//  brackets so no need for the return statement

const multiplyAndFilter = (array, multiplier) =>
  array.filter(a => typeof a == 'number').map(a => a * multiplier)
