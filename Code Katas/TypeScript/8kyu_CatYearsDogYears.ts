// 8 kyu Cat years, Dog years

// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
    let catYears = 0
    let dogYears = 0

    for (let i = 0; i < humanYears; i++) {
        if (i === 0) {
            catYears = 15
            dogYears = 15
        } else if (i === 1) {
            catYears += 9
            dogYears += 9
        } else {
            catYears += 4
            dogYears += 5
        }
    }
    
    return [humanYears,catYears,dogYears];
}

// This is a clever solution
export function humanYearsCatYearsDogYearsAgain(humanYears: number): [number, number, number] {
    return [
        humanYears,                                             // Human
        humanYears > 1 ? 15 + 9 + ((humanYears - 2) * 4): 15,   // Cat
        humanYears > 1 ? 15 + 9 + ((humanYears - 2) * 5): 15,   // Dog
    ];
}