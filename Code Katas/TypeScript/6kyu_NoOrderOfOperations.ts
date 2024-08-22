// Imagine if there were no order of operations. Instead, you would do the problem from left to right. For example, the equation 
// a
// +
// b
// ∗
// c
// /
// d
// a+b∗c/d would become 
// (
// (
// (
// a
// +
// b
// )
// ∗
// c
// )
// /
// /
// d
// )
// (((a+b)∗c)//d) (Math.floor(((a+b)*c)/d) in JS). Return None/null (depending on your language) if the equation is "".

// Task:
// Given an equation with a random amount of spaces greater than or equal to zero between each number and operation,
// return the result without order of operations. Note that if two numbers are spaces apart, act as if they were one
// number: 1   3 = 13. However, if given something % 0 or something / 0, return None/null.

// More about order of operations: here

// Key:
// ^ represents **
// / should always be rounded down(Math.floor) because the result will always be an integer
// Operations allowed:
// +, -, * , /, ^, %

// Example:
// no_order(2 + 3 - 4 * 1 ^ 3) returns 1

// because:

//   2 + 3 - 4 * 1 ^ 3
// = 2 + 3 - 4 * 1 ^ 3
// = 5 - 4 * 1 ^ 3
// = 1 * 1 ^ 3
// = 1 ^ 3
// = 1

function noOrder(s) {
    // Remove spaces from the string
    s = s.replace(/\s+/g, '');

    if (s === '') return null;

    // Regex to match numbers and operators
    const regex = /(\d+|[\+\-\*\/\^%])/g;
    const tokens = s.match(regex);

    // Initialize the result with the first number
    let result = parseInt(tokens[0], 10);

    // Iterate through the tokens in pairs (operator, number)
    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextNumber = parseInt(tokens[i + 1], 10);

        // Perform the operation based on the operator
        switch (operator) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
            case '*':
                result *= nextNumber;
                break;
            case '/':
                if (nextNumber === 0) return null;
                result = Math.floor(result / nextNumber);
                break;
            case '^':
                result = Math.pow(result, nextNumber);
                break;
            case '%':
                if (nextNumber === 0) return null;
                result %= nextNumber;
                break;
        }
    }

    return result;
}