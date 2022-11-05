// Question 205;
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true




var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let SMap = {};
  let TMap = {};

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];
    if (!SMap[sChar]) {
      SMap[sChar] = tChar; //
    }
    if (!TMap[tChar]) {
      TMap[tChar] = sChar; // r:o
    }
    if (TMap[tChar] !== sChar || SMap[sChar] !== tChar) {
      return false;
    }
  }
  return true;
};
