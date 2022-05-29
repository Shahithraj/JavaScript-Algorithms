// function isPrimeNumber(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true
// }

//  Optimized
function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // square root of n is greater than the divisor of n. so we can able to find in square of n itself
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(1)); // false
console.log(isPrimeNumber(5)); // true
console.log(isPrimeNumber(4)); // false
