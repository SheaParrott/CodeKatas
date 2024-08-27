// 6 kyu Counting Duplicates

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

export function duplicateCount(text: string): number{
    if (!text) return 0

    const sortedArray: string[] = [...text.toLowerCase()].sort()
    let count: number = 0

    for (let i = 0; i < sortedArray.length; i) {
        const lastIndex: number = sortedArray.lastIndexOf(sortedArray[i])
        if (i === lastIndex) {
            i++
        } else {
            count++
            i = lastIndex + 1
        }
    }
    return count
}

// here is the best practice / clever from solutions
export function duplicateCountAgain(text: string): number{
    const values = text.toLowerCase();
    const distinctValues = [... new Set(values)]; 
    const count = (s: string) => values.split(s).length - 1 > 1 ;
    return distinctValues.filter(value => count(value)).length;
}