// 6 kyu Unique In Order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any
// elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

export function uniqueInOrder (array: string | (string | number)[]):(string | number)[] {
    let returnValue: (string | number)[] = []
        for (let i = 0; i < array.length; i++) {
        if (array[i] != array[i + 1]) returnValue.push(array[i])
    }
    return returnValue
}

// This is a clever solution
export function uniqueInOrderAgain (iterable: string | (string | number)[]):(string | number)[] {
    return [...iterable].filter((x,i)=>x!=iterable[i-1]);
};