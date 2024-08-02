// 6kyu Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

export function toCamelCase(str:string):string{
    const delimiter = '_'
    let string = str.replaceAll('-', delimiter)
    
    while(string.includes(delimiter)) {
      const index: number = string.indexOf(delimiter) 
      if (index > 0) {
        string = string.replace(delimiter + string[index+1], string[index+1].toUpperCase())
      }
    }
    return string;
}

// Here is the best practice / clever

export function toCamelCaseString(str:string):string{
    return str.replace(/[-_](.)/g, (_,char)=>char.toUpperCase())
}

// I like this solution better
export function toCamelCaseAgain(str:string):string{
    return str
    .split(/[-_]/)
    .map((word, index) => 
      index === 0 
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  }