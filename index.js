const $ = require('jquery');
const Game = require('./src/Game');

const app = {

  game: new Game(),
  board: [],

  init: function () {
    $( 'button#start' ).on('click', app.start);
    app.board = app.game.emptyBoard();
    app.update();
  },

  update: function () {
    $( 'table' ).html(app.game.display(app.board));
    $( 'table tr td' ).on('click', app.add)
  },

  start: function () {
    app.game = new Game();
    app.board = app.game.emptyBoard();
    app.update();
  },

  add: function() {
    const row = $(this).closest( 'tr' ).data('row'),
          col = $(this).data('col');

    if (!app.board[row][col]) {
      app.board[row][col] = app.game.turn(app.board);
      app.update();
      $( 'p#info' ).html(app.game.win(app.board))
    }
  },

};

$(document).ready(function () {
  app.init();
});