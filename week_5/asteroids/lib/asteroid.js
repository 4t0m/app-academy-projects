const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

const Asteroid = function (position) {
  Asteroid.COLOR = "grey";
  Asteroid.RADIUS = 10;

  let pos = position.pos;
  let options = {pos: pos, color: Asteroid.COLOR, radius: Asteroid.RADIUS, vel: Util.randomVec(4)};
  MovingObject.call(this, options);

};

Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;
