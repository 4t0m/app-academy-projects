const Util = {
  inherts (childClass, parentClass) {
    let surrogate = function () {};
    surrogate.prototype = parentClass.prototype;
    childClass.prototype = new surrogate();
    childClass.prototype.constructor = childClass;
  }
};

module.exports = Util;
