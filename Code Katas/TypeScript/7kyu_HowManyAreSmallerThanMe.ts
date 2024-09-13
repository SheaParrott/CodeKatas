// 7 kyu How many are smaller than me?

// Write a function that given, an array arr, returns an array containing at each index i theamount of numbers that
// are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]
// If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the
// much tougher version How many are smaller than me II?

export function smaller(nums: number[]): number[] {
    return nums.map((number, index) => index < nums.length - 1 ? nums.slice(index + 1).reduce((a, c) => number > c ? a+1 : a,0) : 0);
}

// This is a best practice from solutions
export function smallerAgain(nums: number[]): number[] {
    return nums.map((el, index) => nums.slice(index).filter(n => el > n).length);
}