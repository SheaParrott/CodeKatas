// 6 kyu Is the number odd? (TS type)

// Task
// Create a type IsOdd that will receive a number N (IsOdd<N extends number>). The type should return true if the provided number is odd, and false if it's not.

// Additional Notes:

// The number will always be an integer.
// Range for N is: 
// −
// 1
// 0
// 9
// <
// N
// <
// 1
// 0
// 9
// −10 
// 9
//  <N<10 
// 9
 
// Examples
// type A = IsOdd<13>;     // A = true
// type B = IsOdd<12>;     // B = false
// type C = IsOdd<0>;      // C = false
// type D = IsOdd<1>;      // D = true
// type E = IsOdd<103456>; // E = false
// type F = IsOdd<-25>;    // F = true
// Good luck!



// Utility type to get the absolute value of a number as a string
type Abs<N extends number> = `${N}` extends `-${infer Pos}` ? Pos : `${N}`;

// Helper type to check if the last character of a string is odd
type IsLastCharOdd<S extends string> =
  S extends `${infer F}${infer R}`
    ? R extends ""
      ? F extends "1" | "3" | "5" | "7" | "9"
        ? true
        : false
      : IsLastCharOdd<R>
    : false;

// Main type to determine if a number is odd
export type IsOdd<N extends number> = IsLastCharOdd<Abs<N>>;

// ---------------------------

// here is the best practice / clever from solutions
export type IsOddAgain<N extends number> = `${N}` extends `${infer L}${'1'|'3'|'5'|'7'|'9'}` 
  ? true
  : false;
;

// Here is another best practice / clever from solutions
export type IsOddOnceMore<N extends number> =
  `${N}` extends `${infer _}1` ? true :
  `${N}` extends `${infer _}3` ? true :
  `${N}` extends `${infer _}5` ? true :
  `${N}` extends `${infer _}7` ? true :
  `${N}` extends `${infer _}9` ? true : false;