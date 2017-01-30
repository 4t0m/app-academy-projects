const Game = require("./game.js");


const GameView = function (ctx) {
  this.ctx = ctx;
  this.game = new Game();
};

GameView.prototype.start = function () {
  setInterval(this.game.moveObjects(), 20);
  setInterval(this.game.draw(this.ctx), 20);
};

module.exports = GameView;
