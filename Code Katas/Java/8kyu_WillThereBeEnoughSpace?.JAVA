// The Story:
// Bob is working as a bus driver. However, he has become extremely 
// popular amongst the city's residents. With so many passengers 
// wanting to get aboard his bus, he sometimes has to face the 
// problem of not enough space left on the bus! He wants you to
//  write a simple program telling him if he will be able to fit 
//  all the passengers.
// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus.
// wait is the number of people waiting to get on to the bus.
// If there is enough space, return 0, and if there isn't, return 
// the number of passengers he can't take.

// Usage Examples:
// >>> enough(10, 5, 5)
// 0 # He can fit all 5 passengers
// >>> enough(100, 60, 50)
// 10 # He can't fit only 10 out of 50 waiting

public class Bob {
  public static int enough(int cap, int on, int wait){
   return on + wait > cap ? on + wait - cap : 0;
  }
}

// Best practice from solutions. We are never trying to change the values
// of capacity, alreadyOn or waiting. This makes sense to make them a 
// final. Great use of data types. I believe common practice of final
// is to make them all caps. If this was my solution thats one thing I 
// would change here.

class Bob {
    static int enough(final int capacity, final int alreadyOn, final int waiting){
        return Math.max(0, waiting + alreadyOn - capacity);
    }
}