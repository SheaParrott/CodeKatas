// 6 kyu Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.



export class Challenge {
    static solution(number: number) {
      if (number < 0) return 0
  
      const firstNumber: number = 3
      const secondNumber: number = 5
      const valuesToSum: number[] = []
  
      for (let i = firstNumber; i < number; i+= firstNumber) {
        valuesToSum.push(i)
      }
      
      for (let i = secondNumber; i < number; i+= secondNumber) {
        if (!valuesToSum.find(n => n === i)) {
          valuesToSum.push(i)
        }
      }
      
      return valuesToSum.reduce((a, c) => a + c, 0)
    }
}

// here is the best practice from the solutions. I find this to be a clever use of the modulus operator, well done!

export class ChallengeAgain {
    static solution(num: number): number {
      let total: number = 0;
      for (let i: number = 0; i < num; i++) {
        total += (i % 5 == 0 || i % 3 == 0) ? i : 0;
      }
      return total;
    }
}