Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  let mappedArray = [];

  function map(el) {
    mappedArray.push(callback(el));
  }

  this.myEach( map );
  return mappedArray;
};

// function plusOne(el) {
//   return el + 1;
// }
//
// console.log([1, 2, 3].myMap(plusOne));

Array.prototype.myInject = function (callback) {
  let result = this[0];
  function accumulate (el) {
    result = callback(result, el);
  }
  this.slice(1, this.length).myEach(accumulate);

  return result;
};

function multiply(a, b) {
  return a * b;
}

console.log([10,2,3].myInject(multiply));
