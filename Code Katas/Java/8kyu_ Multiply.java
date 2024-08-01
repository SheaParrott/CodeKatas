// The code does not execute properly. Try to figure out why.

public class Multiply {
    public static Double multiply(Double a, Double b) {
        return a * b;
    }
}

// this was missing a semicolon. Easy fix!

// best practice from solutions. Great idea to handle situations of
// null / empty variables passed

public class Multiply {
    public static Double multiply(Double a, Double b) {
        return (a == null || b == null) ? null : a * b;
    }
}
