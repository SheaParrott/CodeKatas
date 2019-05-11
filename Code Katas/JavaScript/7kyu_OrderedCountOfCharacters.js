// Count the number of occurrences of each character and return it as a list of
// tuples in order of appearance.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

var orderedCount = function(text) {
  let answer = [],
    uniqArray = text
      .split('')
      .filter((value, index, self) => self.indexOf(value) === index)

  for (let i = 0; i < uniqArray.length; i++) {
    answer.push([
      uniqArray[i],
      text
        .split('')
        .reduce((acc, ch) => (ch === uniqArray[i] ? acc + 1 : acc), 0)
    ])
  }

  return answer
}

// submitting two best practices from solutions

// uno

const orderedCount = s =>
  Array.from(
    s
      .split('')
      .reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map())
  )

// dos

const orderedCount = str =>
  [...new Set([...str])].map(char => [char, str.split(char).length - 1])
