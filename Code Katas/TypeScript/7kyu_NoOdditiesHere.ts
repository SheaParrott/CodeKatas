// 7 kyu No oddities here

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

export const noOdds = (arr: number[]): number[] => arr.filter(n => n%2===0)