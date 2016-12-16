const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

const Asteroid = function (position) {
  Asteroid.COLOR = "grey";
  Asteroid.RADIUS = 10;

  let pos = position.pos;
  let options = {pos: pos, color: Asteroid.COLOR, radius: Asteroid.RADIUS, vel: this.randomVec(4)};
  MovingObject.call(this, options);

};

Util.inherits(Asteroid, MovingObject);

// Return a randomly oriented vector with the given length.
Asteroid.prototype.randomVec = function (length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
};

// Scale the length of a vector by the given amount.
Asteroid.prototype.scale = function (vec, m) {
  return [vec[0] * m, vec[1] * m];
};

module.exports = Asteroid;
