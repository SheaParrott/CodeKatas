// 6 kyu Reverse or rotate?

// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str == "" return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// ("123456987654", 6) --> "234561876549"
// ("123456987653", 6) --> "234561356789"
// ("66443875", 4) --> "44668753"
// ("66443875", 8) --> "64438756"
// ("664438769", 8) --> "67834466"
// ("123456779", 8) --> "23456771"
// ("", 8) --> ""
// ("123456779", 0) --> "" 
// ("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

export function revRot(s:string, sz:number): string {
    if (sz <= 0 || s == '' || sz > s.length ) return ''
    
    let index: number = (Math.floor(s.length / sz)) * sz
    let newStringArray: string[] = s.slice(0, index).split('')
    let returnValue: string = ''
    
    for (let i = sz; i <= newStringArray.length; i+=sz) {
      const array = newStringArray.slice((i - sz), i)
      if ((array.map(s => Number(s)).reduce((a, c) => a + c)) % 2) { // rotate
        returnValue += [...array.slice(1), array[0]].join('')
      } else { // reverse
        returnValue += array.reverse().join('')
      }  
    }
  
    return returnValue
}

// here is the best practice solution
export function revRotAgain(s:string, sz:number): string {
    if (!sz) return ''
    const chunks: string[][] = [];
    for (let i = 0; i < s.length; i += sz) {
       chunks.push(s.slice(i, i + sz).split(''));
    }
    if (chunks[chunks.length-1].length < sz) chunks.pop();
    
    return chunks.map(chunk => (
      chunk.reduce((sum, n) => sum + Math.pow(+n, 3), 0) % 2 === 0 ? 
        chunk.reverse().join('') : 
        chunk.slice(1).join('') + chunk[0]
    )).join('')
}

// here is a clever one liner
export function revRotYetAgain(s:string, sz:number): string {
    return s
      .match(new RegExp(`.{${sz}}`, 'g'))
      ?.map(block => {
        const isDiv = !(block.split('').reduce((sum, n) => sum + Math.pow(+n, 3), 0) % 2)
        return isDiv ? block.split('').reverse().join('') : (block.slice(1) + block[0])
      })
      ?.join('') || ''
}

// here is another clever one liner
export const revRotYetAgainAgain = (s: string, sz: number): string =>
    sz === 0 || sz > s.length ?
        '' :
        s
        .match(new RegExp(`.{${sz}}`, 'g'))!
        .map(c => c.match(/[13579]/g)?.length! % 2 ? c.replace(/^(.)(.*)$/, '$2$1') : c.split('').reverse().join(''))
        .join('')