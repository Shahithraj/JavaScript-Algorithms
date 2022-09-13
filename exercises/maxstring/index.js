function maxChar(str){
    let max = 0 ;
    let maxchar;
    let obj = {}
    for(let char of str) {
      if(!obj[char]) {  
        obj[char] = 1
      }else {
        obj[char] += 1
      }
    }

   for(let val in obj) {
     if(obj[val] >= max ) {
        max = obj[val]
       maxchar = val
     }  
     }
   
    return maxchar
  }
  
  console.log(maxChar("abcccddddd 1111112222222"))