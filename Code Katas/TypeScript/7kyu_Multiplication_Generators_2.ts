// 7 kyu Multiplication - Generators #2

// Multiplication - Generators #2
// Generators can be used to wonderful things. You can use them for numerous things, but here is one specific example.
// You are studying for a test so you must practice your multiplication, but you don't have a multiplication table
// showing the different examples. You have decided to create a generator that prints out a limitless list of time tables.
// Task
// Your generator must take one parameter `a` then everytime the generator is called you must return a string in the
// format of: `'a x b = c'` where c is the answer. Also, the value of `b`, which starts at 1, must increment by 1 each time!

// More Info: Generators (JS), Generators (Python), Generators (PHP), Generators (Java)

export function* generator(a: number): Generator<string> {
    let b: number = 1;
    while (true) {
        yield `${a} x ${b} = ${a*b}`;
        b++;
    };
}

// here is the best practice
export function* generatorAgain(a: number): Generator<string> {
    for (let i = 1; ; i++) yield `${a} x ${i} = ${i*a}`
}

// here is a clever solution. How this user is incrementing the b variable while still returning the correct c value
// demonstrates good understanding in how JS works for these different operators!
export function* generatorYetAgain(a: number): Generator<string> {
    var b: number = 1;
    while (true) yield `${a} x ${b} = ${a*b++}`;
}