function reverse(str) {
    const temparr = str.split(''); // ['a','p','p','l','e']
    const reverseArr = temparr.reverse();
    const joinArr = reverseArr.join('');
    return joinArr;
    
}

function reverse (str) {
    let reversed = ''
    for (let char of str) {
        reversed = char + reversed 
    }
    return reversed;

}

function reverse(str) {
    const temparr = str.split(''); // ['a','p','p','l','e']
  
   let rev = temparr.reduce((prev,curr) => {
     return curr + prev 
   },'')
    return rev;
    
}
console.log(reverse("apple"))
