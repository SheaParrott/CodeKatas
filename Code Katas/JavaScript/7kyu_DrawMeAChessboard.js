// 7 kyu draw me a chessboard

// A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

// Making a digital chessboard I think is an interesting way of visualising how loops can work together.

// Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

// So chessBoard(6,4) should return an array like this:

// [
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"]
// ]
// And chessBoard(3,7) should return this:

// [
//     ["O","X","O","X","O","X","O"],
//     ["X","O","X","O","X","O","X"],
//     ["O","X","O","X","O","X","O"]
// ]
// The white spaces should be represented by an: 'O'

// and the black an: 'X'

// The first row should always start with a white space 'O'

function chessBoard(rows, columns) {
    let letter = "O"
    let chessBoard = [];
    let toggleLetter = (character) => {
      letter = character == 'O' ? 'X' : 'O'
    }

    for(let i = 0; i < rows; i++) {
        chessBoard.push([])
        if (i > 0) toggleLetter(chessBoard[i-1][0])

        for(let j = 0; j < columns; j++) {
            chessBoard[i].push(letter)
            toggleLetter(letter)
        }
    }

    return chessBoard
}

// This was a clever best practice that simplifies my approach
function chessBoard(rows, columns) {
    var arr=[];
    for (var i=0; i<rows; ++i)
    {
        var ar=[];
        for (var j=0; j<columns; ++j)
            if ((i+j)%2==0)
            ar.push('O');
            else
            ar.push('X');
        arr.push(ar);
    }
    return arr;
}

// this is a clever soltuion
function chessBoard(rows, columns) {
    return Array.from({length: rows}, (_,i) => Array.from({length: columns}, (_,j) => 'OX'[(i+j)%2]));
}