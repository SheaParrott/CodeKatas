// 8 kyu
// Even or Odd

// Create a function that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.


// Here is my solution using a ternary leveraging the modulus operator
function evenOrOdd(number) {
    return number % 2 == 0 ? "Even" : "Odd"
}

// Here is the best practice. Makes sense this is more readable vs the ternary.
// Albeit, more verbos for such a simple method.
function evenOrOdd(number) {
    if (number % 2 == 0){
      return "Even"
    }else{
      return "Odd"
      }
  }