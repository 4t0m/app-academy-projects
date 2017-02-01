const Asteroid = require("./asteroid.js");

const Game = function () {
  Game.DIM_X = 1920;
  Game.DIM_Y = 1080;
  Game.NUM_ASTEROIDS = 10;
  this.asteroids = [];
  this.addAsteroids();

};

Game.prototype.addAsteroids = function () {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++){
    this.asteroids.push(new Asteroid(
      {pos : this.randomPosition()} ));
  }
};

Game.prototype.randomPosition = function () {
  let x = Math.floor(Math.random() * Game.DIM_X);
  let y = Math.floor(Math.random() * Game.DIM_Y);
  return [x,y];
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach(function (el) {
    el.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach( function (el) {
    el.move();
  });
};

module.exports = Game;
