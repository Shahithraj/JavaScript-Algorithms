function factorial(n) {
  let fact = 1;
  if (n === 0) {
    return 1;
  }
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(2));

// Recursive

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1); // n! = n * (n-1)! --> 5! = 5 * 4!
}
console.log(recursiveFactorial(5));
