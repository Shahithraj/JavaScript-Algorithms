function palindrome(str) {
  let rev = '';

  for (let char of str) {
    rev = char + rev;
  }
  if (str == rev) {
    return true;
  } else {
    return false;
  }
}

function reverse(str) {
    return str.split('').every((val,i) => {
      return val === str[str.length-i-1] // str[0] == str[3], str[1] == str[2]
    })
       
   }
   

console.log(palindrome('appa'));
