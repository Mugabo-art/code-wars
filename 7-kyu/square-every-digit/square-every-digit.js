function squareDigits(num){
  return Number(
  num
    .toString()
    .split('')
    .map(d => (d * d).toString())
    .join('')
  );
}