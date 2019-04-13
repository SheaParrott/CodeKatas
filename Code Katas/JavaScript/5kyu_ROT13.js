// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled.
// Maybe you can decipher it? According to Wikipedia, ROT13
// (http://en.wikipedia.org/wiki/ROT13) is frequently used to
// obfuscate jokes on USENET.

// Hint: For this task you're only supposed to substitue characters.
// Not spaces, punctuation, numbers etc. Test examples:

// rot13("EBG13 rknzcyr.") == "ROT13 example.";
// rot13("This is my first ROT13
// excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"

const rot13 = string =>
  [...string]
    .map(letter => {
      if (letter.match(/[a-m]/i)) {
        return String.fromCharCode(letter.charCodeAt() + 13)
      } else if (letter.match(/[n-z]/i)) {
        return String.fromCharCode(letter.charCodeAt() - 13)
      } else {
        return letter
      }
    })
    .join('')

// best practice from solutions

function rot13(str) {
  return str.replace(/[a-z]/gi, function(x) {
    return String.fromCharCode(
      x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13 : -13)
    )
  })
}
