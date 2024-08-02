// 7 kyu
// Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return
// the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


// there are two major problems with the initial value. First it is a single string containing numbers.
// Second, the numbers are of type string. I needed to solve for this before I can begin to evaluate
// the highest and lowest numbers to then return the dersired output. In order for me to evaluate the
// numbers I needed to first get the numbers in a list I can evaulate individually therefore I chose to
// use split() on the empty space given the instructions stated all numbers would be separated by a space,
// this solves for my first major problem. Next, I needed to convert the string values in the list, or array,
// that I just created using split(). I chose to do this using the built in JS method Number() to convert the
// strings into numbers. The instructions stated "All numbers are valid Int32, no need to validate them." so
// I did not validate any of the numbers. I was able to use map() to itterate through the array of string numbers
// using Number() to finally have a list of numbers I can then evaualte to find the highest and lowest value. To
// do so I sorted the array of numbers from lowest to highest.
// Finally, I was set up for success to return the desired value of a string value returning the highest number
// then the lowest number separated by one space. To do so I returned a new string using string interpolation
// to insert the indexed values from the array. I used the .length property that is found on all array
// instances to get the length of the array. Given array indexes start at 0 I needed to subtract 1 to get
// last item in the array. That provided me the last item in the array for the first number to be returned in the
// string. To get the lowest number I needed to get the first item in the array. Given arrays are zero based
// I inserted the first item in the array using the value 0 into the string interpolation.
// voilà, we have the desired output! :D
// I could make this code more readable by creating new variables for each step of this process but I chose not
// to, I believe the varable is named in a manner that communicates what it is. Plus this is a pretty simple
// solution and problem. I think most would be able to look at this and determine what is going on quickly enough.
function highAndLow(numbers){
    const sortedArrayOfNumbers = numbers.split(' ').map(n => Number(n)).sort((a, b) => a - b)
    return `${sortedArrayOfNumbers[sortedArrayOfNumbers.length - 1]} ${sortedArrayOfNumbers[0]}`
  }

// Here is the best practice / clever submission for this code kata. Well done!!
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}