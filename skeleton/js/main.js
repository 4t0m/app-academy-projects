const View = require('./ttt-view.js');// require appropriate file
const Game = require('../../solution/game.js');// require appropriate file

$( () => {
  let game = new Game();
  let $el = $(".ttt");
  let view = new View(game, $el);


});
