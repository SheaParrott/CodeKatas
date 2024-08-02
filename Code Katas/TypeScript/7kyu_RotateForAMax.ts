// 7 kyu Rotate for a Max


// Let us begin with an example:

// Take a number: 56789. Rotate left, you get 67895.

// Keep the first digit in place and rotate left the other digits: 68957.

// Keep the first two digits in place and rotate the other ones: 68579.

// Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

// You have the following sequence of numbers:

// 56789 -> 67895 -> 68957 -> 68579 -> 68597

// and you must return the greatest: 68957.

// Task
// Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

// So max_rot (or maxRot or ... depending on the language) is such as:

// max_rot(56789) should return 68957

// max_rot(38458215) should return 85821534


export function maxRot(n: number): number {
    const potentialOutputNumbers: number[] = [n];
    let array: string[] = n.toString().split(''); // this is the array we are mutating to create the potential output numbers
    
    for (let i = 0; i + 1 < array.length; i++) {
      if (i > 0) {
        array = [...array.slice(0, i), ...array.slice(i + 1), array[i]];
      } else {
        array = [...array.slice(i + 1), array[i]];
      }; 
      const potentialOutputNumber: number = Number(array.join(''));
      
      potentialOutputNumbers.push(potentialOutputNumber);
    };
    
    return Math.max(...potentialOutputNumbers);
}


// There were not many votes for best practice. This solution tied with many others but used less lines of code.
export function maxRotation(n:number):number {
    let maxNumber = n;
    let rotationString = String(n);
    for(let i = 0; i < rotationString.length; i++){
      rotationString = rotationString.slice(0, i) + rotationString.slice(i + 1) + rotationString[i];
      maxNumber = Math.max(maxNumber, Number(rotationString));
    }
    return maxNumber;
}