// 8 kyu Array plus array

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all
// their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

export const arrayPlusArray = (arr1 : number[], arr2 : number[]) : number => [...arr1, ...arr2].reduce((a, c) => a+c, 0);

// This is a clever solution
import _ from 'lodash';

export function arrayPlusArrayAgain(...args: number[][]): number {
  return _(args).flatten().sum();
}

// This solution is similar to mine but actually is slightly more performant.
// Concat method is specifically optimized for merging arrays, while the spread
// operator is a more general feature that might introduce additional overhead.
// This is particularly true for larger arrays or more frequent operations, due
// to the optimized nature of the concat method compared to the spread operator
export const arrayPlusArrayYetAgain = (arr1 : number[], arr2 : number[]) => arr1.concat(arr2).reduce((a, b) => a + b);