function reverseWords(str) {
  // Go for it
  return str
  .split(' ')
  .map(word => [...word].reverse().join(''))
  .join(' ');
}