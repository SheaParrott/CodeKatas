// 8 kyu Reversed sequence

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

export const reverseSeq = (n: number): number[] => {
    const result: number[] = new Array(n);
    for (let i = 0; i < n; i++) result[i] = n - i;
    return result;
};