module.exports = class Game {
  constructor() {

  }

  display(board) {
    const displayRow = (acc, row, r) => acc + `<tr data-row="${r}">${row.reduce(displayCol, '')}</tr>`;
    const displayCol = (acc, col, c) => acc + `<td data-col="${c}" class="color-${col}"></td>`;
    return board.reduce(displayRow, '');
  }

  emptyBoard () {
    return [...Array(3)].map(() => Array(3).fill(0));
  }

  turn(board) {
    return board.toString().split(',').map(i => parseInt(i) === 2 ? -1 : parseInt(i)).reduce((acc, i) => acc + i, 0) ? 2 : 1;
  }

  win(board){

    const parse = (int) => int === 1 ? 'red' : 'yellow';

    if (board[0][0] && (
      board[0][0] === board[0][1] && board[0][0] === board[0][2] ||
      board[0][0] === board[1][0] && board[0][0] === board[2][0]
    )) return `${parse(board[0][0])} won`;

    if (board[1][1] && (
      board[1][1] === board[0][0] && board[1][1] === board[2][2] ||
      board[1][1] === board[0][1] && board[1][1] === board[2][1] ||
      board[1][1] === board[0][2] && board[1][1] === board[2][0] ||
      board[1][1] === board[1][0] && board[1][1] === board[1][2]
    )) return `${parse(board[1][1])} won`;

    if (board[2][2] && (
      board[2][2] === board[1][2] && board[2][2] === board[0][2] ||
      board[2][2] === board[2][1] && board[2][2] === board[2][0]
    )) return `${parse(board[2][2])} won`;

    for (const row of board) for (const col of row) if (!col) return '';
    return 'draw';
  }
};