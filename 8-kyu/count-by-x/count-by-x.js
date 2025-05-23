function countBy(x, n) {
  let z = [];
  let i = 1;
  while (i <= n) {
    z.push(x * i);
    i++;
  }
  return z;
}