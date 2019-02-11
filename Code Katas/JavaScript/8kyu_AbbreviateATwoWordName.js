// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

// this would work for two words strictly

function abbrevName(name) {
  var nameArray = name.split(' ')
  return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase()
}

// this would work if its decided to use more than two words

function abbrevName(name) {
  let array = name.split(' ')
  let initials = ''
  for (i = 0; i < array.length; i++) {
    i > 0 ? (initials = initials + '.' + array[i][0]) : (initials = array[i][0])
  }
  return initials.toUpperCase()
}
