const $ = require('jquery');
const Game = require('./src/Game');

const app = {
  game: new Game(),
  board: this.emptyBoard(),
  emptyBoard: function() {
    return [...Array(3)].map(() => Array(3).fill(0));
  },

  init: function () {
    $( 'button#start' ).on('click', app.start);
    app.update();
  },

  start: function () {
    app.game = new Game();
    app.board = app.emptyBoard();
    app.update();
  },

  add: function() {
    $( 'p#info' ).html(app.game.play(app.board, [$(this).closest( 'tr' ).data('row'), $(this).data('col')]))
  },

  update: function () {
    $( 'table' ).html(app.game.display(app.board));
    $( 'td' ).on('click', app.add)
  }

};

$(document).ready(function () {
  app.init()
});