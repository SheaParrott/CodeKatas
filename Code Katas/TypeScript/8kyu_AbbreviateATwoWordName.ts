// 8 kyu Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

export function abbrevName(name: string): string {
    const names = name.split(' ');
    return names[0].toUpperCase()[0] + '.' + names[1].toUpperCase()[0];
}

// This is my one liner but I chose to submit the solution above because it is more performant
export const abbrevNameAgain = (name: string): string => name.split(' ').map(s => s.toUpperCase()[0]).join('.');