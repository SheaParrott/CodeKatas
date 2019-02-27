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

let tickets = people => {
  let drawer = { '25': 0, '50': 0, '100': 0 }

  let changeDrawer = (payment, ...change) => {
    drawer[payment] = drawer[payment] + 1
    if (change.length)
      change.map(bill => {
        drawer[bill]--
      })
  }

  let sum = obj => {
    let totalArray = [...Object.keys(obj)]
      .map(key => [...Array(obj[key])].map(item => +key))
      .reduce((flat, toFlat) => {
        return flat.concat(toFlat)
      })
    return totalArray.length ? totalArray.reduce((a, c) => a + c) : 0
  }

  let cannotComplete = people.find(person => {
    if (person - 25 <= sum(drawer)) {
      if (person === 25) changeDrawer(25)
      else if (person === 50) {
        if (drawer['25']) changeDrawer(50, 25)
        else return true
      } else {
        if (drawer['50'] && drawer['25']) changeDrawer(100, 50, 25)
        else if (drawer['25'] >= 3) changeDrawer(100, 25, 25, 25)
        else return true
      }
    } else return true
  })

  return !!cannotComplete ? 'NO' : 'YES'
}

// best practice from solutions

function Clerk(name) {
  this.name = name

  this.money = {
    25: 0,
    50: 0,
    100: 0
  }

  this.sell = function(element, index, array) {
    this.money[element]++

    switch (element) {
      case 25:
        return true
      case 50:
        this.money[25]--
        break
      case 100:
        this.money[50] ? this.money[50]-- : (this.money[25] -= 2)
        this.money[25]--
        break
    }
    return this.money[25] >= 0
  }
}

function tickets(peopleInLine) {
  var vasya = new Clerk('Vasya')
  return peopleInLine.every(vasya.sell.bind(vasya)) ? 'YES' : 'NO'
}
