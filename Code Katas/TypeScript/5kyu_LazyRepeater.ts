// 5 kyu Lazy Repeater

// The makeLooper() function (or make_looper in your language) takes a string (of non-zero length) as an argument. It returns a function.
// The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning
// of the string once it reaches the end.

// For example:

// var abc = makeLooper('abc');
// abc(); // should return 'a' on this first call
// abc(); // should return 'b' on this second call
// abc(); // should return 'c' on this third call
// abc(); // should return 'a' again on this fourth call
// Different loopers should not affect each other, so be wary of unmanaged global state.

export function makeLooper(str: string): () => string {
    let index: number = 0;
    return () => {
        const char = str[index];
        index = (index + 1) % str.length;
        return char;
    };
}

// this is the best practice / clever from solutions
export function makeLooperAgain(str: string): () => string {
    let index = -1
    return ()=> {
        index++
        return str[index%str.length]
    };
}

// this is the most concise soltuion
export function makeLooperYetAgain(str: string, i: number = 0): () => string {
    return () => str.substr(i++ % str.length, 1);
}