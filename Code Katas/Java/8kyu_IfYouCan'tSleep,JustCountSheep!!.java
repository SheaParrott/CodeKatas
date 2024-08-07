// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string 
// with a murmur: "1 sheep...2 sheep...3 sheep...". Input will 
// always be valid, i.e. no negative integers.

class Kata {
  public static String countingSheep(int num) {
    String answer = new String("");
    for (int i = 1; i <= num; i++) {
      answer += i + " sheep...";
    }
    return answer;
  }
}

// best practice from solutions

import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Kata {
  public static String countingSheep(int num) {
    return IntStream.rangeClosed(1, num)
                    .mapToObj(i -> i + " sheep...")
                    .collect(Collectors.joining());
  }
}
