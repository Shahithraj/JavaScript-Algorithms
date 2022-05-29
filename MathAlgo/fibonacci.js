// 1. Fibonacci series

function fibonacci(n) {
  let fib = 0;
  let a = 0,
    b = 1,
    c = 2;
  if (n == 0) {
    return "no value";
  } else if (n < 2) {
    return n;
  }  else {
    for (let i = 2; i <= n; i++) {
      fib = a + b; //2
      a = b;
      b = fib;
    }
  }
  return b;
}

console.log(fibonacci(4));

// 2. Fibonacci return array

function fibonacciArray(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacciArray(5));
// console.log(fibonacciArray(7))
// console.log(fibonacciArray(9))

// 3.Recursive O(2^n) - bad solution

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }  else {
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
  }
}

console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(9))
