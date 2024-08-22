// 7 kyu Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with
// its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

export function descendingOrder(n: number): number {
    return Number(
        JSON
          .stringify(n)
          .split("")
          .sort((a, b) => Number(b)-Number(a))
          .join('')
    )
}

// Here is the best practice / clever solution. It's very similar to my solution.
export function descendingOrderAgain(n: number | null | undefined): number | null | undefined {
    return n ? parseInt(n.toString().split("").sort().reverse().join("")) : n;
}