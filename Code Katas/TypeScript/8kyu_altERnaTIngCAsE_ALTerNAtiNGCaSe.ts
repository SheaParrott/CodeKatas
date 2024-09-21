// 8 kyu altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as 
// to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language;
// see the initial solution for details) such that each lowercase letter becomes uppercase
// and each uppercase letter becomes lowercase. For example:

// toAlternatingCase("hello world") === "HELLO WORLD"
// toAlternatingCase("HELLO WORLD") === "hello world"
// toAlternatingCase("hello WORLD") === "HELLO world"
// toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"
// toAlternatingCase("12345")       === "12345"                   // Non-alphabetical characters are unaffected
// toAlternatingCase("1a2b3c4d5e")  === "1A2B3C4D5E"
// toAlternatingCase("String.prototype.toAlternatingCase") === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

export function toAlternatingCase(s: string): string {
    return s.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            return char.toLowerCase();
        } else {
            return char;
        }
    }).join('');
}

// This is the best practice / clever from soltuions
export function toAlternatingCaseAgain(s: string): string {
    return s.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

// This is another clever solution as well as the most performant out of all 3 solutions
export function toAlternatingCaseYetAgain(s: string): string {
    return s.replace(/./g, x => /[a-z]/.test(x) ? x.toUpperCase() : x.toLowerCase());
}