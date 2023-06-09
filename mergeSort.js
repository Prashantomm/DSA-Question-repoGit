
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = [];
  const right = [];

  for (let i = 0; i < mid; i++) {
    left.push(arr[i]);
  }

  for (let i = mid; i < arr.length; i++) {
    right.push(arr[i]);
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}
let arr = [1,6,4,3,6,4,8,9]
let ans=mergeSort(arr);
