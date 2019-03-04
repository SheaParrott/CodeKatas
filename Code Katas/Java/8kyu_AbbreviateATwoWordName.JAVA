// Write a function to convert a name into initials. This kata 
// strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

import java.util.*;
public class AbbreviateTwoWords {
  public static String abbrevName(String name) {
    String[] arr = name.split(" "); // created an array from the string split at the " "
    
    System.out.println(arr[0].charAt(0)); // finding first letter in of first word in array
    System.out.println(Arrays.toString(arr)); // how to print an array to the terminal. Needed to import java.util.Arrays then use Arrays.toString to complete

    return (arr[0].charAt(0) + "." + arr[1].charAt(0)).toUpperCase(); // we know the string/name is always two words so I am grabbing the first two items in the array and returning the first character of each joined with a "."
  }
}

// This is a new language I am looking into. Things gained from this 
// codekata are how to do some of the basics such as printing to the 
// terminal. How to print an array to the console, this was different in 
// the sense I needed to import something to make this happen. 

// best practice and clever marks from solutions

public class AbbreviateTwoWords {

  public static String abbrevName(String name) {
    return name.toUpperCase().replaceAll("(.).*\\s(.).*", "$1.$2");
  }
}