// 6 kyu Valid Braces

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

export function validBraces(braces: string): boolean {
    let array: string[] = []
    for(let i=0; i < braces.length; i++){
      if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
        array.push(braces[i])
      } else if(array.length === 0) {
        return false
      } else {
        let lastValue = array[array.length-1]
        if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '(')){
          array.pop()
        } else {
          break;
        }
      }
    }
    return array.length === 0
}

// here is the best practice solution
export function validBracesAgain(braces: string): boolean {
    const stack: string[] = [];
    const start = ['(', '[', '{'];
    const end = [')', ']', '}'];
    
    for (let index = 0; index < braces.length; index++) {
      const char = braces[index];
      
      if (start.indexOf(char) > -1) {
        stack.push(char);
        continue;
      }
      
      if (stack.pop() === start[end.indexOf(char)]) {
        continue;
      }
      
      return false;
    }
    
    return stack.length === 0;
}

// Here is the clever solution
export function validBracesYetAgain(braces: string): boolean {
    while (/\(\)|\[\]|\{\}/g.test(braces)) {
        braces = braces.replace(/\(\)|\[\]|\{\}/g, '')
    }
    return braces.length === 0
}