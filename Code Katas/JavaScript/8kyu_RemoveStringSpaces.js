// Simple, remove the spaces from the string, then return the resultant string.

const noSpace = x => x.replace(new RegExp('[ ]+', 'g'), '')

// best practice from solutions

function noSpace(x) {
  return x.replace(/\s/g, '')
}
