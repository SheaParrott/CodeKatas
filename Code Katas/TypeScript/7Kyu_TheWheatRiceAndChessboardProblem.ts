// 7 kyu The wheat/rice and chessboard problem

// I assume most of you are familiar with the ancient legend of the rice (but I see wikipedia suggests wheat, for some reason)
// problem, but a quick recap for you: a young man asks as a compensation only 1 grain of rice for the first square, 2 grains
// for the second, 4 for the third, 8 for the fourth and so on, always doubling the previous.

// Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need to return up to which
// square of the chessboard one should count in order to get at least as many.

// As usual, a few examples might be way better than thousands of words from me:

// 0 grains need 0 cells
// 1 grain needs 1 cell
// 2 grains need 2 cells
// 3 grains need 2 cells
// 4 grains need 3 cells
// and etc.
// Input is always going to be valid/reasonable: ie: a non negative number; extra cookie for not using a loop to compute
// square-by-square (at least not directly) and instead trying a smarter approach [hint: some peculiar operator];
// a trick converting the number might also work: impress me!

export function squaresNeeded(grains: number): number {
    let square: number = 0
    let ans: number = 1
    while (ans <= grains) {
        ans *= 2
        square += 1
    }
    return square
}

// This is the top voted best practice from the soltuions
export const squaresNeededAgain = ($: number) =>
    [0, ...Array(63).fill(0).map((x,j)=> 2**j)].map((e,i)=> e > $ ? i : -1).filter(el => el>0)[0] - 1;


// This is another solution. Very interesting approach.
export function squaresNeededOnceAgain(grains: number) {
    return grains && grains.toString(2).length
}

// In my opinion this is one of the more readable best practices
export function squaresNeededOneMoreTime(grains: number) {
    // Search for 'sum of geometric series' and work backwards.
    // Eventually you get (sum + 1) equals (2 ** n)
    // log2 of (2 ** n) equals n.
    return Math.ceil(Math.log2(grains + 1));
}