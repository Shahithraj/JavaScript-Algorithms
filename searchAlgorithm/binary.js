let array = [-5, 2, 6, 7, 9];

function binarySearch(arr, target) {
  let leftIndex = 0,
    rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target == arr[middleIndex]) {
      return middleIndex;
    } else if (target > arr[middleIndex]) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
}

function recursiveBinarySearch(arr, target) {
 return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target > arr[middleIndex]) {
    return search(arr, target, middleIndex + 1, rightIndex);
  } else {
    return search(arr, target, leftIndex, middleIndex - 1);
  }
}

console.log(recursiveBinarySearch(array, 6));
console.log(recursiveBinarySearch(array, 9));
console.log(recursiveBinarySearch(array, 1));

console.log(binarySearch(array, 6));
console.log(binarySearch(array, 9));
console.log(binarySearch(array, 1));
