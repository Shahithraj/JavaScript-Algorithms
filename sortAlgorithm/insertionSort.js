let array = [-6, 20, 8, 6, 4];

// first element will be sorted
function insertionSort(arr) {
for(let i=1;i<arr.length;i++){
    let curr = arr[i] // 8
    let j = i-1 // 1 
  while(j>=0 && arr[j] > curr) {
      arr[j+1] = arr[j]  //[-6,20,20,6,4]
      j--
  }
arr[j+1] = curr  // [-6,8,20,6,4]
}
return arr
}

console.log(insertionSort(array))

// 1. Starting with 2nd element arr[1]
// 2. arr[j] > curr - swapping the 2nd element if it is lesser than left element(0) 
// 3. arr[j+1] = curr - swapping the 1st element if it is greater than 2nd element(1)