// 4 kyu Sum of Intervals

// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [
//    [1, 2],
//    [6, 10],
//    [11, 15]
// ] ) => 9

// sumIntervals( [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ] ) => 7

// sumIntervals( [
//    [1, 5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ) => 19

// sumIntervals( [
//    [0, 20],
//    [-100000000, 10],
//    [30, 40]
// ] ) => 100000030
// Tests with large intervals
// Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].


// Here is my POC
let array: any[] = [
    'a',
    'b',
    'a',
    'c',
    'd',
    'e'
  ]
  
  for (let i = 0; i < array.length; i++) {
    const foundIndex = array.findIndex((element, index) => {
      if (index != i) {
        return element == array[i]
      } else {
        return false
      }
    })
  
    console.log('foundIndex: ', foundIndex)
    if (foundIndex > 0) {
      array[foundIndex] += array[i]
      array[i] = undefined
    }
  }
  
console.log('array: ', array)

// here is my solution
export function sumOfIntervals(intervals: [number, number][]): number {
  return intervals.length === 1 ?
    intervals[0].reduce((a: number, c: number): number => c-a) :
    intervals
      .map((interval, i) => {
        const foundIndex = intervals.findIndex((element, index) =>
          index > i && (
            interval[0] === element[0] ||
            element[0] > interval[0] && element[0] < interval[1] ||
            interval[0] > element[0] && interval[0] < element[1]
          )
        )

        if (foundIndex > 0) {
          intervals[foundIndex] = [
            interval[0] < intervals[foundIndex][0] ? interval[0] : intervals[foundIndex][0],
            interval[1] > intervals[foundIndex][1] ? interval[1] : intervals[foundIndex][1]
          ]
          return undefined as any
        } else {
          return interval
        }
      })
      .filter(interval => !!interval)
      .reduce((a, c) => a + (c[1] - c[0]), 0)
}

// here is the best practice solution
export function sumOfIntervalsAgain(intervals: [number, number][]): number {
  let sortedIntervals = intervals.sort((first,second) => first[0] - second[0]);
  let currentInterval = sortedIntervals[0];
  let result = 0;
  for (let index = 1; index < sortedIntervals.length; index++) {
    if (sortedIntervals[index][0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(sortedIntervals[index][1], currentInterval[1]);
    }
    else {
      result += currentInterval[1] - currentInterval[0];
      currentInterval = sortedIntervals[index];
    }
  }
  return result + currentInterval[1] - currentInterval[0];
}

// here is the most clever solution
export function sumOfIntervalsYetAgain(intervals: [number, number][]) {
  const sorted = intervals.slice().sort((a,b)=> a[0]-b[0] || b[1]-a[1] )
  let top=-Infinity, sum=0
  for(let [a,b] of sorted){
    if(top<a) top=a
    if (top<b){
      sum += b-top
      top = b
    }
  }
  return sum
}