// 8 kyu Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"

export function remove(s: string): string {
    return s.replaceAll('!', '') + '!'
}

// this is the best practice from the solutions
export const removeAgain = s => s.replace(/\!/g,"") + "!";