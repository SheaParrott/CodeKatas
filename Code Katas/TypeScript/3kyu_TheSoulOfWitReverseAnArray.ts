// 3 kyu The soul of wit: reverse an array

// No time for stories. Reverse an array, return the result. Do whatever you want with the original
// array. Don't use Array.prototype.reverse.

// You have 47 bytes to spare.

// Example: [1, 2, 3] → [3, 2, 1]

// And this time you won't be able to do the thing from that kata.

// require, import and from are't allowed as well.

export let reverse=(a:any)=>a.map(a.pop,[...a])

// Here is another way to solve this. Function name was changed to prevent errors in the IDE.
export let reverseAgain=(a:any)=>[...a].map(a.pop,a)