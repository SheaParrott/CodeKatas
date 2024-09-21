// 8 kyu Count of positives / sum of negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

export function countPositivesSumNegatives(input: number[] | null): [number, number] | [] {
    if (!input || input.length === 0) return [];

    let positiveCount = 0;
    let negativeSum = 0;

    for (const number of input) {
        if (number > 0) positiveCount++;
        if (number < 0) negativeSum += number;
    }

    return [positiveCount, negativeSum];
}

// I considered going down this path because it is a clever way to solve this problem but my
// solution is more performant so I stuck with it. 
// Nonetheless, this is a clever solution
export function countPositivesSumNegativesAgain(input: any) {
    return input && input.length
      ? [
          input.filter((p: number) => p > 0).length,
          input
            .filter((n: number) => n < 0)
            .reduce((a: number, b: number) => a + b, 0),
        ]
      : [];
}

// This is a clever one liner
export function countPositivesSumNegativesYetAgain(input: any[] | null): number[] {
    return !input || input.length < 1? []: [input.filter(a => a > 0).length, input.reduce((a, b) => a + (b < 0 ? b : 0), 0)];
}