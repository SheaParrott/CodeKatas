// 8 kyu Short Long Short

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer
// string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
// ShortLongShort.solution("1", "22"); // returns "1221"
// ShortLongShort.solution("22", "1"); // returns "1221"

export const shortLongShort = (a:string, b:string): string => a.length < b.length ? a+b+a : b+a+b;


// this is another way this could be solved but is actually slightly less performant.
// However may be consideder to be more readable.
// String concatenation using + is typically faster in JavaScript because it's more direct.
// Template literals offer more flexibility (e.g., multi-line strings, embedded expressions),
// but that flexibility comes with a small cost.
// Template literals may be more readable, especially when dealing with more complex expressions,
// but in this case, the readability improvement is minimal since the logic is simple.
export function shortLongShortAgain(a: string, b: string) {
    return (a.length < b.length) ? `${a}${b}${a}` : `${b}${a}${b}`;
}