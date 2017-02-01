const MovingObject = function (properties) {
    this.position = properties.pos;
    this.color = properties.color;
    this.velocity = properties.vel;
    this.radius = properties.radius;
};

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.position[0],
    this.position[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.position[0] += this.velocity[0];
  this.position[1] += this.velocity[1];
};

MovingObject.prototype.thing = function () {
  console.log("thing!");
};

module.exports = MovingObject;
