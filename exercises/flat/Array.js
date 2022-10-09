// Without helper function
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}
console.log(flatten([1, 2, 3, [4, 5]]));

let arr = [1, [2, 3, [4, 5]], 6, [7, 8], 9, 10];

//  arr.flat() flat 1 deep array
// arr.flat(2) flat 2 deep array
// arr.flat(3) flat 3 deep array
// arr.flat(Infinity)  it will make array flat infinity deep array

function flatten(arr) {
  let result = [];
  const flat = (arr) => {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        flat(item);
      } else {
        result.push(item);
      }
    });
  };
  flat(arr);
  return result;
}
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
