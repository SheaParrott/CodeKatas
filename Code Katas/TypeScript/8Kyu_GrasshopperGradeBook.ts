// 8 kyu Grasshopper - Grade book

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

export function getGrade(a: number, b: number, c: number): string {
    const grades = [a,b,c]
    const average = grades.reduce((a, b) => a + b) / grades.length

    if (average >= 90) return 'A'
    if (average >= 80) return 'B'
    if (average >= 70) return 'C'
    if (average >= 60) return 'D'
    return 'F'
}

// Here is the best practice from solutions
export function getGradeAgain(a: number, b: number, c: number): string {
    const mean = (a + b + c) / 3;
    if (mean >= 90) return 'A';
    if (mean >= 80) return 'B';
    if (mean >= 70) return 'C';
    if (mean >= 60) return 'D';
    return 'F';
}