function uniq(array) {
  let uniqs = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqs.indexOf(array[i]) === -1) {
      uniqs.push(array[i]);
    }
  }
  return uniqs;
}

console.log(uniq([1,3,2,1,4,3]));

Array.prototype.uniq = function () {
  let uniqs = [];
  for (let i = 0; i < this.length; i++) {
    if (uniqs.indexOf(this[i]) === -1) {
      uniqs.push(this[i]);
    }
  }
  return uniqs;
};

console.log([1,3,2,1,4,3].uniq());


function twoSum(array) {
  let pairs = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
}

console.log(twoSum([-1, 0, 2, -2, 1]));

Array.prototype.twoSum = function () {
  let pairs = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
};

console.log([-1, 0, 2, -2, 1].twoSum());


function transpose(array) {
  let transposed = [];
  for (let i = 0; i < array[0].length; i++) {
    let row = [];
    for (let rowIdx = 0; rowIdx < array.length; rowIdx++) {
      row.push(array[rowIdx][i]);
    }
    transposed.push(row);
  }
  return transposed;
}

console.log(transpose([[0, 1, 2],
                      [3, 4, 5],
                      [6, 7, 8]]));

Array.prototype.transpose = function () {
  let transposed = [];
  for (let i = 0; i < this[0].length; i++) {
    let row = [];
    for (let rowIdx = 0; rowIdx < this.length; rowIdx++) {
      row.push(this[rowIdx][i]);
    }
    transposed.push(row);
  }
  return transposed;
};


console.log([[0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]].transpose());
