const Util = function (){};

Util.inherits = function (childClass, parentClass) {
  let surrogate = function () {};
  surrogate.prototype = parentClass.prototype;
  childClass.prototype = new surrogate();
  childClass.prototype.constructor = childClass;
};


// Return a randomly oriented vector with the given length.
Util.randomVec = function (length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
};

// Scale the length of a vector by the given amount.
Util.scale = function (vec, m) {
  return [vec[0] * m, vec[1] * m];
};

module.exports = Util;
