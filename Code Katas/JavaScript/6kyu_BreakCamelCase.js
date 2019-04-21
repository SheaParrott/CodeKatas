// Complete the solution so that the function will break up camel casing,
// using a space between words.

// Example
// solution('camelCasing') // => should return 'camel Casing'

const solution = s =>
  Array.from(s)
    .map(character => (/[A-Z]/.test(character) ? ` ${character}` : character))
    .join('')

// best practice from solutions

function solution(string) {
  return string.replace(/([A-Z])/g, ' $1')
}
