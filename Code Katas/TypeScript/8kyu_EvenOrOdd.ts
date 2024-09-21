// 8 kyu Even or Odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

export const evenOrOdd = (n:number): "Even" | "Odd" => n % 2 === 0 ? "Even" : "Odd";