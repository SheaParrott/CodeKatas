// 6 kyu Multiplication table

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

export function multiplicationTable (size: number): number[][] {
    let returnArray: number[][] = [];
    for (let i = 0; i < size; i++) { // creates the required number of nested arrays
      let currentValue: number = i + 1
      let summedValue: number = 0
      let nestedArray: number[] = Array(size).fill(undefined)
      
      for (let j = 0; j < nestedArray.length; j++) { // fills the nested array with the required values
        summedValue += currentValue
        nestedArray[j] = summedValue
      }
      returnArray.push(nestedArray)
    }
    return returnArray
}

// here is a simpler implementation that is similar to my solution. This is more condensed, well done!
export const multiplicationTableAgain = (size: number): number[][] => {
    const result = [];
    for (let i = 1; i <= size; i++) {
      const resultSubArr: number[] = [];
      for (let j = 1; j <= size; j++) {
        resultSubArr.push(i * j);
      }
      result.push((resultSubArr) as never);
    }
    return result;
};

// This is a clever solution. I tried Array(size) initially but ran into issues.
// Utilizing the spread opperater to initialize then map was smart!
export function multiplicationTableOneMoreTime (size: number): number[][] {
    return [...Array(size)].map((_, i) => [...Array(size)].map((_, j) => (i + 1) * (j + 1)))
}