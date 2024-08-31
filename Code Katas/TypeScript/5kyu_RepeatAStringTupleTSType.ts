// 5 kyu Repeat a string / tuple (TS type)

// Task
// Create a type Repeat that will receive a string / tuple T and a number R (Repeat<T, R extends number>). The type should give the repetition of items in T, R times. The given type must be in the same type as T (meaning that if T is string, then Repeat<T, R> should give a string, and a tuple if T is tuple).

// Examples
// type A = Repeat<"a", 7>;
// // A should have type "aaaaaaa"

// type B = Repeat<"abc", 5>;
// // B should have type "abcabcabcabcabc"

// type C = Repeat<["this", "is", "a", "tuple"], 3>;
// // C should have type ["this", "is", "a", "tuple", "this", "is", "a", "tuple", "this", "is", "a", "tuple"]

// type D = Repeat<"", 123>;
// // D should have type ""

// type E = Repeat<[], 123>;
// // E should have type []

// type F = Repeat<["mixed", 1, "type", 2], 2>;
// // F should have type ["mixed", 1, "type", 2, "mixed", 1, "type", 2]
// Good luck!

// Solution #1
type Combine<A, B>
    = A extends string
        ? (B extends string ? `${A}${B}` : never)
        : A extends any[]
            ? (B extends any[] ? [...A, ...B] : never)
            : never

export type Repeat<T extends any[] | string, R extends number, C = T extends string ? "" : [], A extends number[] = []>
    = A["length"] extends R
          ? C
          : Repeat<T, R, Combine<C, T>, [...A, 0]>


//  Solution #2
type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type DecDigit<D extends string> =
    D extends '1' ? '0' :
    D extends '2' ? '1' :
    D extends '3' ? '2' :
    D extends '4' ? '3' :
    D extends '5' ? '4' :
    D extends '6' ? '5' :
    D extends '7' ? '6' :
    D extends '8' ? '7' :
    D extends '9' ? '8' :
    '';

type Dec<N extends string> =
    N extends `1000` ? `999` :
    N extends `${infer A extends Digit}000` ? `${DecDigit<A>}999` :
    N extends `${infer A extends Digit}${infer B extends Digit}00` ? `${A}${DecDigit<B>}99` :
    N extends `${infer A extends Digit}${infer B extends Digit}${infer C extends Digit}0` ? `${A}${B}${DecDigit<C>}9` :
    N extends `${infer A extends Digit}${infer B extends Digit}${infer C extends Digit}${infer D extends Digit}` ? `${A}${B}${C}${DecDigit<D>}` :
    N extends `100` ? `99` :
    N extends `${infer A extends Digit}00` ? `${DecDigit<A>}99` :
    N extends `${infer A extends Digit}${infer B extends Digit}0` ? `${A}${DecDigit<B>}9` :
    N extends `${infer A extends Digit}${infer B extends Digit}${infer C extends Digit}` ? `${A}${B}${DecDigit<C>}` :
    N extends `10` ? `9` :
    N extends `${infer A extends Digit}0` ? `${DecDigit<A>}9` :
    N extends `${infer A extends Digit}${infer B extends Digit}` ? `${A}${DecDigit<B>}` :
    N extends `${infer A extends Digit}` ? `${DecDigit<A>}` :
    `0`;

type RecStr<T extends [string, string, string]> =
    T extends [infer S extends string, infer E extends string, infer K extends string] 
        ? K extends '0'
            ? S
            : RecStr<[`${S}${E}`, E, Dec<K>]>
        : '';

type RecTuple<T extends [any[], any[], string]> =
    T extends [infer S extends any[], infer E extends any[], infer K extends string] 
        ? K extends '0'
            ? S
            : RecTuple<[[...S, ...E], E, Dec<K>]>
        : [];

export type Repeat<S extends string | any[], K extends number> =
    S extends string
        ? RecStr<['', S, `${K}`]>
        : S extends any[]
            ? RecTuple<[[], S, `${K}`]>
            : never;


// Solution #3
type RepeatArray<T, R extends number, A extends any[]=[]> = A['length'] extends R ? A : RepeatArray<T, R, [T, ...A]>
type Concat<T extends Array<any>, L extends any[]=[]> = T['length'] extends 0 ? L : T extends [infer F, ...infer R] ? F extends any[] ? Concat<R, [...F, ...L]> : never : never
type RepeatStr<T extends string, R extends number, S extends string="", A extends T[]=[]> = A['length'] extends R ? S : RepeatStr<T, R, `${T}${S}`, [T, ...A]>
export type Repeat<T, R extends number> = T extends Array<any> ? Concat<RepeatArray<T, R>> : T extends string ? RepeatStr<T, R> : never

// Solution #4
type StrRepeat<S extends string, T extends number, I extends 0[] = [], R extends string = "">
  = I["length"] extends T ? R
  : StrRepeat<S, T, [...I, 0], `${R}${S}`>

type TuppleRepeat<T extends any[], RR extends number, I extends 0[] = [], R extends any[] = []>
  = I["length"] extends RR ? R
  : TuppleRepeat<T, RR, [...I, 0], [...R, ...T]>

export type Repeat<T extends string | any[], R extends number>
  = T extends string
  ? StrRepeat<T, R>
  : T extends any[]
  ? TuppleRepeat<T, R>
  : never;


// Solution #5
type RepeatStr<S extends string, Acc extends string, N, Xs extends any[]> = Xs['length'] extends N ? Acc : RepeatStr<S, `${Acc}${S}`, N, [any, ...Xs]>;
type RepeatTuple<T extends any[], Acc extends any[], N, Xs extends any[]> = Xs['length'] extends N ? Acc : RepeatTuple<T, [...Acc, ...T], N, [any, ...Xs]>;
export type Repeat<X, N> = X extends string ? RepeatStr<X, "", N, []> : X extends any[] ? RepeatTuple<X, [], N, []> : never;



// Solution #6
type Repeat_<T, R, V, A> = A["length"] extends R ? V : Repeat_<T, R, T extends string ? `${T}${V}` : [...T, ...V], [void, ...A];
export type Repeat<T, R> = Repeat_<T, R, T extends string ? "" : [], []>>;