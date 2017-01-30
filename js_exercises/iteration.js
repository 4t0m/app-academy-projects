function bubbleSort(array) {
  let modified = true;
  while (modified) {
    modified = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        modified = true;
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort([1,2,5,3,6,0]));

function subStrings(string) {
  let substrs = [];
  for (let startIdx = 0; startIdx < string.length; startIdx++) {
    for (let endIdx = startIdx + 1; endIdx <= string.length; endIdx++) {
      substrs.push(string.slice(startIdx, endIdx));
    }
  }
  return substrs;
}

console.log(subStrings('cat'));
