function toDecimal(a) {
    let ans = 0;
    let rem;
    let i =1;
    while(a>0) {
      rem = a%10;
      a = Math.floor(a/10);
      ans = rem * i + ans  
      i = i * 2;
    }
    return ans
  }
  
  
  console.log(toDecimal(111)) 