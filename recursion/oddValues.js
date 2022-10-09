// Using Helper Function

function oddValues(arr) {
  let oddArr = [];
  const helper = (arr) => {
    if (arr.length === 0) {
      return;
    }
    if (arr[0] % 2 !== 0) {
      oddArr.push(arr[0]);
    }
    helper(arr.slice(1));
  };
  helper(arr);
  return oddArr;
}
console.log(oddValues([1, 2, 6, 9, 5, 37, -52, -97]));

//   2nd method
function oddValues(arr) {
  let oddArr = [];
  const helper = (i, arr) => {
    if (i >= arr.length) {
      return;
    }
    if ((arr[i] & 1) !== 0) {
      oddArr.push(arr[i]);
    }
    i++;
    helper(i, arr);
  };

  helper(0, arr);
  return oddArr;
}
console.log(oddValues([1, 2, 6, 9, 5, 37, -52, -97]));
