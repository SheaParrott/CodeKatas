// 6 kyu Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that
// have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters
// and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

export function spinWords(words: string): string {
    return words
        .split(' ')
        .reduce((phrase, word, index) => phrase += ((index > 0 ? ' ' : '') + (word.length >= 5 ? [...word].reverse().join('') : word)), '')
}

// here is the best practice / clever from the solutions. While there are less characters this is less performant
// than my solution. I know this because I provided the same solution initially then refactored to use .reduce().
// I verified my statement by running both solutions multiple times but one could deduce my solution is more
// performant because it is itterating less while performaning roughly the same "if" logic.
export const spinWordsAgain = (words: string): string => words.split(' ')
                                                        .map(m => m.length >= 5 
                                                             ? m.split('').reverse().join('') 
                                                             : m)
                                                        .join(' ')