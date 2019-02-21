// The new "Avengers" movie has just been released! There are a
// lot of people at the cinema box office standing in a huge
//  line. Each of them has a single 100, 50 or 25 dollars bill.
//  An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell
// a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change
// if he initially has no money and sells the tickets strictly
// in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and
//  give the change with the bills he has at hand at that moment.
//   Otherwise return NO.

function tickets(people) {
  let array = []
  console.log(people)
  for (let i = 0; i < people.length; i++) {
    let sum = array.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue
    }, 0)
    let due = 0
    if (sum < people[i] - 25) {
      return 'NO'
    } else {
      array.push(people[i])
      due = people[i] - 25
    }
    if (
      (due === 75 &&
        array.filter(value => value === 50).length === 0 &&
        array.filter(value => value === 25).length === 0) ||
      (due === 75 && array.filter(value => value === 25).length <= 2)
    ) {
      console.log('$75 due')
      return 'NO'
    } else if (
      (due === 50 && array.filter(value => value === 50).length < 1) ||
      (due === 50 && array.filter(value => value === 25).length < 2)
    ) {
      console.log('$50 due')
      return 'NO'
    }
    while (due > 0) {
      if (due >= 50 && array.find(value => value == 50)) {
        let value = array.find(value => value == 50)
        let index = array.indexOf(value)
        due = due - value
        array.splice(index, 1)
      } else if (due > 0) {
        let value = array.find(value => value == 25)
        let index = array.indexOf(value)
        due = due - value
        array.splice(index, 1)
      }
    }
  }

  return 'YES'
}

// challenged myself to do this solely using objects.
//  However, this has proven to be VERY slow. I will do this
//  again but work with arrays.
function tickets(p) {
  let obj = {}
  for (let i = 0; i < p.length; i++) {
    let sum = 0
    let due = 0
    for (var key in obj) {
      sum += key * obj[key]
    } // determine my sum
    if (sum < p[i] - 25) {
      return 'NO'
    } else {
      due += p[i] - 25
      obj[p[i]] = (obj[p[i]] || 0) + 1
    } // guard clase then added to object and check for amount due
    while (due > 0) {
      if (due >= 50 && obj[50]) {
        obj[50] = (obj[50] || 0) - 1
        due = due - 50
      } else if (due >= 50 && obj[25]) {
        obj[25] = (obj[25] || 0) - 1
        due = due - 25
      } else if (due < 50 && !(due === 0)) {
        if (obj[25]) {
          obj[25] = (obj[25] || 0) - 1
          due = due - 25
        } // loop to pay customer back
      }
    }
  }
  return 'YES'
}
