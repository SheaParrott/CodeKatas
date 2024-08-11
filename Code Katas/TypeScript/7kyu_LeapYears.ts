// 7 kyu Leap Years

// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.


export function isLeap(year: number):boolean {
    return new Date(year, 1, 29).getDate() === 29
}

// this is the best practice solution and clever soltion

export function isLeapAgain(year: number):boolean {
    return year % 400 == 0 || year % 100 != 0 && year % 4 == 0
}