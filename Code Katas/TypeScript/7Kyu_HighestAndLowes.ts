// 7 kyu Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

export class Kata {
    static highAndLow(numbers: string): string {
      const array: number[] = numbers.split(' ').map((s: string): number => Number(s))

      return `${Math.max(...array)} ${Math.min(...array)}`
    }
}

// My solution matches the best practices. Something interesting about this one is how we did not create
// an anonymous function within the .map() but was able to cast the string to a Number simply by providing
// the JavaScript Number method. This may not be best practice due to potential readability issues but is
// certainly a clever shorthand.
export class KataAgain {
    static highAndLow(numbers: string): string {    
      const numberList = numbers.split(' ').map(Number);   
      return `${Math.max(...numberList)} ${Math.min(...numberList)}`;
    }
}