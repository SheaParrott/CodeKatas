// 6 kyu Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form
// of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

export function createPhoneNumber(numbers: number[]): string {
    let format: string = '(xxx) xxx-xxxx'

    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', JSON.stringify(numbers[i]))
    }

    return format
}

// here is a best practice I selected out of the solutions. I chose this one due to it's readability.
export function createPhoneNumberAgain(numbers: number[]): string {
    const codeOfCountry = numbers.slice(0,3).join('');
    const middleNumbers = numbers.slice(3,6).join('');
    const lastNumbers = numbers.slice(6,10).join('');

    return `(${codeOfCountry}) ${middleNumbers}-${lastNumbers}`
}