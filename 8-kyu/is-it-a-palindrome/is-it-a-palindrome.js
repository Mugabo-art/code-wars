function isPalindrome(x) {
  let str = x.toLowerCase();
  let rev = str.split('').reverse().join('');
  return str === rev;
  // your code here
}