// 1. factorial
function factorial(n) {
    if(n == 1) {
        return 1;
    }
    return n * factorial(n-1)
}

console.log(factorial(5))


// 2. Sum of n natural numbers
function sum(n) {
    if(n == 1) {
        return 1;
    }
    return n + sum(n-1)
}

console.log(sum(20))


// 3. a^b

function power(a,b) {
    if(b==0) {
        return 1
    }
    return a * power(a,b-1)
}

console.log(power(20,2))