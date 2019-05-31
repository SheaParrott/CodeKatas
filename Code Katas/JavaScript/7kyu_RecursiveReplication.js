// You need to design a recursive function called replicate which will receive arguments times and number.

// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

// As tempting as it may seem, do not use loops to solve this problem.

let array = []

function replicate(times, number) {
  if (times > 0) {
    array.push(number)
    times--
    return replicate(times, number)
  } else {
    let a = array
    array = []
    return a
  }
}

// best practice from solutions. I like this, I didn't think to try this route.
// I took this as a challenge to not use any iterators.

function replicate(times, number) {
  return times > 0 ? Array(times).fill(number) : []
}
