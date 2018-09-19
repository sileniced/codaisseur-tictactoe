module.exports.Game = class Game {
  constructor() {

  }

  display(board) {
    const displayRow = (acc, row, r) => acc + `<tr data-col="${r}">${row.reduce(displayCol, '')}</tr>`;
    const displayCol = (acc, col, c) => acc + `<td data-col="${c}" class="color-${col}"></td>`;
    return board.reduce(displayRow, '');
  }

  play(board, coordinates) {

  }
};