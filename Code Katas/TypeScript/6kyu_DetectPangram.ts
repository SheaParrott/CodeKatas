// 6 kyu Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

export const isPangram = (phrase: string): boolean => {
    const letters: string = "abcdefghijklmnopqrstuvwxyz";
    const lowerCasePhrase: string = phrase.toLowerCase();
  
    return letters.split('').every(char => lowerCasePhrase.includes(char));
}

// this solution is clever
export const isPangramAgain = (phrase: string): boolean => new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;

// this is similar to mine but removes the step of creating an array from a string of all letters in the alphabet. While less readable this is more performant.
export const isPangramOneMoreTime = (phrase: string): boolean =>
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        .every(l => phrase.toLowerCase().includes(l))