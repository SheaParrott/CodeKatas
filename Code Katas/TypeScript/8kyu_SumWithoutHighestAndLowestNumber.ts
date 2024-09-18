// 8 kyu Sum without highest and lowest number

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with
// only 1 element, return 0.

export function sumArray(array:number[] | null) : number {
    if (array !== null && array !== undefined && array?.length >= 3) return array.sort((a,b) => a-b).slice(1, array.length-1).reduce((a,c) => a+c);
    return 0;
}

// This is a clever solution. While both are itterating through the array the same number of times the .sort() method is more costly
// therefore making this solution more performant
export function sumArrayAgain(array:number[]) : number {
    if (array && array.length > 1) {
        return (array.reduce((a, b) => a + b, 0) - Math.max(...array) - Math.min(...array));
    }
    return 0;
}