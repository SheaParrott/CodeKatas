// 6 kyu Hamming Distance

// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the
// function so that it returns the number of positions where the input strings do not match.

// Examples:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2
// You can assume that the two inputs are ASCII strings of equal length.

export function hammingDistance(a: string, b: string): number {
    if (!a && !b || a == b) {
        return 0
    } else {
        return a.split('').reduce((a, c, index) => a + (b[index] === c ? 0 : 1), 0)
    }
}

// here is the best practice / clever from the solutions. I leanred that you can use the spread operator
// on a string to split a string up, that's a potentially valuable piece of knowledge to have.
export function hammingDistanceAgain(a: string, b: string): number {
    return [...a].filter((x, i) => x != b[i]).length
}