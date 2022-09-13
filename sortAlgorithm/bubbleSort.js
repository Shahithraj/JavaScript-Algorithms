let array = [-6, 20, 8, 6, 4];

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let isSwapped;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort(array));
// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6]));
