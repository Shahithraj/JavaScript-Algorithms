function anagram(a,b) {
    a = a.replace(/[^\w]/g,"").toLowerCase()
    b = b.replace(/[^\w]/g,"").toLowerCase()
    if(a.length !== b.length) {
      return false
    }
    
    let result = {}
    
    for(let char of a) {
      result[char] =  result[char] ? result[char] + 1 : 1
    }
    
    for(let char of b) {
      if(!result[char]){
        return false
      }
      result[char] -= 1 
    }
  
    return true
  }
  
  
  console.log(anagram('wertYq!','qeywwt!'))
  console.log(anagram('car','rat'))
  console.log(same('awesome','awesom')) //false
  console.log(same('texttwisttime','timetwisttext')) //true
  console.log(same('',''))
