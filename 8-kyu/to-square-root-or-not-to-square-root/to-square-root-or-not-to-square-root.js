function squareOrSquareRoot(array) {
  return array.map(num => {
    const sqrt = Math.sqrt(num);
    return sqrt % 1 === 0 ? sqrt : num * num;
  });  
}