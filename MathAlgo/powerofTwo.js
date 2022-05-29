// 1.
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  if (n == 1) {
    return true;
  }
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
// 2.
function isPowerOfTwo(n) {
    if (n < 1) {
      return false;
    }
   while(n>1){
       if(n % 2 !== 0) {
           return false
       }
       n = n/2
   }
   return true
  }

//   3.
  function isPowerOfTwoBitwise(n) {
    if (n < 1) {
        return false;
      }
      return (n & (n-1)) === 0
  }

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwoBitwise(2)); // true
console.log(isPowerOfTwoBitwise(7)); // false

