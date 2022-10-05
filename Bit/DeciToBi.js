function toBinary(a) {
  let ans = '';
  if(a == 1){
     return 1;
  }
  
  return toBinary(Math.floor(a/2)) + (a%2).toString() 
}


console.log(toBinary(13)) 