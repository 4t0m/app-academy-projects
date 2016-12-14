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
