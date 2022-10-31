function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true
}

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


// 3. Finding prime numbers upto n number

function sieveOfErathosthenes(n) {
	   let isPrime = []
     // make all numbers to true
     for(let i=0;i<=n;i++) {
       isPrime[i] = true
     }
   isPrime[0] = false;
		isPrime[1] = false;
  // finding the divisible numbers of i such as 2(4,6,8...),3(6,9,12),4,5,6,7 and make it false
			   for(let i=2; i*i<=n;i++) {
				   for(let j=2*i;j<=n;j+=i) {
					  isPrime[j] = false;
				   }
			   }
  isPrime.shift() // removing the 0th index
  return isPrime;
   }

// 3. Finding prime numbers upto n number unOptimised Code
  int n = scn.nextInt();
        
        for(int i = 2 ; i <= n ; i++){
            //check if i is prime or not
            boolean flag = true;
            for(int x = 2 ; x * x <= i ; x++) {
                if(i % x == 0) {
                    flag = false;
                    break;
                }
            }
            
            if(flag == true) {
                System.out.println(i);
            }
        }
