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
  return str.split('').every((val, i) => {
    return val === str[str.length - i - 1]; // str[0] == str[3], str[1] == str[2]
  });
}

console.log(palindrome('appa'));

// recursive way with helper function
function isPalindrome(s) {
  let ans;
  const helper = (s, left, right) => {
    if (left >= right) {
      ans = true;
      return;
    }
    if (s[left] != s[right]) {
      ans = false;
      return;
    }
    left++;
    right--;
    helper(s, left, right);
  };
  helper(s, 0, s.length - 1);
  return ans;
}
console.log(isPalindrome('amanaplanacanalpanamium'));

function isPalindrome(str) {
  if (str.length == 1) return true;
  if (str.length == 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
console.log(isPalindrome('amanaplanacanalpanama'));
