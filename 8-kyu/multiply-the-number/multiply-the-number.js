function multiply(number){
  //your code here
  const digitcount = Math.abs(number).toString().length || 1;
  const power = Math.pow(5, digitcount);
  return number * power
}