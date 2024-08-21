// 6 kyu Find the missing letter

// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

export function findMissingLetter(array:string[]):string {
    let previousASCIICode: number = array[0].charCodeAt(0)
    
    for(let i = 1; i < array.length; i++) {
      if (array[i].charCodeAt(0) != previousASCIICode + 1) {
        return String.fromCharCode(previousASCIICode + 1)
      } else {
        previousASCIICode = array[i].charCodeAt(0)
      }
    }
    throw new Error("Invalid input")
}

// this is a clever solution. Although I would think it's less performant than the
// solution I provided given it's itterating an additional time.
export function findMissingLetterAgain(array:string[]):string
{
    return String.fromCharCode(1 + array.map(x => x.charCodeAt(0))
                                        .reduce((x, y) => y > x+1 ? x : y));
}

// this is the best practice / clever from the solutions
export function findMissingLetterYetAgain(array:string[]):string
{
    for(let i = 0; i < array.length; i++) {
        if(array[i].charCodeAt(0) + 1 != array[i+1].charCodeAt(0))
            return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
    throw new Error("Invalid input") // added this myself to prevent my linter from being angry with me lol
}