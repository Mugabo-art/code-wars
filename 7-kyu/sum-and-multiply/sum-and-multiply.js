var sumAndMultiply = function(sum, multiply) {
  const discriminant = sum * sum - 4 * multiply;
​
  if (discriminant < 0) {
    return null; // No real roots
  }
​
  const sqrtDisc = Math.sqrt(discriminant);
​
  if (!Number.isInteger(sqrtDisc)) {
    return null; // Discriminant is not a perfect square
  }
​
  const x1 = (sum + sqrtDisc) / 2;
  const x2 = (sum - sqrtDisc) / 2;
​
  if (
    Number.isInteger(x1) &&
    Number.isInteger(x2) &&
    x1 >= 0 && x1 <= 1000 &&
    x2 >= 0 && x2 <= 1000 &&
    x1 + x2 === sum &&
    x1 * x2 === multiply
  ) {
    return [Math.min(x1, x2), Math.max(x1, x2)];
  }
​
  return null;
};
​