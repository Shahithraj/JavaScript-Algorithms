function reverse (int) {
    let n = int
    let temp = ''
    const arr = int.toString().split('')
    if(Math.sign(int) < 0) {
     temp =  arr.shift()
    }
    const rev = arr.reverse().join('')
    temp = temp + rev
   
   return temp
  }


  function reverse (int) {
    let reverse = int.toString().split('').reverse().join('') // '321-'
    let reversedNum = parseInt(reverse) // '321'
      reversedNum *= Math.sign(int) //  positive number --> 1, negative number ---> -1 (321 * -1)
    return reversedNum
    }

  console.log(reverse(-123))