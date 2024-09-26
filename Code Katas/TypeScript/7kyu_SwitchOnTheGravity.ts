// 7 kyu Switch on the Gravity

// Given a 2D array of some suspended blocks (represented as hastags), return another 2D array which shows the end result once gravity is switched on.

// Examples
// switch_gravity([
//   ["-", "#", "#", "-"],
//   ["-", "-", "-", "-"],
//   ["-", "-", "-", "-"],
//   ["-", "-", "-", "-"]
// ]) ➞ [
//   ["-", "-", "-", "-"],
//   ["-", "-", "-", "-"],
//   ["-", "-", "-", "-"],
//   ["-", "#", "#", "-"]
// ]

// switch_gravity([
//   ["-", "#", "#", "-"],
//   ["-", "-", "#", "-"],
//   ["-", "-", "-", "-"],
// ]) ➞ [
//   ["-", "-", "-", "-"],
//   ["-", "-", "#", "-"],
//   ["-", "#", "#", "-"]
// ]

// switch_gravity([
//   ["-", "#", "#", "#", "#", "-"],
//   ["#", "-", "-", "#", "#", "-"],
//   ["-", "#", "-", "-", "-", "-"],
//   ["-", "-", "-", "-", "-", "-"]
// ]) ➞ [
//   ["-", "-", "-", "-", "-", "-"],
//   ["-", "-", "-", "-", "-", "-"],
//   ["-", "#", "-", "#", "#", "-"],
//   ["#", "#", "#", "#", "#", "-"]
// ]
// Notes
// Input array is guaranteed to always be rectangular and only contain - and #.

// Each block falls individually, meaning there are no rigid objects. Think about it like falling sand in Minecraft as opposed to the rigid blocks in Tetris.

export function switchGravity(arr: ('-' | '#')[][]): ('-' | '#')[][] {
    const rows = arr.length;
    const cols = arr[0].length;

    for (let col = 0; col < cols; col++) {
        let blocks = 0;

        for (let row = 0; row < rows; row++) {
            if (arr[row][col] === '#') {
                blocks++;
            }
        }

        for (let row = rows - 1; row >= 0; row--) {
            if (blocks > 0) {
                arr[row][col] = '#';
                blocks--;
            } else {
                arr[row][col] = '-';
            }
        }
    }

    return arr;
}