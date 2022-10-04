// 1. a^b%m
function modulo(a,b,m) {
  if(b == 0) {
    return 1
  }
  else if(b %2==0) {
    return solve(a*a % m,b/2,m)
  }
  else {
    return (a * solve(a*a % m,b-1/2,m))%m
  }
}

console.log(modulo(7,996,1000000007)) // 10^9+7


// 2. 1 and 2 are same ( a^b % 1000000007)
function modulo(a,b,m) {

    let x = 1; 
  for (let i = 1; i <= b; i++) { 
    x *= 7; 
    x %= m; 
  } 
    return x
  }
  console.log(modulo(7,996,1000000007)) // 10^9+7 int support upto 10^9


// finding last 3 digit
function modulo(a,b,m) {

  let x = 1; 
for (let i = 1; i <= b; i++) { 
  x *= 7; 
  x %= 1000; 
} 
  return x
}

console.log(modulo(7,996,1000))