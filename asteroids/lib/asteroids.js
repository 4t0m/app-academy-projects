const GameView = require("./game_view.js");

window.GameView = GameView;

document.addEventListener("DOMContentLoaded", function(event) {
  let canvas = document.getElementById("game-canvas");
  let context = canvas.getContext("2d");
  let gameView = new GameView(context);
  gameView.start();
});
