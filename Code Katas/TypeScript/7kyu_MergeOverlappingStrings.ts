// 7 kyu Merge overlapping strings

// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string
// with the start of the second string together when they are an exact match.

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
// NOTE: The algorithm should always use the longest possible overlap.

// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"


export const mergeStrings = (first: string, second: string): string => {
    let returnValue: string = '';
    let startingWord: string = first
    let endingWord: string = second

    for (let i = 0; i <= startingWord.length; i++) {
        const potentialOverlap = startingWord.slice(i) 
        
        if (second.startsWith(potentialOverlap)) {
            returnValue = startingWord.slice(0, i) + endingWord
            break;
        } else if (i === startingWord.length && startingWord != second) {
            startingWord = second
            endingWord = first
            i = 0
        }
    }

    if (returnValue === '') {
        returnValue = first + second
    }

    return returnValue
}


// This is a best practice from solutions
export const mergeStringsAgain = (first: string, second: string): string => {
    let overlap = 0;

    for (let i = 1; i <= first.length; i++) {
        if (first.slice(-i) === second.slice(0, i)) {    
            overlap = i;
        }
    }

      return first + second.slice(overlap);
}

// This is another best practice from solutions
export const mergeStringsOnceMore = (first: string, second: string): string => {

    for ( let i = second.length; i >= 0 ; i--) {
        if (first.endsWith(second.slice(0, i))) {
            return first + second.slice(i, second.length)
        }
    }

    return ''
}

// This is a clever solution
export const mergeStringsOnceAgain = (first: string, second: string) => (first + ' ' + second).replace(/(.*) \1/, '$1')