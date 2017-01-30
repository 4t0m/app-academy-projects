const HanoiGame = require('../../solution/game.js');
const HanoiView = require('./hanoiview.js');

$( () => {
  let $rootEl = $('.hanoi');
  let game = new HanoiGame();
  let hanoiView = new HanoiView(game, $rootEl);
  window.hanoiView = hanoiView;
});
