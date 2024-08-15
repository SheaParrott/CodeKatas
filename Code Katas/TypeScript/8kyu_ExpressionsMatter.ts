// 8 kyu Expressions Matter

// Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.

// Example
// With the numbers 1, 2, and 3, here are some possible expressions:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// The maximum value that can be obtained is 9.

// Notes
// The numbers are always positive, in the range 1 ≤ a, b, c ≤ 10.
// You can use the same operation more than once.
// It is not necessary to use all the operators or parentheses.
// You cannot swap the operands. For example, with the given numbers, you cannot get the expression (1 + 3) * 2 = 8.
// Input and Output Examples
// expressionsMatter(1, 2, 3) ==> 9, because (1 + 2) * 3 = 9.
// expressionsMatter(1, 1, 1) ==> 3, because 1 + 1 + 1 = 3.
// expressionsMatter(9, 1, 1) ==> 18, because 9 * (1 + 1) = 18.

export function expressionsMatter(a: number, b: number, c: number): number {
    return [
      a * (b + c),
      a * b * c,
      a + b * c,
      (a + b) * c,
      a + b + c
    ].sort((a, b) => a-b).pop() as number
}

// this is the best practice from the solutions
export function expressionsMatterAgain(a: number, b: number, c: number): number {
   
    let one =  a * (b + c);
    let two = a * b * c;
    let three = (a + b) * c;
    let four = a + b + c;
    
    return Math.max(one, two, three, four);
 }