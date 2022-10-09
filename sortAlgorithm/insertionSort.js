let array = [-6, 20, 8, 6, 4];

// first element will be sorted
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]; // 6
    let j = i - 1; // 2
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j]; // for 8 --> [-6,20,20,6,4]
      // for 6 --> [-6,8,8,20,4]
      j--;
    }
    arr[j + 1] = curr; // [-6,6,8,20,4]
    // [-6,8,6,20,4]
  }
  return arr;
}

console.log(insertionSort(array));

// 1. Starting with 2nd element arr[1]
// 2. arr[j] > curr - swapping the 2nd element if it is lesser than left element(0)
// 3. arr[j+1] = curr - swapping the 1st element if it is greater than 2nd element(1)

// Stable sorting => if the value are same the element should not be swaped, it is based on the implementation, 
// in this case line no. 8 arr[j] >= curr will be unstable.

// Space complexity => O(1)
// Time complexity => Best case --> O(n) --> partially sorted
// Worst case --> O(n^2) --> fully unsorted
