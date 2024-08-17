// 6 kyu Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

export function findUniq(arr: number[]): number {
    arr.sort((a, b) => a - b)
    return (arr[0] == arr[1] ? arr.pop() : arr[0]) as number
}


// this is the best practice / clever from solutions. I am pretty certain this is going to be slightly faster than my solution.
export function findUniqAgain(arr: Array<number>): number {
    arr = arr.sort()
    return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0]
}