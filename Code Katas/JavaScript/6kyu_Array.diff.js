// Your goal in this kata is to implement a difference function,
//  which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in
// list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be
// removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
  return a.filter(x => !b.includes(x))
}

// best practice from solutions. I believe my solution is simpler
// and has better readability

function array_diff(a, b) {
  return a.filter(function(x) {
    return b.indexOf(x) == -1
  })
}
