function createBoard() {
    return [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
}

function printBoard(board) {
    console.log('   0  1  2');
    for (let i = 0; i < 3; i++) {
        let row = i + ' ';
        for (let j = 0; j < 3; j++) {
            row += board[i][j] + '  ';
        }
        console.log(row);
    }
}

function checkWinner(board, player) {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true;
        }
    }
    if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
        return true;
    }
    return false;
}

function checkTie(board) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

function playGame() {
    const board = createBoard();
    const currentPlayer = 'X';
    const winner = null;

    while (!winner && !checkTie(board)) {
        printBoard(board);
        console.log(`Player ${currentPlayer}'s turn`);
        const row = prompt('Enter row (0, 1, or 2): ');
        const col = prompt('Enter column (0, 1, or 2): ');

        if (board[row][col] === '') {
            board[row][col] = currentPlayer;
            if (checkWinner(board, currentPlayer)) {
                winner = currentPlayer;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        } else {
            console.log('That cell is already taken. Try again.');
        }
    }

    printBoard(board);

    if (winner) {
        console.log(`Congratulations! Player ${winner} wins!`);
    } else {
        console.log('It\'s a tie!');
    }
}

playGame();
