// 8 kyu Convert to Binary

// Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is the same as the decimal representation of d.

// Examples:

// 1  ->    1  (because  1 is    0b1 in binary)
// 5  ->  101  (because  5 is  0b101 in binary)
// 11 -> 1011  (because 11 is 0b1011 in binary)

export const toBinary = (n: number): number => parseInt(n.toString(2), 10);

// This is the best practice from solutions
export function toBinaryAgain(n:number):number {
    return parseInt(n.toString(2));
}